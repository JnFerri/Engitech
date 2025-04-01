import NavBarSuperior from "../Components/NavBarSuperior/NavBarSuperior";
import { MenuLateralProvider } from "../Context/MenuLateral";


export default {
    title: "Components/NavBarSuperior",
    component: NavBarSuperior,
    parameters: {
      docs: {
        description: {
          component: `
           ## Componente de menu superior, com imagem de logo da aplicação que ao ser clicado ira definir o tipo do menu lateral para o padrão inicial da aplicação, e ao ser clicado no nome do usuario abrirá menu dropdown com opção de 'Sair' para fazer logout da aplicação.

          `,
        },
      },
    },
    argTypes: {
        HandleTipoMenu : { control: 'function' , default: '' , description : 'Função que define o tipo do menu lateral, no caso as opções que ele exibirá alterando a propriedade de TipoOpcoesMenuLateral.' , type : 'function' , table : { category: 'Function'}},
    },
  };
  
  const Template = (args) => (
    
  <MenuLateralProvider>
      <NavBarSuperior value={args} />
    </MenuLateralProvider>
  );
  
  export const Padrao= Template.bind({});
  Padrao.args = {
    
  };
  
  