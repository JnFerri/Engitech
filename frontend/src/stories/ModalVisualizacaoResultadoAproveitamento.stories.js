
import ModalVisualizacaoResultadoAproveitamento from "../Components/CalculaldoraAproveitamento/ModalVisualizacaoResultadoAproveitamento/ModalVisualizacaoResultadoAproveitamento.js";
import { DadosChapaVisualizacaoMock, RetangulosPosicionamentoHorizontalMock, RetangulosPosicionamentoMaximoMisturadoMock, RetangulosPosicionamentoVerticalMock } from "./Mocks/DadosMock.js";
import { CalculadoraAproveitamentoProvider } from "../Context/CalculadoraAproveitamento.js";
import { CalculadoraAproveitamentoMockProvider } from "./Mocks/CalculadoraAproveitamentoContext.mock.js";
export default {
    title: 'Components/ModalVisualizacaoResultadoAproveitamento',
    component: ModalVisualizacaoResultadoAproveitamento,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: `
            ## Componente utilizado para demonstrar os resultados dos posicionamentos das peças e aproveitamento por posicionamento na chapa.
            ## Utiliza-se do Context useCalculadoraAproveitamento para pegar os estados e funções descritas nos argumentos.
            ## Para stories valores foram defidos nos args pelos mocks e atribuidos através do useCalculadoraAproveitamentoMock.
          `,
        },
      },
    },
    argTypes: {
        DadosChapaVisualizacao: { control: 'object', default: {} , description : 'Dados da chapa que foi clicada, para colocar no cabeçalho do modal.' , type : 'object' },
        RetangulosPosicionamentoHorizontal: { control: 'object' , default: [] , description : 'Array com coordenadas dos posicionamentos da Peça na chapa na posição Horizontal.' , type : 'Array' },
        RetangulosPosicionamentoVertical: { control: 'object' , default: [] , description : 'Array com coordenadas dos posicionamentos das peças na chapa na posição Vertical.' , type : 'Array'},
        RetangulosPosicionamentoMaximoMisturado : { control: 'object' , default: [] , description : 'Array com coordenadas dos posicionamentos das peças na chapa na melhor posição possivel misturando peça vertical e horizontal.' , type : 'Array'},
        FechaModalVisualizacao : { control: 'default' , default: [] , description : 'Função responsável por fechar o modal.' , type : 'function'}
      },
  };
  
  const Template = (args) => <CalculadoraAproveitamentoProvider> <CalculadoraAproveitamentoMockProvider value={args}> <ModalVisualizacaoResultadoAproveitamento /> </CalculadoraAproveitamentoMockProvider> </CalculadoraAproveitamentoProvider> ;
  
 

  
  export const ComResultado = Template.bind({});
  ComResultado.args = {
    DadosChapaVisualizacao : DadosChapaVisualizacaoMock,
    RetangulosPosicionamentoHorizontal : RetangulosPosicionamentoHorizontalMock,
    RetangulosPosicionamentoVertical : RetangulosPosicionamentoVerticalMock,
    RetangulosPosicionamentoMaximoMisturado : RetangulosPosicionamentoMaximoMisturadoMock,
    FechaModalVisualizacao : () => { window.alert("Para visualizar funcionamento completo visualize o stories do componente CalculadoraAproveitamento.")}
  };