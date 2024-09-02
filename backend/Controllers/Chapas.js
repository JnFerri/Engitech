
import DBConnection from "../Configs/DBconfig.js";
import verificaToken from "../Helpers/verificaToken.js";



async function todasChapas(req,res) {
    try{
        if(await verificaToken(req)){
            const [rows] = await DBConnection.promise().query('select * from chapas join materiais m on chapas.mat_id = m.mat_id')
            res.status(200).json(rows)
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        res.status(500).json(`erro interno do servidor :  ${err}`)
    }
}

async function chapaPorId(req,res){
    try{
        if(await verificaToken(req)){
            const [rows] = await DBConnection.promise().query(`select * from chapas join materiais m on chapas.mat_id = m.mat_id where cha_id = ${req.params.id}`)
            res.status(200).json(rows)
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        res.status(500).json(`erro interno do servidor :  ${err}`)
    }
}

async function chapaPorCodigo(req,res){
    try{
        if(await verificaToken(req)){
            const [rows] = await DBConnection.promise().query(`select * from chapas where cha_codigo = ${req.params.codigo}`)
            res.status(200).json(rows)
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        res.status(500).json(`erro interno do servidor :  ${err}`)
    }
}

async function chapaPorMaterial(req,res){
try{
    if(await verificaToken(req)){
        const [rows] = await DBConnection.promise().query(`select * from chapas where mat_id = ${req.params.mat_id}`)
        res.status(200).json(rows)
    }else {
        res.status(401).json({ message: 'Token inválido.' })
    }
}catch(err){
    res.status(500).json(`erro interno do servidor :  ${err}`)
}
}

async function cadastrarChapa(req,res){
    try{
        if(await verificaToken(req)){
            const sql = 'insert into chapas (cha_codigo, cha_nome, cha_comprimento, cha_altura, cha_espessura, mat_id) values (?,?,?,?,?,?) '
            const filtro = [req.body.cha_codigo, req.body.cha_nome, req.body.cha_comprimento, req.body.cha_altura, req.body.cha_espessura, req.body.mat_id] 
            await DBConnection.promise().query(sql, filtro)
            res.status(201).json({ message: 'Chapa cadastrada com sucesso.' })
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        if(err.code === 'ER_DUP_ENTRY'){
            res.status(409).json({ message: 'Chapa já cadastrada.' })
        }else if (err.code === 'ER_BAD_FIELD_ERROR') {
            res.status(400).json({ message: 'Campo inválido na consulta.' })
        } else {
            res.status(500).json({ error: `Erro interno do servidor. ${err}` })
        }
    }
}

async function deletarChapaPorId(req,res){
    try{
        if(await verificaToken(req)){
            const sql = `delete from chapas where cha_id = ?`
            await DBConnection.promise().query(sql, [req.params.id])
            res.status(204).json({ message: 'Chapa deletada com sucesso.' })
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }
}catch(err){
    res.status(500).json({ error: `Erro interno do servidor ao deletar chapa. ${err}` })
}
}

async function pegaChapasParaCalculo(req,res){
    try{
        if(await verificaToken(req)){
            const sql = 'select * from chapas join materiais m on chapas.mat_id = m.mat_id where mat_id = ? and cha_espessura = ?'
            const [rows] = await DBConnection.promise.query(sql, [req.params.mat_id, req.params.cha_espessura])
            res.status(200).json(rows)
        }else{
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        res.status(500).json({ error: `Erro interno do servidor ao pegar chapas para calculo. ${err}` })
    }
}

export {todasChapas , chapaPorId , chapaPorCodigo , chapaPorMaterial , cadastrarChapa , deletarChapaPorId , pegaChapasParaCalculo}
    