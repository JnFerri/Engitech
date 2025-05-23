import jwt from 'jsonwebtoken';
import '../Configs/dotenvConfig.js'

// Defina a chave secreta (isso deve ser mantido em segredo)
const secretKey = process.env.TOKEN_SECRET_KEY 

// Gere o token
const token = jwt.sign({ app: 'EngiTech' }, secretKey);

console.log(`Token gerado: ${token}`);