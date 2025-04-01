
import { MenuLateralProvider } from "../Context/MenuLateral.js";
import { MenuLateralMockProvider } from "./Mocks/MenuLateralContext.mock.js";
import ListaMenuLateralAdmin from "../Components/MenuLateral/ListaMenuLateralAdmin/ListaMenuLateralAdmin.js";


export default {
    title: 'Components/ListaMenuLateralAdmin',
    component: ListaMenuLateralAdmin,
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
          component: 'Menu lateral com opções do menu inicial de Administradores.'
          ,
        },
      },
    },
    argTypes: {
      HandleTipoMenu : { control: 'function' , default: '' , description : 'Altera o valor do tipo de Menu. Utilizado para Alterar conforme opção selecionada no menu.' , type : 'function' , table : { category: 'Function'}}
    },
  };
  
  const Template = (args) => <MenuLateralProvider> <MenuLateralMockProvider args={args}> <ListaMenuLateralAdmin/> </MenuLateralMockProvider> </MenuLateralProvider> ;
  
  export const Padrao = Template.bind({});
  Padrao.args = {};
 
  