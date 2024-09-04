const token = process.env.REACT_APP_TOKEN_API


async function pegarTodasChapas(){
    try{
        const options = {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/chapas`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar chapas' , err)
        throw err
    }}

async function pegarChapaPorId(id){
    try{
        const options = {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/chapas/${id}`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar chapa pelo ID')
        throw err
    }
}

async function pegarChapaPorCodigo(codigo){
    try{
        const options = {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/chapas/codigo/${codigo}`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar chapa por codigo')
        throw err
    }
}

async function pegarChapaPorMaterial(id){
    try{
        const options = {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/chapas/material/${id}`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar chapa por material')
        throw err
    }
}

async function cadastrarChapa(codigo,nome,comprimento,altura,espessura,mat_id){
    try {
        const options = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            },
            body : JSON.stringify({
                cha_codigo: codigo,
                cha_nome: nome,
                cha_comprimento: comprimento,
                cha_altura: altura,
                cha_espessura: espessura,
                mat_id: mat_id
            })
        }
        const result  = await fetch(`${process.env.REACT_APP_URL_BACKEND}/chapas/create`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao cadastrar chapa')
        throw err
    }
}

async function deletarChapaPorId(id){
    try{
        const options = {
            method: 'DELETE',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/chapas/delete/${id}`,options) 
        if(result.status === 204){
            return {data: {message: 'Chapa deletada com sucesso'} , status:result.status}
        }else {
            const data = await result.json()
            return {data:data , status:result.status}
        }
    }catch(err){
        console.error('Erro ao deletar chapa')
        throw err
    }
}

async function pegarChapasParaCalculo(mat_id,cha_espessura){
    try{
        const options = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            },
            body : JSON.stringify({
                mat_id: mat_id,
                cha_espessura: cha_espessura
            })
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/chapas/calculo`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar chapas para calculo')
        throw err
    }
}

async function AtualizarChapa(cha_codigo, cha_nome, cha_comprimento, cha_altura, cha_espessura, mat_id, cha_id){
    try{    
        const options = {
            method: 'PATCH',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            },
            body : JSON.stringify({
                cha_codigo: cha_codigo,
                cha_nome: cha_nome,
                cha_comprimento: cha_comprimento,
                cha_altura: cha_altura,
                cha_espessura: cha_espessura,
                mat_id: mat_id,
                cha_id: cha_id
            })
        }
    
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/chapas/update`, options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao atualizar chapa')
        throw err
    }
}

    export {pegarTodasChapas , pegarChapaPorId , pegarChapaPorCodigo , pegarChapaPorMaterial, cadastrarChapa , deletarChapaPorId, pegarChapasParaCalculo , AtualizarChapa}