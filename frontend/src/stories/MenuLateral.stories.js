import { MenuLateralProvider } from "../Context/MenuLateral";
import { UsuarioProvider } from "../Context/Usuario";
import { MenuLateralMockProvider } from "./Mocks/MenuLateralContext.mock";
import { UsuarioMockProvider } from "./Mocks/UsuariosContext.mock";
import MenuLateral from "../Components/MenuLateral/MenuLateral";


export default {
    title: 'Components/MenuLateral',
    component: MenuLateral,
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
          component: 'Componente de Menu lateral com opções primarias definidas conforme tipo de usuario logado. Utilizado em toda a aplicação para navegação e alteração dos componentes visiveis no painel de utilização. Tamanho se adapta no componente onde ele é utilizado, PaginaPrincipal. '
          ,
        },
      },
    },
    argTypes: {
      TipoOpcoesMenuLateral : { control: 'string' , default: '' , description : 'Informa que tipo de lista de opções do menu lateral devem aparecer nele.' , type : 'string' , table : { category: 'Props'}},
      HandleTipoMenu : { control: 'function' , default: '' , description : 'Função que define o tipo do menu lateral, no caso as opções que ele exibirá alterando a propriedade de TipoOpcoesMenuLateral.' , type : 'function' , table : { category: 'Function'}},
      TipoUsuario : { control: 'number' , default: '' , description : 'Informa o tipo de usuario para que seja definido o tipo de menu lateral inicial que deve aparecer, o para Admin ou para Membro.' , type : 'number' , table : { category: 'Props'}},
      setTipoUsuario :{ control: 'function' , default: '' , description : 'Função responsavel por definir novo valor para o estado TipoUsuario, ao carregar o componente é definido através desta função o tipo de usuario conforme o Usuario do localStorage.' , type : 'function' , table : { category: 'Function'}}

    },
  };
  
  const Template = (args) => <UsuarioProvider>  <MenuLateralProvider><UsuarioMockProvider value={args}><MenuLateralMockProvider value={args}> <MenuLateral ></MenuLateral></MenuLateralMockProvider></UsuarioMockProvider> </MenuLateralProvider>   </UsuarioProvider> ;
  
  export const Administrador = Template.bind({});
  Administrador.args = {
    TipoUsuario: 1,
    TipoOpcoesMenuLateral: ''
  };

  export const Membro = Template.bind({});
  Membro.args = {
    TipoUsuario: 2,
    TipoOpcoesMenuLateral: ''
  };

  export const MenuCalculoChapas = Template.bind({});
  MenuCalculoChapas.args = {
    TipoUsuario: 1,
    TipoOpcoesMenuLateral: 'CalculoChapas',
    HandleTipoMenu : () => {window.alert('Ao clicar em voltar ele retornaria para o menu inicial de Membro ou Administrador. ')}
  }

  export const MenuUsuario = Template.bind({});
  MenuUsuario.args = {
    TipoUsuario: 1,
    TipoOpcoesMenuLateral: 'UsuariosAdmin',
    HandleTipoMenu : () => {window.alert('Ao clicar em voltar ele retornaria para o menu inicial de Membro ou Administrador. ')}
  }
  ;
  
  