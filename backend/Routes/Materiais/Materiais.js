import { Router } from "express";
import todosMateriais from "../../Controllers/Materiais.js";

const router = Router()

router.get('/', (req,res) => todosMateriais(req,res))




export default router