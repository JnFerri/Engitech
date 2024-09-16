import { Router } from "express";
import {todosMateriais , materialPorId} from '../../Controllers/Materiais.js'

const router = Router()

router.get('/', (req,res) => todosMateriais(req,res))

router.get('/:id', (req,res) => materialPorId(req,res))



export default router