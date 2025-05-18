import { mkdirSync } from "fs"
import { join } from "path"

const directories = [
    "static/auth"
]

export const initializeFilesystem = () => {
    for(const dir of directories)
    {
        mkdirSync(
            join(import.meta.dirname,'..','..',dir),
            {
                recursive:true
            }
        )
    }
}