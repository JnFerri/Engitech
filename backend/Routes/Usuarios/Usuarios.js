import { Router } from "express";
import {todosUsuarios,usuarioPorId,criarUsuario,deletarUsuarioPorId,alterarSenhaUsuario,loginUsuario, pegarTodosUsuariosPorEmailPesquisa,inativarUsuario ,pegarTiposUsuarios , ativarUsuario} from "../../Controllers/Usuarios.js";


const router = Router()

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Retorna todos os usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista dos usuarios com seus dados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/todosUsuarios'
 *       401:
 *         description: Token inválido
 *       404:
 *         description: Nenhum usuario encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', (req,res) => {todosUsuarios(req,res)})

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Retorna informações do usuario conforme id do usuario no banco de dados.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuario
 *     responses:
 *       200:
 *         description: Array com objeto contendo informações do usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Usuario'
 *       401:
 *         description: Token inválido
 *       404:
 *         description: Nenhum usuario encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', (req,res) => {usuarioPorId(req,res)})

/**
 * @swagger
 * /usuarios/create:
 *   post:
 *     summary: Cadastra um novo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usu_nome:
 *                 type: string
 *                 description: Nome do usuario
 *                 example: 'Fulano de Tal'
 *               usu_email:
 *                 type: string
 *                 description: Email do usuario
 *                 example: 'fulano@avioeste.com.br'
 *               usu_senha:
 *                 type: string
 *                 description: Senha do usuario
 *                 example: '123456'
 *               tpu_id:
 *                 type: integer
 *                 description: ID do tipo de usuario
 *                 example: 1
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description : Campo inválido na consulta
 *       401:
 *         description: Token inválido
 *       409:
 *         description: Nome ou email ja existem
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/create', (req,res) => {criarUsuario(req,res)})

/**
 * @swagger
 * /usuarios/delete/{id}:
 *   delete:
 *     summary: Deleta um usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuario
 *     responses:
 *       204:
 *         description: Usuário deletado com sucesso
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/delete/:id', (req,res) => {deletarUsuarioPorId(req,res)})

/**
 * @swagger
 * /usuarios/update/senha:
 *   patch:
 *     summary: Altera a senha de um usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usu_id:
 *                 type: integer
 *                 description: ID do usuario
 *                 example: 1
 *               usu_senha:
 *                 type: string
 *                 description: Nova senha do usuario
 *                 example: '123456'
 *     responses:
 *       200:
 *         description: Senha alterada com sucesso
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.patch('/update/senha', (req,res) => {alterarSenhaUsuario(req,res)})

/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Efetua login do usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usu_email:
 *                 type: string
 *                 description: Email do usuario
 *                 example: 'fulano@avioeste.com.br'
 *               usu_senha:
 *                 type: string
 *                 description: Senha do usuario
 *                 example: '123456'
 *     responses:
 *       200:
 *         description: Login efetuado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Usuario'
 *                 tokenAuth:
 *                   type: string
 *                   description: Token de autenticação
 *       401:
 *         description: Senha incorreta
 *       404:
 *         description: Email não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/login', (req,res) => {loginUsuario(req,res)})

/**
 * @swagger
 * /usuarios/get/tiposUsuarios:
 *   get:
 *     summary: Retorna todos os tipos de usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de tipos de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/tiposUsuario'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/get/tiposUsuarios', (req,res) => {pegarTiposUsuarios(req,res)})

/**
 * @swagger
 * /usuarios/email/{email}:
 *   get:
 *     summary: Retorna usuario com email igual ao informado.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: Email do usuario
 *     responses:
 *       200:
 *         description: Lista com objeto contendo os dados do usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/usuarioSemTipoNome'
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/email/:email', (req,res) => {pegarTodosUsuariosPorEmailPesquisa(req,res)})

/**
 * @swagger
 * /usuarios/inativar/{id}:
 *   patch:
 *     summary: Inativa um usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuario
 *     responses:
 *       200:
 *         description: Usuário inativado com sucesso
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.patch('/inativar/:id', (req,res) => {inativarUsuario(req,res)})

/**
 * @swagger
 * /usuarios/ativar/{id}:
 *   patch:
 *     summary: Ativa um usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuario
 *     responses:
 *       200:
 *         description: Usuário ativado com sucesso
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.patch('/ativar/:id', (req,res) => {ativarUsuario(req,res)})



export default router