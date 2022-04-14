import express from "express";
import * as dotenv from "dotenv";
import Tarefas from "./src/controllers/Tarefas.js"

const app = express()

dotenv.config()

const port = process.env.PORT || 3000

    app.listen(port, () => {
    console.log(`Sucesso na Conexão ao Servidor em http://localhost:${port}`)
})

Tarefas.routers(app)