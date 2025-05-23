# Engtech

Aplicação tem como intuito auxiliar o setor de engenharia, utilizando algoritimo para calcular o melhor aproveitamento de corte de peças de metais em chapas metalicas. Também possui modulo para auxiliar no calculo de peso de chapas metalicas.


# Instruções: 

## configuração de variaveis de ambiente:
Para utilizar a aplicação é necessario configurar as variaveis de ambiente 'REACT_APP_TOKEN_API' conforme Token da API backend e 'REACT_APP_URL_BACKEND' com a url do caminho para o servidor backend.

Para visualização da aplicação já existe o arquivo .env.exemplo , apenas altere seu nome para .env e tenha configurado as variaveis de ambiente do backend conforme instruções do arquivo Readme.md do servidor backend.

## Usuario para login na aplicação rodando com banco de dados de mock :
Email: teste@teste.com
Senha: teste123

## Iniciar Servidor front-end em desenvolvimento e para visualização : 
`npm start` 
Iniciara a aplicação em modo de desenvolvimento. Com variaveis de ambiente conforme arquivo '.env'

## Fazer Build para produção:
`npm run build`
Faz o Build da aplicação. Ira buildar a aplicação utilizando variaveis de ambiente conforme arquivo '.env.production'

## Iniciar aplicação em produção : 
`serve -s build -l 3022`
Inicia a aplicação em produção na porta 3022.

## Documentação dos componentes do front-end : 
Necessario iniciar o servidor backend para utilizar o storybook que documenta os componentes do front-end.

Para iniciar o storybook com a documentação dos componentes utilize `npm run storybook`.


