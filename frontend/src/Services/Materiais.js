const token = process.env.REACT_APP_TOKEN_API
async function pegarTodosMateriais(){
    try{
        const options = {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`
            }
        }
        const result = await fetch(`${process.env.REACT_APP_URL_BACKEND}/materiais`,options)
        const data = await result.json()
        return {data:data , status:result.status}
    }catch(err){
        console.error('Erro ao pegar chapas' , err)
        throw err
    }}

    export {pegarTodosMateriais}