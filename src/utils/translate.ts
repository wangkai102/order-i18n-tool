import * as md5 from 'md5'
import fetch from 'node-fetch'
export const translate = async (query: string) => {
    console.log('🚀 ~ file: translate.ts ~ line 4 ~ translate ~ query', query)
    const appId = '20221202001481151'
    // 8位随机数
    const salt = (Math.random() * 100000000).toString().slice(-8)
    const from = 'zh'
    const to = 'en'
    const q = query
    const secretKey = 'WHHB5BqCyExSHtlIaO4f'
    const sign = md5(appId + q + salt + secretKey)
    const paramString = `q=${encodeURI(q)}&from=${from}&to=${to}&appid=${appId}&salt=${salt}&sign=${sign}`
    const url = 'http://api.fanyi.baidu.com/api/trans/vip/translate?' + paramString
    const res = await fetch(url)
    const result = (await res.json()) as any
    console.log('🚀 ~ file: translate.ts ~ line 16 ~ translate ~ result', result)
    return result.trans_result as any[]
}
