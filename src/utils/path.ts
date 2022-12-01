import * as path from 'path'

export const geti18nPath = (sourcePath: string) => {
    const parseRes = path.parse(sourcePath)
    console.log('🚀 ~ file: path.ts ~ line 5 ~ geti18nPath ~ parseRes', parseRes)
    const dir = parseRes?.dir?.replace(/\\\\/g, '/').replace(/\\/g, '/')
    console.log('🚀 ~ file: path.ts ~ line 7 ~ geti18nPath ~ dir', dir)
    if (dir as string) {
        const arr = dir.split('/')
        const findIndex = arr.findIndex((item: string) => {
            return item === 'src'
        })
        const r = arr.slice(findIndex + 5, findIndex + 8)
        r[r.length - 1] = `${r[r.length - 1]}.json`
        const start = arr.slice(0, findIndex + 1)
        const i18nPath = [...start, 'i18n', 'resource', 'zh-cn', 'lang', 'pages', ...r].join('/')
        console.log('🚀 ~ file: path.ts ~ line 13 ~ geti18nPath ~ r', i18nPath)
        return i18nPath
    }
    return ''
    // console.log("🚀 ~ file: path.ts ~ line 5 ~ getPath ~ arr", arr)
}
