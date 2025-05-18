import { createPrivateKey, createPublicKey, generateKeyPairSync } from "crypto";
import { existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

export const checkKeys = () => {
    const path = join(import.meta.dirname,'..','..','static','auth')
    if(existsSync(join(path,"private.pem")))
    {
        if(!existsSync(join(path,"public.pem")))
        {
            writeFileSync(
                join(path,"public.pem"),
                createPublicKey(
                    createPrivateKey(readFileSync(join(path,"private.pem")))
                ).export(
                    {
                        type:"spki",
                        format:"pem"
                    }
                )
            )
        }
    }
    else {
        const keys = generateKeyPairSync("ed25519");
        writeFileSync(
            join(path,"private.pem"),
            keys.privateKey.export(
                {
                    type: "pkcs8",
                    format:"pem"
                }
            )
        )
        writeFileSync(
            join(path,"public.pem"),
            keys.publicKey.export(
                {
                    type: "spki",
                    format:"pem"
                }
            )
        )
    }
}