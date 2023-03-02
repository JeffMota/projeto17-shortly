import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRouter from "./routes/Auth.routes.js"
import urlRouter from "./routes/Urls.routes.js"
import usersRouter from "./routes/Users.routes.js"
dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())

server.use([authRouter, urlRouter, usersRouter])

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
