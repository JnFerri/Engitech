import { Router } from "express";
import {todosUsuarios,usuarioPorId,criarUsuario,deletarUsuarioPorId,alterarSenhaUsuario,loginUsuario, pegarTodosUsuariosPorEmailPesquisa,InativarUsuario ,pegarTiposUsuarios} from "../../Controllers/Usuarios.js";


const router = Router()

router.get('/', (req,res) => {todosUsuarios(req,res)})

router.get('/:id', (req,res) => {usuarioPorId(req,res)})

router.post('/create', (req,res) => {criarUsuario(req,res)})

router.delete('/delete/:id', (req,res) => {deletarUsuarioPorId(req,res)})

router.patch('/update/senha', (req,res) => {alterarSenhaUsuario(req,res)})

router.post('/login', (req,res) => {loginUsuario(req,res)})

router.get('/get/tiposUsuarios', (req,res) => {pegarTiposUsuarios(req,res)})

router.get('/email/:email', (req,res) => {pegarTodosUsuariosPorEmailPesquisa(req,res)})

router.patch('/inativar/:id', (req,res) => {InativarUsuario(req,res)})



export default router