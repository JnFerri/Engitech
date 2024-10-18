import express from 'express'
import rotaUsuarios from './Usuarios/Usuarios.js'
import rotaChapas from './Chapas/Chapas.js'
import rotaMateriais from './Materiais/Materiais.js'
import { swaggerDocs, swaggerUi } from '../Configs/Swagger.js'


const app = express()

app.use('/usuarios', rotaUsuarios)

app.use('/chapas', rotaChapas)

app.use('/materiais', rotaMateriais)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


export default app