//@ts-check
import js from "@eslint/js"
import tselint from "typescript-eslint"

export default tselint.config(
    {
        ignores:["dist"]
    },
    {
        extends:[
            js.configs.recommended,
            ...tselint.configs.strictTypeChecked,
            ...tselint.configs.stylisticTypeChecked,
        ],
        files: [
            "src/**/*.ts"
        ]
    },
    {
        languageOptions: {
            parserOptions:{
                tsconfigRootDir:import.meta.dirname,
                projectService:true
            }
        }
    }
)