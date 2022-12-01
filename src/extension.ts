import * as vscode from 'vscode'
import ast from './utils/ast'
import { geti18nPath } from './utils/path'
import { getUseLangText, insterI18nContent } from './utils/tool'
import { insertToCurFilePosition, insertToFilePosition, readFile, writeFile } from './utils/vscodeApis'

export function activate(context: vscode.ExtensionContext) {
    let autoI18n = vscode.commands.registerCommand('order-i18n-tool.autoI18n', () => {
        const filePath = vscode.window.activeTextEditor?.document.uri.fsPath
        console.log('🚀 ~ file: extension.ts ~ line 30 ~ readFile ~ filePath', filePath)
        readFile(filePath)
            .then((data) => {
                if (data && filePath) {
                    return ast(data, filePath)
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

    let disposable = vscode.commands.registerCommand('order-i18n-tool.addUseLang', () => {
        const filePath = vscode.window.activeTextEditor?.document.uri.fsPath
        console.log('🚀 ~ addUseLang ~ filePath', filePath)
        const position = vscode.window.activeTextEditor?.selection.active
        if (filePath && position) {
            const text = getUseLangText(filePath)
            if (text) {
                insertToCurFilePosition(position, text)
            }
        }
        // vscode.window.activeTextEditor?.document.
        // addUseLang(filePath)
    })

    context.subscriptions.push(autoI18n)
    context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
export function deactivate() {}
