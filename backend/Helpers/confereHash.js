import bcrypt from 'bcrypt'

async function confereHash(hashPassword, password){
    const comparative = await bcrypt.compare(password, hashPassword)
    return comparative
}

export default confereHash