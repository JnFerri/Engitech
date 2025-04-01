import { UsuarioProvider } from "../Context/Usuario";
import FormLogin from "../Components/FormLogin/FormLogin";


export default {
    title: 'Components/FormLogin',
    component: FormLogin,
    backgrounds: {
        default: 'light', // Define o background padrão
        values: [
          { name: 'light', value: '#ffffff' }, // Background branco
          { name: 'dark', value: '#333333' },  // Background escuro
          { name: 'custom-blue', value: '#d3e0ff' }, // Exemplo de cor personalizada
        ],
      },
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: 'Componente de formulário de login.'
          ,
        },
      },
    },
    argTypes: {
      handleSubmit : { control: 'function' , default: '' , description : 'Função responsavel por fazer o submit do formulario de login, conferir com backend e caso possitivo, salvar token e informacões do usuario no localStorage e liberar rotas.' , type : 'function' , table : { category: 'Funções'}},
      handleEmail : { control: 'function' , default: '' , description : 'Função responsavel por salvar o valor do input de email no estado email.' , type : 'string' , table : { category: 'Funções'}},
      handleSenha : { control: 'function' , default: '' , description : 'Função responsavel por salvar o valor do input de senha no estado senha.' , type : 'string' , table : { category: 'Funções'}},
      error : { control: 'string' , default: '' , description : 'Em caso de erro ao fazer login este estado tera o valor com a mensagem de erro do backend.' , type : 'string' , table : { category: 'Estados'}},
      email : { control: 'string' , default: '' , description : 'Valor do input de email.' , type : 'string' , table : { category: 'Estados'}},
      senha : { control: 'string' , default: '' , description : 'Valor do input de senha.' , type : 'string' , table : { category: 'Estados'}},
      width : { control: 'string' , default: '' , description : 'define o comprimento do componente.' , type : 'string' , table : { category: 'Props'}}
    },
  };
  
  const Template = (args) =>  <UsuarioProvider> <FormLogin {...args} width='50%' /> </UsuarioProvider>  ;
  
  export const Padrao = Template.bind({});
  Padrao.parameters = {
    backgrounds: { default: 'dark' }
  };