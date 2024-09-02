import express from 'express'
import rotaUsuarios from './Usuarios/Usuarios.js'
import rotaChapas from './Chapas/Chapas.js'
import rotaMateriais from './Materiais/Materiais.js'

const app = express()

app.use('/usuarios', rotaUsuarios)

app.use('/chapas', rotaChapas)

app.use('/materiais', rotaMateriais)


export default app