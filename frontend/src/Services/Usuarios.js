const token = process.env.REACT_APP_TOKEN_API

async function PegaTodosOsUsuarios(){
    try{
        const options = {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar usuarios' , err)
        throw err
    }
    }

async function PegaUsuarioPorId(id){
    try{
        const options = {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/${id}`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar usuario por id' , err)
        throw err
    }
}

async function criarUsuario(nome,email,senha, tpu_id){
    try{
        const options = {
            method:'POST',
            headers: 
                {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
            body : JSON.stringify({
                usu_nome: nome,
                usu_email: email,
                usu_senha: senha,
                tpu_id : tpu_id
            })
    }
    const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/create`,options)
    const data = await result.json()
    return {data:data , status:result.status}

}catch(err){
    console.error('Erro ao criar usuario' , err)
    throw err
}
}

async function deletarUsuarioPorId(id){
    try{
        const options = {
            method:'DELETE',
            headers: 
                {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                }
            }
            const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/delete/${id}`,options)
            const data = await result.json()
            return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao deletar usuario' , err)
        throw err
    }
}

async function alterarSenhaUsuario(id,senha){
    try{
        const options = {
            method : 'PATCH',
            headers: 
                {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
            body : JSON.stringify({
                usu_id: id,
                usu_senha: senha
            })
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/update/senha`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao alterar senha' , err)
        throw err
    }
}

async function loginUsuario(email,senha){
    try{
        const options = {
            method : 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            },
            body : JSON.stringify({
                usu_email: email,
                usu_senha: senha
            })
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/login`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao login' , err)
        throw err
    }
}

async function pegarTiposUsuarios(){
    try{
        const options = {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/get/tiposUsuarios`, options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar tipos de usuarios' , err)
        throw err
    }
}

async function pegarTodosUsuariosPorEmailPesquisa(email){
    try{
        const options = {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
    }
    const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/email/${email}`,options)
    const data = await result.json()
    return {data:data , status:result.status}
}catch(err){
    console.error('Erro ao pegar usuarios por email' , err)
    throw err
}
}

async function inativarUsuario(id){
    try{
        const options = {
            method: 'PATCH',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/inativar/${id}`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao inativar usuario' , err)
        throw err
    }
}

async function ativarUsuario(id){
    try{
        const options = {
            method: 'PATCH',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/usuarios/ativar/${id}`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao inativar usuario' , err)
        throw err
    }

}


    
export  { PegaTodosOsUsuarios , PegaUsuarioPorId, criarUsuario, deletarUsuarioPorId ,alterarSenhaUsuario , loginUsuario, pegarTiposUsuarios , pegarTodosUsuariosPorEmailPesquisa , inativarUsuario , ativarUsuario}