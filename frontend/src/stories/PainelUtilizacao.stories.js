import PainelUtilizacao from "../Components/PainelUtilizacao/PainelUtilizacao";
import { CalculadoraAproveitamentoProvider } from "../Context/CalculadoraAproveitamento";
import { CalculadoraPesoChapaProvider } from "../Context/CalculadoraPesoChapa";
import { ChapasCadastradasProvider } from "../Context/ChapasCadastradas";
import { MenuLateralProvider } from "../Context/MenuLateral";
import { CalculadoraPesoChapaMockProvider } from "./Mocks/CalculadoraPesoChapaContext.mock";
import { MenuLateralMockProvider } from "./Mocks/MenuLateralContext.mock";





export default {
    title: "Components/PainelUtilizacao",
    component: PainelUtilizacao,
    parameters: {
      docs: {
        description: {
          component: `
           ## Como esta aplicação é uma single page aplicattion, Este componente é utilizado para renderizar os componentes funcionais desta aplicação.

           Para exemplo foi colocado o componente de calculo de peso de chapa no painel de utilização. 
          `,
        },
      },
    },
    argTypes: {
       OpcaoSelecionadaMenuLateral: {control: 'string' , default: [] , description : 'String contendo o nome da opção selecionada no menu lateral para renderizar os componentes funcionais' , type : 'string'}
    },
  };
  
  const Template = (args) => (
    <CalculadoraPesoChapaProvider>
    <CalculadoraPesoChapaMockProvider value={args}>
    <ChapasCadastradasProvider>
    <CalculadoraAproveitamentoProvider>
    <MenuLateralProvider>
    <MenuLateralMockProvider value={args}>
      <PainelUtilizacao />
    </MenuLateralMockProvider> 
    </MenuLateralProvider> 
    </CalculadoraAproveitamentoProvider>
    </ChapasCadastradasProvider>
    </CalculadoraPesoChapaMockProvider>
    </CalculadoraPesoChapaProvider>
  );

  
  
  export const Exemplo= Template.bind({});
  Exemplo.args = {
    OpcaoSelecionadaMenuLateral : 'CalculadoraPesoChapas',
    DadosChapaResultado : {

      }
  }
  ;

  
  