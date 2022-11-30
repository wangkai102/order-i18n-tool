import * as prettier from 'prettier'
import { prettierRules } from './constant'
import { fileIsExist } from './fs'
import { geti18nPath } from './path'
import { readFile, writeFile } from './vscodeApis'

export const insterI18nContent = async (sourcePath: string | undefined, i18nContent: any) => {
    if (!sourcePath || !i18nContent) {
        return
    }
    const i18nPath = geti18nPath(sourcePath)
    console.log('🚀 ~ file: fs.ts ~ line 19 ~ insterI18nContent ~ i18nPath', i18nPath)
    const isExist = await fileIsExist(i18nPath)
    if (isExist) {
        const fileContent = (await readFile(i18nPath)) as string
        const i18nContentObj = JSON.parse(fileContent)
        const newI18nContent = { ...i18nContentObj, ...i18nContent }
        const json = prettier.format(JSON.stringify(newI18nContent), { parser: 'json' })
        await writeFile(i18nPath, json)
    } else {
        const json = prettier.format(JSON.stringify(i18nContent), { parser: 'json' })
        await writeFile(i18nPath, json)
    }
}

export const getUseLangText = (sourcePath: string | undefined) => {
    if (!sourcePath) {
        return
    }
    const i18nPath = geti18nPath(sourcePath)
    const pathArr = i18nPath.split('/')
    const fileName = pathArr[pathArr.length - 1].replace('.json', '')
    const findIndex = pathArr.findIndex((item) => item === 'pages')
    const path = pathArr.slice(findIndex, pathArr.length - 1).join('/')
    const text = `\n    const lang = useLang('${fileName}', '${path}')`
    return text
}
