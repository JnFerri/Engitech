import express from 'express'
import rotaUsuarios from './Usuarios/Usuarios.js'
import rotaChapas from './Chapas/Chapas.js'


const app = express()

app.use('/usuarios', rotaUsuarios)

app.use('/chapas', rotaChapas)

export default app