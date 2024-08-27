import bcrypt from 'bcrypt'

async function hashPassword(password){
    try{
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    }catch(err){
        console.log('Erro ao fazer hash da senha.', err)
    }
}

export default hashPassword