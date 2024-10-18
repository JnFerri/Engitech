import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import schemas from '../Schemas/schemas.js';
const swaggerOptions = {
    definition: {
      openapi: '3.0.0', // Versão do OpenAPI
      info: {
        title: 'API Engtech', // Título da documentação
        version: '1.0.0',        // Versão da API
        description: 'API utilizada pela aplicação engtech.',
      },
      components: {
        schemas, // Referencia o arquivo schemas.js
        securitySchemes: {
            BearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT', // Se você estiver usando JWT
            },
          },
      },
      security: [
        {
            BearerAuth: [process.env.TOKEN], // Referencia o esquema de segurança definido
          }
      ],
    },
    apis: ['./Routes/**/*.js'], // Caminho para os arquivos onde estão as rotas e as anotações de Swagger
  };
  
  // Gera a especificação do Swagger
  const swaggerDocs = swaggerJsdoc(swaggerOptions);

  export {swaggerUi, swaggerDocs}