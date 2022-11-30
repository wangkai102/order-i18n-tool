import * as vscode from 'vscode'
import { Utf8ArrayToStr } from './util'

export const readFile = async (filePath: string | undefined) => {
    if (!filePath) {
        return
    }
    const fileContent = await vscode.workspace.fs.readFile(vscode.Uri.file(filePath))
    const str = Utf8ArrayToStr(fileContent)
    return str
}

export const writeFile = async (filePath: string | undefined, data: string) => {
    if (!filePath || !data) {
        return
    }
    await vscode.workspace.fs.writeFile(vscode.Uri.file(filePath), Buffer.from(data), { create: true, overwrite: true })
}

/** insert some text to a file's specific position */
export const insertToFilePosition = async (fileName: string, position: vscode.Position, insertText: string) => {
    const doc = await vscode.workspace.openTextDocument(fileName)
    const editor = await vscode.window.showTextDocument(doc, 1, false)
    await editor.edit((e) => {
        e.insert(position!, insertText)
    })
}
