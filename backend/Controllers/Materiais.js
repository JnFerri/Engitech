import DBConnection from "../Configs/DBconfig.js"
import verificaToken from "../Helpers/verificaToken.js"


async function todosMateriais(req,res) {
    try{
        if(await verificaToken(req)){
            const [rows] = await DBConnection.promise().query("SELECT * FROM materiais")
            if(rows.length > 0 ){
                res.status(200).json(rows)
            }else{
                res.status(404).json({message:'Nenhum usuario encontrado.'})
            }
        }else {
            res.status(401).json({ message: 'Token inválido.' })
        }
    }catch(err){
        res.status(500).json({message:`erro interno do servidor ${err}`})
    }
}

export default todosMateriais