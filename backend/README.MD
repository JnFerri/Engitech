## Servidor Backend Engtech

## Configurando banco de dados de exemplo
Necessario instalar o banco de dados presente no caminho '../Banco de dados Mock' no my sql no computador local.
Banco de dados é somente um mock de dados para visualização da aplicação.

## Configuração de variaveis de ambientes: 
Para acessar a aplicação em modo desenvolvimento apenas para visualiza-la, pode-se utilizar as variaveis de exemplo no arquivo '.env.exemplo', apenas altere o arquivo para '.env'. 
Variaveis de ambiente 'TOKEN_SECRET_KEY' e 'TOKEN' podem se manter as mesmas, existe apenas um token gerado para utilização do backend em teste. Este mesmo token deve estar na variavel de ambiente do frontend.

Altere as varivaeis de ambiente para conexão com o banco de dados conforme configuração do seu computador local.

## Usuario para login na aplicação rodando com banco de dados de mock :
Email: teste@teste.com
Senha: teste123

### Iniciar aplicação em desenvolvimento : 
Para iniciar a aplicação em desenvolvimento é necessario estar o arquivo .env com as variaveis contendo as configurações do banco de dados de desenvolvimento.
Para iniciar a aplicação utilize `npm start`. Servidor backend esta configurado para rodar na porta 3021.

### Iniciar aplicação em produção :
Para iniciar a aplicação em produção é necessario configurar o arquivo .env.production com as variaveis contendo as configurações do banco de dados de produção.

# Documentação API
Documentação das rotas da API pode ser encontrado ao iniciar o servidor na rota '/api-docs' .