import fastify from "fastify";
import { checkKeys } from "./auth/checkKeys.js";
import { initializeFilesystem } from "./utilities/filesystem.js";

initializeFilesystem()
checkKeys()

const app = fastify({
    logger:true
})

await app.listen({
    port:3000
})