import { CalculadoraAproveitamentoProvider } from "../Context/CalculadoraAproveitamento.js";
import { CalculadoraAproveitamentoMockProvider } from "./Mocks/CalculadoraAproveitamentoContext.mock.js";
import PainelResultadoAproveitamento from "../Components/CalculaldoraAproveitamento/PainelResultadoCalculoAproveitamento/PainelResultadoAproveitamento.js";
import {dadosResultadoAproveitamentoMock , resultadoValorInvalidoMock} from './Mocks/ResultadoMock.js'
export default {
    title: 'Components/PainelResultadoAproveitamento',
    component: PainelResultadoAproveitamento,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: `
            ## Componente utilizado para demonstrar os resultados dos aproveitamentos por chapas.
          `,
        },
      },
    },
  };
  
  const Template = (args) => <CalculadoraAproveitamentoProvider> <CalculadoraAproveitamentoMockProvider value={args}> <PainelResultadoAproveitamento  /> </CalculadoraAproveitamentoMockProvider> </CalculadoraAproveitamentoProvider> ;
  
  export const SemResultado = Template.bind({});
  SemResultado.args = {};

  
  export const ComResultado = Template.bind({});

  ComResultado.args = {
    DadosResultado : dadosResultadoAproveitamentoMock,
    AbreVisualizacaoCriaRetangulosPosicionamentos : () => { window.alert("Para visualizar funcionamento completo visualize o stories do componente CalculadoraAproveitamento.")}
  };
  
  export const ResultadoCalculoPerdaNegativaValorInvalido = Template.bind({});
  ResultadoCalculoPerdaNegativaValorInvalido.args = {
    DadosResultado : resultadoValorInvalidoMock,
    AbreVisualizacaoCriaRetangulosPosicionamentos : () => { window.alert("Para visualizar funcionamento completo visualize o stories do componente CalculadoraAproveitamento.")}

  }