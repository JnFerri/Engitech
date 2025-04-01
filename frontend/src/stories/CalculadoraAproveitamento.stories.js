import { CalculadoraAproveitamentoProvider } from "../Context/CalculadoraAproveitamento.js";
import CalculadoraAproveitamento from "../Components/CalculaldoraAproveitamento/CalculadoraAproveitamento.js";
import { CalculadoraAproveitamentoMockProvider } from "./Mocks/CalculadoraAproveitamentoContext.mock.js";


export default {
    title: 'Components/CalculadoraAproveitamento',
    component: CalculadoraAproveitamento,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: `
            ## Componente utilizado para englobar todos componentes relacionados a pagina de calcular o aproveitamento das Chapas.
             - Componentes Utilizados :
             FormCalculoAproveitamento.js e ResultadoAproveitamento.js
             Quando clicado em um dos resultados abre componente ModalVisualizacaoResultadoAproveitamento.js

             Componente utiliza o context useCalculadoraAproveitamento() para pegar estados ou funções definidos nos argumentos.
          `,
        },
      },
    },
    argTypes: {
      DadosChapaVisualizacao: { control: 'object', default: {} , description : 'Dados da chapa que foi clicada, para colocar no cabeçalho do modal. Utilizado neste componente para verificar se há o valor antes de abrir o modal.' , type : 'object' },
      DadosResultado : { control: 'object' , default: [] , description : 'Array com dados dos resultados do calculos. Utilizado neste componente para caso length do array ser maior que 0 renderizar o painel de resultado.' , type : 'object'},
      ModalVisualizacaoEstaVisivel : { control: 'boolean' , default: [] , description : 'Booleano responsável por definir se o modal esta visivel ou não. Modal se torna visivel ao clicar em um dos cards de resultado.' , type : 'boolean'}
    },
  };
  
  const Template = (args) => <CalculadoraAproveitamentoProvider> <CalculadoraAproveitamentoMockProvider> <CalculadoraAproveitamento {...args} /> </CalculadoraAproveitamentoMockProvider> </CalculadoraAproveitamentoProvider> ;
  
  export const FuncionamentoCompleto = Template.bind({});
  FuncionamentoCompleto.args = {};