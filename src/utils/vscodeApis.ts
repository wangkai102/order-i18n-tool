import * as vscode from 'vscode'
import * as fs from 'fs'
const {
    workspace: { workspaceFolders, rootPath },
    commands: { registerCommand },
    window: { showInformationMessage, showQuickPick },
    Uri,
} = vscode
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


/** insert some text to after a file's specific text */
export const openFileAndInsertText = async (fileName: string, findText: string, insertText: string) => {
    const doc = await vscode.workspace.openTextDocument(fileName)
    const content = doc.getText()
    const offset = content.indexOf(findText)
    const position = doc.positionAt(offset)
    const editor = await vscode.window.showTextDocument(doc, 1, false)
    await editor.edit((e) => {
        e.insert(position!, insertText)
    })
}

/** insert some text to a file's specific position */
export const insertToFilePosition = async (fileName: string, position: vscode.Position, insertText: string) => {
    const doc = await vscode.workspace.openTextDocument(fileName)
    const editor = await vscode.window.showTextDocument(doc, 1, false)
    await editor.edit((e) => {
        e.insert(position!, insertText)
    })
}

export const insertToCurFilePosition = async (position: vscode.Position, insertText: string) => {
    const doc = getCurDoc()
    const editor = await vscode.window.showTextDocument(doc!, 1, false)
    await editor.edit((e) => {
        e.insert(position!, insertText)
    })
}

/** get current active file's name */
export const getCurFileName = () => {
    const editor = vscode.window.activeTextEditor
    return editor!.document.fileName
}
export const getCurDoc = () => {
    return vscode.window.activeTextEditor?.document
}
export const getCurDocText = () => {
    return getCurDoc()!.getText()
}
/** get cursor position */
export const getCursorPosition = () => {
    return vscode.window.activeTextEditor?.selection.active!
}

/** get file's document object */
export const getFileDocument = async (fileName: string) => {
    const doc = await vscode.workspace.openTextDocument(fileName)
    return doc
}

/** get file's content text */
export const getFileText = async (fileName: string) => {
    const doc = await getFileDocument(fileName)
    return doc.getText()
}

/** move mouse to range, if provide selection, it will be selected */
export const moveMouseToRange = async (range: vscode.Range, selection?: vscode.Selection) => {
    const editor = vscode.window.activeTextEditor
    selection && (editor!.selection = selection)
    editor?.revealRange(range)
}
/** create file by path */
export const createFileByPath = async (path: string, content: string = '') => {
    await vscode.workspace.fs.writeFile(vscode.Uri.file(path), Buffer.from(content))
}

export const readFileContentFromRoot = (path: string) => {
    const fullPath = rootPath + '/' + path
    const content = String(fs.readFileSync(fullPath))
    return content
}
export const writeFileContentFromRoot = (path: string, data: any) => {
    const fullPath = rootPath + '/' + path
    const content = String(fs.writeFileSync(fullPath, data))
    return content
}

export const getSelectionText = () => {
    const doc = getCurDoc()
    const selection = vscode.window.activeTextEditor?.selection
    const text = doc?.getText(new vscode.Range(selection!.start, selection!.end))
    return text
}

export const openFile = async (filename: string) => {
    const doc = await vscode.workspace.openTextDocument(filename)
    await vscode.window.showTextDocument(doc)
}
