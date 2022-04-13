import express from "express";
import * as dotenv from "dotenv";
const app = express()

dotenv.config()

const port = process.env.PORT || 3000
    app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

import teste from "./controllers/teste-controller.js"
teste(app);