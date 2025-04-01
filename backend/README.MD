## Servidor Backend Engtech

### Iniciar aplicação em desenvolvimento : 
Para iniciar a aplicação em desenvolvimento é necessario estar o arquivo .env com as variaveis contendo as configurações do banco de dados de desenvolvimento.
Para iniciar a aplicação utilize `npm start`.

### Iniciar aplicação em produção :
Para iniciar a aplicação em produção é necessario configurar o arquivo .env.production com as variaveis contendo as configurações do banco de dados de produção.
Para iniciar a aplicação em produção utilize `nodemon server.js` na pasta raiz do backend com banco de dados de produção.
Em produção atualmente utiliza-se serviço no servidor srv-services para rodar a aplicação, intruções de como utilizar estão na pasta de projetos no servidor.

# Documentação API

Documentação das rotas da API pode ser encontrado ao iniciar o servidor na rota '/api-docs' .