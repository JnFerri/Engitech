import PainelPrincipal from "../Components/PainelPrincipal/PainelPrincipal";
import { CalculadoraPesoChapaProvider } from "../Context/CalculadoraPesoChapa";
import { MenuLateralProvider } from "../Context/MenuLateral";
import { UsuarioProvider } from "../Context/Usuario";
import { CalculadoraPesoChapaMockProvider } from "./Mocks/CalculadoraPesoChapaContext.mock";
import { MenuLateralMockProvider } from "./Mocks/MenuLateralContext.mock";
import { UsuarioMockProvider } from "./Mocks/UsuariosContext.mock";




export default {
    title: "Components/PainelPrincipal",
    component: PainelPrincipal,
    parameters: {
      docs: {
        description: {
          component: `
           ## Como esta aplicação é uma single page aplicattion, Este componente é utilizado para englobar todos os providers de context da aplicação e os componentes de PainelUtilização que exibe os componentes funcionais da aplicação, e possui o componente MenuLateral que conforme opção selecionada exibe os componentes no PainelUtilização.

           Para exemplo foi colocado o menu lateral de usuario em parte de calculos de chapas e com componente de calculo de peso de chapa no painel de utilização. 
           Args utilizado apenas para visualizar no storybook, mas argumentos seriam dos componentes filhos.

          `,
        },
      },
    },
    argTypes: {
        
    },
  };
  
  const Template = (args) => (
    <CalculadoraPesoChapaProvider>
    <CalculadoraPesoChapaMockProvider value={args}>
    <UsuarioProvider>
    <UsuarioMockProvider value={args}>
    <MenuLateralProvider>
    <MenuLateralMockProvider value={args}>
      <PainelPrincipal />
    </MenuLateralMockProvider> 
    </MenuLateralProvider> 
    </UsuarioMockProvider>
    </UsuarioProvider>
    </CalculadoraPesoChapaMockProvider>
    </CalculadoraPesoChapaProvider>
  );

  
  
  export const Exemplo= Template.bind({});
  Exemplo.args = {
    TipoOpcoesMenuLateral : 'CalculoChapas',
    TipoUsuario: 2,
    OpcaoSelecionadaMenuLateral : 'CalculadoraPesoChapas',
    DadosChapaResultado : {

      },
      HandleTipoMenu : () => {window.alert('Aqui voltaria para o menu inicial. Este é apenas um exemplo.')}
  }
  ;

  
  