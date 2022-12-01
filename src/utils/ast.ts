import * as babylon from '@babel/parser'
import traverse from '@babel/traverse'
import generate from '@babel/generator'
import * as prettier from 'prettier'
import * as t from '@babel/types'
import template from '@babel/template'
import * as path from 'path'
import { chineseReg, prettierRules } from './constant'
import { translate } from './translate'

const ast = (code: string, filePath: string) => {
    if (!code) return
    console.log('🚀 ~ file: ast.ts ~ line 15 ~ ast ~ code', code)
    const p = path.parse(filePath)
    const fileName = p?.name || ''
    const keyPrefix = fileName.slice(0, 1).toUpperCase() + fileName.slice(1, fileName.length)
    const Ast = babylon.parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'], //这里是要用到的插件，文中插件未用到
    })
    const i18nArr: string[] = []
    traverse(Ast, {
        enter(path: any) {
            const value = path.node.value
            if ((path.node.type === 'JSXText' || path.node.type === 'StringLiteral') && chineseReg.test(value)) {
                if (chineseReg.test(value)) {
                    const replaceValue = value?.replaceAll('\n', '').trim() || value
                    i18nArr.push(replaceValue)
                }
            }
        },
    })
    console.log('🚀 ~ file: ast.ts ~ line 19 ~ ast ~ i18nArr', i18nArr)
    const query = i18nArr.join('\n')
    const i18nContent: any = {}
    return translate(query).then((translateArr) => {
        console.log('🚀 ~ file: ast.ts ~ line 22 ~ ast ~ translateArr', translateArr)
        let index = 0
        traverse(Ast, {
            enter(path: any) {
                if (path.node.type !== 'ImportSpecifier' && path.node.imported?.name !== 'useLang') {
                    const importAst = template.ast(`import { useLang, useImage, useStyle, getLang } from '@/i18n/i18n'`)
                    if (t.isProgram(path.node)) {
                        path.node.body.unshift(importAst)
                    }
                }
                const value = path.node.value
                if ((path.node.type === 'JSXText' || path.node.type === 'StringLiteral') && chineseReg.test(value)) {
                    const replaceValue = value?.replaceAll('\n', '').trim() || value
                    const findRes = translateArr.find((item) => item.src === replaceValue)
                    index++
                    let key = `${keyPrefix}_Translate_Error_${index}`
                    if (findRes?.dst) {
                        key = findRes?.dst
                            .replace(',', '')
                            .split(' ')
                            .map((item: string) => {
                                if (item) {
                                    return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
                                }
                                return item
                            })
                            .slice(0, 5)
                            .join('')
                            .replace(/\W/g, '_')
                        if (key.endsWith('_')) {
                            key = key.slice(0, key.length - 1)
                        }
                        key = `${keyPrefix}_${key}`
                    }
                    i18nContent[key] = replaceValue
                    if (path.node.type === 'JSXText') {
                        const jsxLangAst = t.jsxExpressionContainer(t.identifier(`lang['${key}']`))
                        path.replaceWith(jsxLangAst)
                    }
                    if (path.node.type === 'StringLiteral') {
                        if (path.parentPath.node.type === 'JSXAttribute') {
                            const jsxLangAst = t.jsxExpressionContainer(t.identifier(`lang['${key}']`))
                            path.replaceWith(jsxLangAst)
                        } else {
                            console.log('🚀 ~ file: ast.ts ~ line 55 ~ enter ~ path.node', path.node)
                            const langTemp = template(`%%LANG%%[%%LANG_NAME%%]`)
                            const langAst = langTemp({
                                LANG: t.identifier('lang'),
                                LANG_NAME: t.stringLiteral(key),
                            })
                            path.replaceWith(langAst)
                        }
                    }
                }
            },
        })
        console.log('🚀 ~ file: ast.ts ~ line 88 ~ ast ~ Ast', Ast)
        const result = generate(
            Ast,
            {
                compact: true,
                retainLines: true,
                minified: true,
            },
            code
        )
        console.log('🚀 ~ file: ast.ts ~ line 88 ~ ast ~ generate', result)
        // @ts-ignore
        const prettierCode = prettier.format(result.code, { ...prettierRules, parser: 'babel-ts' })
        console.log('🚀 ~ file: ast.ts ~ line 88 ~ ast ~ prettierCode', prettierCode)
        return { code: prettierCode, i18nContent }
    })
}

export default ast
