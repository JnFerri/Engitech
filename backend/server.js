import './Configs/dotenvConfig.js'
import express from 'express'
import cors from 'cors'
import app from './Routes/app.js'
const server = express()
const PORT = 3021

server.use(cors())
server.use(express.json())

server.use(app)

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
