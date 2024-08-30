import DBConnection from "../Configs/DBconfig.js";
import confereHash from "../Helpers/ConfereHash.js";
import hashPassword from "../Helpers/hashPassword.js";
import verificaToken from "../Helpers/verificaToken.js";


async function todosUsuarios(req,res) {
    try{
        if(await verificaToken(req)){
            const [rows] = await DBConnection.promise().query("SELECT * FROM usuarios")
            if(rows.length > 0 ){
                res.status(200).json(rows)
            }else{
                res.status(404).json({message:'Nenhum usuario encontrado.'})
            }
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        res.status(500).json(`erro interno do servidor ${err}`)
    }
}

async function usuarioPorId(req,res) {
    try{
    if(await verificaToken(req)){
        const [rows] = await DBConnection.promise().query(`SELECT * FROM usuarios Where usu_id = ${req.params.id}`)
        if(rows.length > 0 ){
            res.status(200).json(rows)
        }else{
            res.status(404).json({message:'Nenhum usuario encontrado.'})
        }
    }else {
        res.status(401).json({ message: 'Token inválido.'  })
    }
    }catch(err){
        res.status(500).json(`erro interno do servidor ${err}`)
}
}

async function criarUsuario(req,res){
    try{
        if(await verificaToken(req)){
            const sql = 'insert into usuarios (usu_nome , usu_email , usu_senha) values (?,?,?)'
            const senhaHash = await hashPassword(req.body.usu_senha)
            const filtro = [req.body.usu_nome, req.body.usu_email, senhaHash]
            await DBConnection.promise().query(sql,filtro)
            res.status(201).json({ message: 'Usuário criado com sucesso.' })
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }

    }catch(err){
        if(err.code === 'ER_DUP_ENTRY'){
            res.status(409).json({ message: 'Nome ou email ja existem.' })
        }else if (err.code === 'ER_BAD_FIELD_ERROR') {
            res.status(400).json({ message: 'Campo inválido na consulta.'})
        } else {
            res.status(500).json({ error: `Erro interno do servidor. ${err}` })
        }
    }
    
}

async function deletarUsuarioPorId(req,res){
    try{
        if(await verificaToken(req)){

            const sql = `delete from usuarios where usu_id = ?`
            await DBConnection.promise().query(sql, [req.params.id])
            res.status(204).json({ message: 'Usuário deletado com sucesso.'})
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        res.status(500).json({ error: `Erro interno do servidor ao deletar usuario. ${err}` })
    }
}

async function alterarSenhaUsuario(req,res){
    try{
        if(await verificaToken(req)){
            const sql = `update usuarios set usu_senha = ? where usu_id = ?`
            const senhaHash = await hashPassword(req.body.usu_senha)
            await DBConnection.promise().query(sql, [senhaHash, req.body.usu_id])
            res.status(200).json({ message: 'Senha alterada com sucesso.'  })
        }else{
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        res.status(500).json({ error: `Erro interno do servidor ao alterar senha. ${err}` })
    }
}

async function loginUsuario(req,res){
    try{
        const sql = `select * from usuarios where usu_email = ?`
        const [rows] = await DBConnection.promise().query(sql, [req.body.usu_email])
        if(rows.length > 0){
            if(await confereHash(rows[0].usu_senha , req.body.usu_senha) === true){
                return res.status(200).json({ data: rows[0] , tokenAuth : process.env.TOKEN})
            }else{
                res.status(401).json({ message: 'Senha incorreta.' })
            }
        }else{
            res.status(404).json({ message: 'Email não encontrado.'})
        }
}
    catch(err){
        res.status(500).json({ error: `Erro interno do servidor ao login. ${err}` })
    }
}

export {todosUsuarios, usuarioPorId, criarUsuario , deletarUsuarioPorId, alterarSenhaUsuario, loginUsuario}
