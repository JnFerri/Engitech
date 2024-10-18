import { Router } from "express";
import {todosMateriais , materialPorId} from '../../Controllers/Materiais.js'

const router = Router()

/**
 * @swagger
 * /materiais:
 *   get:
 *     summary: Retorna todos os materiais
 *     tags: [Materiais]
 *     responses:
 *       200:
 *         description: Lista de materiais
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Materiais'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', (req,res) => todosMateriais(req,res))

/**
 * @swagger
 * /materiais/{id}:
 *   get:
 *     summary: Retorna material por id.
 *     tags: [Materiais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id do material (mat_id).
 *     responses:
 *       200:
 *         description: Array contendo o objeto com informações do material.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Material'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', (req,res) => materialPorId(req,res))



export default router