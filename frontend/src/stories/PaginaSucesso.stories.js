import PaginaSucesso from "../Components/PaginaSucesso/PaginaSucesso";



export default {
    title: "Components/PaginaSucesso",
    component: PaginaSucesso,
    parameters: {
      docs: {
        description: {
          component: `
           ## Componente de pagina de sucesso demonstrada quando algum formulario foi concluido com sucesso.

          `,
        },
      },
    },
    argTypes: {
        handleRetornar : { control: 'function' , default: '' , description : 'Função responsável por retornar ao formulario.' , type : 'function' , table : { category: 'Function'}},
        cadastro : { control: 'boolean' , default: [] , description : 'Booleano responsável por demonstrar que a pagina de sucesso se trata de um formulario de cadastro.' , type : 'boolean'},
        atualizacao : { control: 'boolean' , default: [] , description : 'Booleano responsável por demonstrar que a pagina de sucesso se trata de um formulario de atualização' , type : 'boolean'},
        mensagemSucesso : {control: 'string' , default: [] , description : 'Mensagem que aparecerá na pagina de sucesso.' , type : 'string'}
    },
  };
  
  const Template = (args) => (
    

      <PaginaSucesso {...args} />
    
  );
  
  export const Cadastro= Template.bind({});
  Cadastro.args = {
    cadastro : true,
    handleRetornar : () => {window.alert('Aqui retornaria para o formulario de cadastro.')},
    mensagemSucesso : "Aqui Fica descrito a mensagemSucesso..."
  };

  export const Atualizacao= Template.bind({});
  Atualizacao.args = {
    atualizacao : true ,
    mensagemSucesso : "Aqui Fica descrito a mensagemSucesso..."
  };
  
  
  