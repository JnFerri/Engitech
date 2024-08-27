import express from 'express'
import rotaUsuarios from './Usuarios/Usuarios.js'

const app = express()

app.use('/usuarios', rotaUsuarios)

export default app