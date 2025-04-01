
import { MenuLateralProvider } from "../Context/MenuLateral.js";
import { MenuLateralMockProvider } from "./Mocks/MenuLateralContext.mock.js";
import ListaMenuLateralUsuariosCadastros from "../Components/MenuLateral/ListaMenuLateralUsuariosCadastros/ListaMenuLateralUsuariosCadastros.js";

export default {
    title: 'Components/ListaMenuLateralUsuarioCadastros',
    component: ListaMenuLateralUsuariosCadastros,
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
          component: 'Menu lateral com opções do menu de Usuarios.'
          ,
        },
      },
    },
    argTypes: {
      OpcaoSelecionadaMenuLateral : { control: 'string' , default: '' , description : 'Informa a opção do menu que esta selecionado para definir a cor diferente do background.' , type : 'string' , table : { category: 'Props'}},
      HandleOpcaoSelecionadaMenuLateral : { control: 'function' , default: '' , description : 'Ira alterar o estado OpcaoSelecionadaMenuLateral demonstrando a opção selecionada.' , type : 'function' , table : { category: 'Function'}}
    },
  };
  
  const Template = (args) => <MenuLateralProvider> <MenuLateralMockProvider args={args}> <ListaMenuLateralUsuariosCadastros /> </MenuLateralMockProvider> </MenuLateralProvider> ;
  
  export const Padrao = Template.bind({});
  Padrao.args = {};
 
  