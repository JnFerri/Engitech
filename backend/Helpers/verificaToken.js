import jwt from 'jsonwebtoken';
import '../Configs/dotenvConfig.js'


async function verificaToken(req){
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    const secretKey = process.env.TOKEN_SECRET_KEY;

    const verificacao = jwt.verify(token, secretKey, (err) => {
        if (err) {
            return false
        } else {
            return true
        }
    });

    return verificacao

}

export default verificaToken
