import { Router } from "express";
import { todasChapas,chapaPorId,chapaPorCodigo,chapaPorMaterial,cadastrarChapa,deletarChapaPorId } from "../../Controllers/Chapas.js";

const router = Router()

router.get('/', (req,res) => todasChapas(req,res))

router.get('/:id', (req,res) => {chapaPorId(req,res)})

router.get('/codigo/:codigo', (req,res) => {chapaPorCodigo(req,res)})

router.get('/material/:mat_id', (req,res) => {chapaPorMaterial(req,res)})

router.post('/create', (req,res) => {cadastrarChapa(req,res)})

router.delete('/delete/:id', (req,res) => {deletarChapaPorId(req,res)})

export default router