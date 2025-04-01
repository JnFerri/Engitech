
import TodosUsuarios from "../Components/TodosUsuarios/TodosUsuarios";
import { TodosUsuariosProvider } from "../Context/TodosUsuarios";
import { TodosUsuariosMockProvider } from "./Mocks/TodosUsuariosContext.mock";


export default {
    title: 'Components/TodosUsuarios',
    component: TodosUsuarios,
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
          component: 'Componente utilizado para exibir a lista de usuarios e caso clicado em alterar senha ira exibir o modal de alterar senha de usuario.'
          ,
        },
        
      },
    },
    argTypes: {
        ModalAlteracaoSenhaEstaAtivo: { control: 'boolean' , default: false , description : 'Caso true aparece modal de alteração de senha do usuario. ' , type : 'boolean'},
    },
    
  };
  
  const Template = (args) =>  <TodosUsuariosProvider > <TodosUsuariosMockProvider value={args}> <TodosUsuarios/></TodosUsuariosMockProvider> </TodosUsuariosProvider>
  
  export const Padrao = Template.bind({});
  Padrao.args = {
    
  };

  export const ModalAberto = Template.bind({});
  ModalAberto.args = {
    ModalAlteracaoSenhaEstaAtivo : true
  };

  
  

