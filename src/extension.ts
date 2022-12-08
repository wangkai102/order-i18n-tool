import * as vscode from 'vscode'
import { chinese2Lang } from './utils/ast'
import { getOriganlI18nContent, getUseLangText, insterI18nContent } from './utils/tool'
import { insertToCurFilePosition, insertToFilePosition, readFile, writeFile } from './utils/vscodeApis'

export function activate(context: vscode.ExtensionContext) {
    let autoI18n = vscode.commands.registerCommand('order-i18n-tool.autoI18n', () => {
        const filePath = vscode.window.activeTextEditor?.document.uri.fsPath
        console.log('🚀 ~ file: extension.ts ~ line 30 ~ readFile ~ filePath', filePath)
        getOriganlI18nContent().then((zhSource) => {
            readFile(filePath)
                .then((data) => {
                    if (data && filePath) {
                        return chinese2Lang(data, filePath, zhSource)
                    }
                    return Promise.reject('读取文件失败')
                })
                .then((data) => {
                    if (data?.code && data?.i18nContent) {
                        writeFile(filePath, data?.code)
                        insterI18nContent(filePath, data?.i18nContent)
                    }
                })
                .then(() => {
                    vscode.window.showInformationMessage('文件转换完成 power by order-i18n-tool!')
                })
        })
    })

    let addUseLang = vscode.commands.registerCommand('order-i18n-tool.addUseLang', () => {
        const filePath = vscode.window.activeTextEditor?.document.uri.fsPath
        console.log('🚀 ~ addUseLang ~ filePath', filePath)
        const position = vscode.window.activeTextEditor?.selection.active
        if (filePath && position) {
            const text = getUseLangText(filePath)
            if (text) {
                insertToCurFilePosition(position, text)
            }
        }
    })

    context.subscriptions.push(autoI18n)
    context.subscriptions.push(addUseLang)
}

// This method is called when your extension is deactivated
export function deactivate() {}
