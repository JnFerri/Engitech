import { MemoryRouter } from "react-router-dom";
import ListaDropDownUsuario from "../Components/MenuDropDownUsuario/ListaDropDownUsuario/ListaDropDownUsuario.js";
import { UsuarioProvider } from "../Context/Usuario.js";
import { UsuarioMockProvider } from "./Mocks/UsuariosContext.mock.js";




export default {
    title: "Components/ListaDropDownUsuario",
    component: ListaDropDownUsuario,
    parameters: {
      docs: {
        description: {
          component: `
           ## lista do menu dropdown da barra de navegação superior com opção de sair para ser feito logout.
            
          `,
        },
      },
    },
    argTypes: {
        handleLogout : { control: 'function' , default: false , description : 'Função responsável por fazer logout.' , type : 'function', table: { category: 'Funções'}},
        navigate: { control: 'function' , default: false , description : 'Função do React route responsável por navegar entre as rotas da aplicação.' , type : 'function', table: { category: 'Funções'}},
    },
  };
  
  const Template = (args) => (
    <MemoryRouter>
        <UsuarioProvider>
            <UsuarioMockProvider value={args}>
                <ListaDropDownUsuario {...args}  /> 
            </UsuarioMockProvider>
        </UsuarioProvider>
    </MemoryRouter>
  );
  
  export const Padrao= Template.bind({});
  Padrao.args = {
    handleLogout : (e) => {window.alert('Faria Logout')}
  };
  