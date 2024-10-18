// swagger/schemas.js
const schemas = {
 todasChapa : {
    type: 'object',
    properties: {
      cha_id: {
        type: 'integer',
        description: 'ID da chapa',
        example: 20,
      },
      cha_codigo: {
        type: 'integer',
        description: 'Código da chapa',
        example: 35594,
      },
      cha_nome: {
        type: 'string',
        description: 'Nome completo da chapa',
        example: 'CHAPA INOX 304 0,8 X 1040 X 1630MM DIN 1.4301',
      },
      cha_comprimento: {
        type: 'number',
        description: 'Comprimento da chapa em milímetros',
        example: 1630,
      },
      cha_altura: {
        type: 'number',
        description: 'Altura da chapa em milímetros',
        example: 1040,
      },
      cha_espessura: {
        type: 'string',
        description: 'Espessura da chapa em milímetros',
        example: '0.80',
      },
      mat_id: {
        type: 'integer',
        description: 'ID do material associado à chapa',
        example: 1,
      },
      cha_data_hora_criacao: {
        type: 'string',
        format: 'date-time',
        description: 'Data e hora da criação da chapa',
        example: '2024-09-04T16:13:41.000Z',
      },
      cha_data_hora_atualizacao: {
        type: 'string',
        format: 'date-time',
        description: 'Data e hora da última atualização da chapa',
        example: '2024-09-04T16:13:41.000Z',
      },
      mat_nome: {
        type: 'string',
        description: 'Nome do material da chapa',
        example: 'Inox304',
      },
      mat_fator_densidade: {
        type: 'string',
        description: 'Fator de densidade do material da chapa',
        example: '0.008000',
      },
    },
    example:[ {
        cha_id: 56,
        cha_codigo: 39463,
        cha_nome: 'CHAPA ZINCADA 1,25 X 1200 X 2500MM NBR-7008 ZC 275 NL',
        cha_comprimento: 2500,
        cha_altura: 1200,
        cha_espessura: '1.25',
        mat_id: 2,
        cha_data_hora_criacao: '2024-09-04T16:32:02.000Z',
        cha_data_hora_atualizacao: '2024-09-04T16:32:02.000Z',
        mat_nome: 'Galvanizado',
        mat_fator_densidade: '0.007870',
      },
      {
        cha_id : 57,
        cha_codigo: 39462,
        cha_nome: "CHAPA ZINCADA 1,25 X 1200 X 2860MM NBR-7008 ZC 275 NL",
        cha_comprimento: 2860,
        cha_altura: 1200,
        cha_espessura: "1.25",
        mat_id: 2,
        cha_data_hora_criacao: "2024-09-04T16:32:17.000Z",
        cha_data_hora_atualizacao: "2024-09-04T16:32:17.000Z",
        mat_nome: "Galvanizado",
        mat_fator_densidade: "0.007870"
    }
    ]
  }
  ,
  Chapa: {
        type: 'object',
        properties: {
          cha_id: {
            type: 'integer',
            description: 'ID da chapa',
            example: 20,
          },
          cha_codigo: {
            type: 'integer',
            description: 'Código da chapa',
            example: 35594,
          },
          cha_nome: {
            type: 'string',
            description: 'Nome completo da chapa',
            example: 'CHAPA INOX 304 0,8 X 1040 X 1630MM DIN 1.4301',
          },
          cha_comprimento: {
            type: 'number',
            description: 'Comprimento da chapa em milímetros',
            example: 1630,
          },
          cha_altura: {
            type: 'number',
            description: 'Altura da chapa em milímetros',
            example: 1040,
          },
          cha_espessura: {
            type: 'string',
            description: 'Espessura da chapa em milímetros',
            example: '0.80',
          },
          mat_id: {
            type: 'integer',
            description: 'ID do material associado à chapa',
            example: 1,
          },
          cha_data_hora_criacao: {
            type: 'string',
            format: 'date-time',
            description: 'Data e hora da criação da chapa',
            example: '2024-09-04T16:13:41.000Z',
          },
          cha_data_hora_atualizacao: {
            type: 'string',
            format: 'date-time',
            description: 'Data e hora da última atualização da chapa',
            example: '2024-09-04T16:13:41.000Z',
          },
          mat_nome: {
            type: 'string',
            description: 'Nome do material da chapa',
            example: 'Inox304',
          },
          mat_fator_densidade: {
            type: 'string',
            description: 'Fator de densidade do material da chapa',
            example: '0.008000',
          },
        }
    }
,
    chapasCalculo : {
        type: 'object',
        properties: {
          cha_id: {
            type: 'integer',
            description: 'ID da chapa',
            example: 20,
          },
          cha_codigo: {
            type: 'integer',
            description: 'Código da chapa',
            example: 35594,
          },
          cha_nome: {
            type: 'string',
            description: 'Nome completo da chapa',
            example: 'CHAPA INOX 304 0,8 X 1040 X 1630MM DIN 1.4301',
          },
          cha_comprimento: {
            type: 'number',
            description: 'Comprimento da chapa em milímetros',
            example: 1630,
          },
          cha_altura: {
            type: 'number',
            description: 'Altura da chapa em milímetros',
            example: 1040,
          },
          cha_espessura: {
            type: 'string',
            description: 'Espessura da chapa em milímetros',
            example: '0.80',
          },
          mat_id: {
            type: 'integer',
            description: 'ID do material associado à chapa',
            example: 1,
          },
          cha_data_hora_criacao: {
            type: 'string',
            format: 'date-time',
            description: 'Data e hora da criação da chapa',
            example: '2024-09-04T16:13:41.000Z',
          },
          cha_data_hora_atualizacao: {
            type: 'string',
            format: 'date-time',
            description: 'Data e hora da última atualização da chapa',
            example: '2024-09-04T16:13:41.000Z',
          },
          mat_nome: {
            type: 'string',
            description: 'Nome do material da chapa',
            example: 'Inox304',
          },
          mat_fator_densidade: {
            type: 'string',
            description: 'Fator de densidade do material da chapa',
            example: '0.008000',
          },
        },
        example:[ {
            cha_id: 20,
            cha_codigo: 35594,
            cha_nome: "CHAPA INOX 304 0,8 X 1040 X 1630MM DIN 1.4301",
            cha_comprimento: 1630,
            cha_altura: 1040,
            cha_espessura: "0.80",
            mat_id: 1,
            cha_data_hora_criacao: "2024-09-04T16:13:41.000Z",
            cha_data_hora_atualizacao: "2024-09-04T16:13:41.000Z",
            mat_nome: "Inox304",
            mat_fator_densidade: "0.008000"
        },
        {
            cha_id: 21,
            cha_codigo: 35595,
            cha_nome: "CHAPA INOX 304 0,8 X 1040 X 2390MM DIN 1.4301",
            cha_comprimento: 2390,
            cha_altura: 1040,
            cha_espessura: "0.80",
            mat_id: 1,
            cha_data_hora_criacao: "2024-09-04T16:14:48.000Z",
            cha_data_hora_atualizacao: "2024-09-04T16:14:48.000Z",
            mat_nome: "Inox304",
            mat_fator_densidade: "0.008000"
        },
        {
            cha_id: 22,
            cha_codigo: 35596,
            cha_nome: "CHAPA INOX 304 0,8 X 1040 X 2680MM DIN 1.4301",
            cha_comprimento: 2680,
            cha_altura: 1040,
            cha_espessura: "0.80",
            mat_id: 1,
            cha_data_hora_criacao: "2024-09-04T16:15:06.000Z",
            cha_data_hora_atualizacao: "2024-09-04T16:15:06.000Z",
            mat_nome: "Inox304",
            mat_fator_densidade: "0.008000"
        },
        {
            cha_id: 23,
            cha_codigo: 35597,
            cha_nome: "CHAPA INOX 304 0,8 X 1040 X 2900MM DIN 1.4301",
            cha_comprimento: 2900,
            cha_altura: 1040,
            cha_espessura: "0.80",
            mat_id: 1,
            cha_data_hora_criacao: "2024-09-04T16:15:29.000Z",
            cha_data_hora_atualizacao: "2024-09-04T16:15:29.000Z",
            mat_nome: "Inox304",
            mat_fator_densidade: "0.008000"
        }
        ]
      },

      espessurasPorMaterial : {
        type: 'Array',
        properties: {
          cha_espessura: {
            type: 'string',
            description: 'espessura da chapa',
          }
        },
        example: [
            {
                cha_espessura: "0.80"
              },
              {
                cha_espessura: "1.20"
              },
              {
                cha_espessura: "1.50"
              },
              {
                cha_espessura: "2.00"
              },
              {
                cha_espessura: "4.00"
              }
        ]
      },

      Materiais : {
        type: 'Array',
        properties: {
          mat_id : {
            type: 'integer',
            description: 'id da chapa',
          },
          mat_nome: {
            type: 'string',
            description: 'Descrição do material',
          },
          mat_fator_densidade: {
            type: 'string',
            description: 'Densidade do material por milímetro quadrado',
          },
        },
        example: [
            {
                mat_id: 1,
                mat_nome: "Inox304",
                mat_fator_densidade: "0.008000"
            },
            {
                mat_id: 2,
                mat_nome: "Galvanizado",
                mat_fator_densidade: "0.007870"
            },
            {
                mat_id: 3,
                mat_nome: "Chapa Preta",
                mat_fator_densidade: "0.007880"
            },
            {
                mat_id: 4,
                mat_nome: "Inox430",
                mat_fator_densidade: "0.007700"
            }
        ]
      },

      Material : {
        type: 'Array',
        properties: {
          mat_id : {
            type: 'integer',
            description: 'id da chapa',
          },
          mat_nome: {
            type: 'string',
            description: 'Descrição do material',
          },
          mat_fator_densidade: {
            type: 'string',
            description: 'Densidade do material por milímetro quadrado',
          },
        },
        example: 
            {
                mat_id: 1,
                mat_nome: "Inox304",
                mat_fator_densidade: "0.008000"
            }
        
      },

      todosUsuarios : {
        type: 'Array',
        properties: {
          usu_id: {
            type: 'integer',
            description: 'ID do usuário'
          },
          usu_nome: {
            type: 'string',
            description: 'Nome do usuário'
          },
          usu_email: {
            type: 'string',
            description: 'Email do usuário'
          },
          usu_data_hora_cadastro: {
            type: 'string',
            format: 'data-time',
            description: 'Data e hora de cadastro'
          },
          usu_senha: {
            type: 'string',
            description: 'Senha do usuário'
          },
          usu_situacao:{
            type: 'string',
            description: 'Situação do usuário'
          },
          tpu_id: {
            type: 'integer',
            description: 'ID do tipo de usuário'
          },
          tpu_nome: {
            type: 'string',
            description: 'Nome do tipo de usuário'
          },
        },
        example:[
            {
                usu_id: 2,
                usu_nome: "teste",
                usu_email: "teste@gmail.com",
                usu_data_hora_cadastro: "2024-08-26T19:27:43.000Z",
                usu_senha: "$2b$10$m5qbjs5ZuOTxrkBRTZ3WQ.jUKf31uA/T.HdNElWaI1NVDeef/asdaqew",
                usu_situacao: "Inativo",
                tpu_id: 1,
                tpu_nome: "admin"
            },
            {
                usu_id: 3,
                usu_nome: "fulano",
                usu_email: "fulano@avioeste.com.br",
                usu_data_hora_cadastro: "2024-08-27T19:01:59.000Z",
                usu_senha: "$2b$10$6aCcPLoLUiumvoMXeXQV0.UE6FNzaB/oec4WDKjiH/UxCcasdasW",
                usu_situacao: "Ativo",
                tpu_id: 1,
                tpu_nome: "admin"
            }
        ]
          },
      
          Usuario : {
            type: 'Array',
            properties: {
              usu_id: {
                type: 'integer',
                description: 'ID do usuário'
              },
              usu_nome: {
                type: 'string',
                description: 'Nome do usuário'
              },
              usu_email: {
                type: 'string',
                description: 'Email do usuário'
              },
              usu_data_hora_cadastro: {
                type: 'string',
                format: 'data-time',
                description: 'Data e hora de cadastro'
              },
              usu_senha: {
                type: 'string',
                description: 'Senha do usuário'
              },
              usu_situacao:{
                type: 'string',
                description: 'Situação do usuário'
              },
              tpu_id: {
                type: 'integer',
                description: 'ID do tipo de usuário'
              },
              tpu_nome: {
                type: 'string',
                description: 'Nome do tipo de usuário'
              },
            },
            example:
                {
                    usu_id: 2,
                    usu_nome: "teste",
                    usu_email: "teste@gmail.com",
                    usu_data_hora_cadastro: "2024-08-26T19:27:43.000Z",
                    usu_senha: "$2b$10$m5qbjs5ZuOTxrkBRTZ3WQ.jUKf31uA/T.HdNElWaI1NVDeef/asdaqew",
                    usu_situacao: "Inativo",
                    tpu_id: 1,
                    tpu_nome: "admin"
                }
              },

              usuarioSemTipoNome :  {
                type: 'Array',
                properties: {
                  usu_id: {
                    type: 'integer',
                    description: 'ID do usuário'
                  },
                  usu_nome: {
                    type: 'string',
                    description: 'Nome do usuário'
                  },
                  usu_email: {
                    type: 'string',
                    description: 'Email do usuário'
                  },
                  usu_data_hora_cadastro: {
                    type: 'string',
                    format: 'data-time',
                    description: 'Data e hora de cadastro'
                  },
                  usu_senha: {
                    type: 'string',
                    description: 'Senha do usuário'
                  },
                  usu_situacao:{
                    type: 'string',
                    description: 'Situação do usuário'
                  },
                  tpu_id: {
                    type: 'integer',
                    description: 'ID do tipo de usuário'
                  }
                },
                example:
                    {
                        usu_id: 2,
                        usu_nome: "teste",
                        usu_email: "teste@gmail.com",
                        usu_data_hora_cadastro: "2024-08-26T19:27:43.000Z",
                        usu_senha: "$2b$10$m5qbjs5ZuOTxrkBRTZ3WQ.jUKf31uA/T.HdNElWaI1NVDeef/asdaqew",
                        usu_situacao: "Inativo",
                        tpu_id: 1
                    }
                  },
    

              tiposUsuario : {
                type: 'Array',
                properties: {
                  tpu_id: {
                    type: 'integer',
                    description: 'ID do tipo de usuario'
                  },
                  tpu_nome: {
                    type: 'string',
                    description: 'Nome do tipo de usuario'
                  }
                },
                example:
                [
                    {
                        tpu_id: 1,
                        tpu_nome: "admin"
                    },
                    {
                        tpu_id: 2,
                        tpu_nome: "membro"
                    }
                ]
                  }
}

 export default schemas;
  