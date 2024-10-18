import { Router } from "express";
import { todasChapas,chapaPorId,chapaPorCodigo,chapaPorMaterial,cadastrarChapa,deletarChapaPorId, pegaChapasParaCalculo , AtualizarChapa, PegarEspessurasChapasPorMaterial } from "../../Controllers/Chapas.js";

const router = Router()
/**
 * @swagger
 * /chapas:
 *   get:
 *     summary: Retorna todas as chapas
 *     tags: [Chapas]
 *     responses:
 *       200:
 *         description: Lista de chapas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/todasChapa'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', (req,res) => todasChapas(req,res))

/**
 * @swagger
 * /chapas/{id}:
 *   get:
 *     summary: Retorna informações da chapa conforme id da chapa no banco de dados.
 *     tags: [Chapas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da chapa
 *     responses:
 *       200:
 *         description: Array com objeto contendo informações da chapa.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Chapa'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', (req,res) => {chapaPorId(req,res)})

/**
 * @swagger
 * /chapas/codigo/{codigo}:
 *   get:
 *     summary: Retorna informações da chapa conforme código do h2j cadastrado para a chapa no banco de dados.
 *     tags: [Chapas]
 *     parameters:
 *       - in: path
 *         name: codigo
 *         schema:
 *           type: integer
 *         required: true
 *         description: Código da chapa, (cha_codigo).
 *     responses:
 *       200:
 *         description: Array com objeto contendo informações da chapa.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Chapa'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/codigo/:codigo', (req,res) => {chapaPorCodigo(req,res)})

/**
 * @swagger
 * /chapas/material/{mat_id}:
 *   get:
 *     summary: Retorna chapas conforme id do material.
 *     tags: [Chapas]
 *     parameters:
 *       - in: path
 *         name: mat_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id do material
 *     responses:
 *       200:
 *         description: Array com chapas conforme id do material enviado.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/todasChapa'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/material/:mat_id', (req,res) => {chapaPorMaterial(req,res)})

/**
 * @swagger
 * /chapas/calculo:
 *   post:
 *     summary: Retorna chapas conforme id do material e espessura.
 *     tags: [Chapas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mat_id:
 *                 type: integer
 *                 description: ID do material
 *                 example: 1
 *               cha_espessura:
 *                 type: string
 *                 description: Espessura da chapa
 *                 example: '0.80'
 *     responses:
 *       200:
 *         description: Array com chapas conforme id do material e espessura.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/chapasCalculo'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/calculo', (req,res) => {pegaChapasParaCalculo(req,res)})

/**
 * @swagger
 * /chapas/create:
 *   post:
 *     summary: Cadastra uma nova chapa
 *     tags: [Chapas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cha_codigo:
 *                 type: integer
 *                 description: Código da chapa
 *                 example: 35594
 *               cha_nome:
 *                 type: string
 *                 description: Nome completo da chapa
 *                 example: 'CHAPA INOX 304 0,8 X 1040 X 1630MM DIN 1.4301'
 *               cha_comprimento:
 *                 type: number
 *                 description: Comprimento da chapa em milímetros
 *                 example: 1630
 *               cha_altura:
 *                 type: number
 *                 description: Altura da chapa em milímetros
 *                 example: 1040
 *               cha_espessura:
 *                 type: string
 *                 description: Espessura da chapa em milímetros
 *                 example: '0.80'
 *               mat_id:
 *                 type: integer
 *                 description: ID do material associado à chapa
 *                 example: 1
 *     responses:
 *       201:
 *         description: Chapa cadastrada com sucesso
 *       400:
 *         description : Campo inválido na consulta
 *       401:
 *         description: Token inválido
 *       409:
 *         description: Chapa já cadastrada
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/create', (req,res) => {cadastrarChapa(req,res)})

/**
 * @swagger
 * /chapas/delete/{id}:
 *   delete:
 *     summary: Deleta uma chapa
 *     tags: [Chapas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da chapa
 *     responses:
 *       204:
 *         description: Chapa deletada com sucesso
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/delete/:id', (req,res) => {deletarChapaPorId(req,res)})

/**
 * @swagger
 * /chapas/update:
 *   patch:
 *     summary: Atualiza uma chapa
 *     tags: [Chapas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cha_id:
 *                 type: integer
 *                 description: ID da chapa
 *                 example: 20
 *               cha_codigo:
 *                 type: integer
 *                 description: Código da chapa
 *                 example: 35594
 *               cha_nome:
 *                 type: string
 *                 description: Nome completo da chapa
 *                 example: 'CHAPA INOX 304 0,8 X 1040 X 1630MM DIN 1.4301'
 *               cha_comprimento:
 *                 type: number
 *                 description: Comprimento da chapa em milímetros
 *                 example: 1630
 *               cha_altura:
 *                 type: number
 *                 description: Altura da chapa em milímetros
 *                 example: 1040
 *               cha_espessura:
 *                 type: string
 *                 description: Espessura da chapa em milímetros
 *                 example: '0.80'
 *               mat_id:
 *                 type: integer
 *                 description: ID do material associado à chapa
 *                 example: 1
 *     responses:
 *       200:
 *         description: Chapa atualizada com sucesso
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.patch('/update', (req,res) => {AtualizarChapa(req,res)})

/**
 * @swagger
 * /chapas/espessuras/{mat_id}:
 *   get:
 *     summary: Retorna as espessuras das chapas conforme id do material.
 *     tags: [Chapas]
 *     parameters:
 *       - in: path
 *         name: mat_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do material
 *     responses:
 *       200:
 *         description: Array com as espessuras das chapas conforme id do material.
 *         content:
 *           application/json:
 *              schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/espessurasPorMaterial'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/espessuras/:mat_id', (req,res) => {PegarEspessurasChapasPorMaterial(req,res)})



export default router