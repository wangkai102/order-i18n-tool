import * as fsPromises from 'fs/promises'

export const fileIsExist = async (filePath: string) => {
    try {
        await fsPromises.stat(filePath)
        return true
    } catch (error) {
        return false
    }
}
