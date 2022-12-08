import * as path from 'path'

export const geti18nPath = (sourcePath: string) => {
    const parseRes = path.parse(sourcePath)
    console.log('🚀 ~ file: path.ts ~ line 5 ~ geti18nPath ~ parseRes', parseRes)
    let dir = parseRes?.dir?.replace(/\\\\/g, '/').replace(/\\/g, '/')
    console.log('🚀 ~ file: path.ts ~ line 7 ~ geti18nPath ~ dir', dir)
    if (dir as string) {
        if (dir.endsWith('pages')) {
            dir += '/main/layout'
        }
        if (dir.endsWith('main')) {
            dir += '/layout'
        }
        console.log('🚀 ~ file: path.ts ~ line 12 ~ geti18nPath ~ dir', dir)
        const arr = dir.split('/')
        const findIndex = arr.findIndex((item: string) => {
            return item === 'src'
        })
        const start = arr.slice(0, findIndex + 1)
        if (dir.includes('/pages') || dir.includes('/pages/main')) {
            const r = arr.slice(findIndex + 5, findIndex + 8)
            r[r.length - 1] = `${r[r.length - 1]}.json`
            const i18nPath = [...start, 'i18n', 'resource', 'zh-cn', 'lang', 'pages', ...r].join('/')
            console.log('🚀 ~ file: path.ts ~ line 22 ~ geti18nPath ~ i18nPath', i18nPath)
            return i18nPath
        } else {
            const r = arr.slice(findIndex + 1, findIndex + 2)
            r[r.length - 1] = `${r[r.length - 1]}.json`
            const i18nPath = [...start, 'i18n', 'resource', 'zh-cn', ...r].join('/')
            console.log('🚀 ~ file: path.ts ~ line 29 ~ geti18nPath ~ i18nPath', i18nPath)
            return i18nPath
        }
    }
    return ''
}
