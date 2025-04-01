import { CalculadoraAproveitamentoProvider} from "../Context/CalculadoraAproveitamento.js";
import { CalculadoraAproveitamentoMockProvider } from "./Mocks/CalculadoraAproveitamentoContext.mock.js";
import FormCalculoAproveitamento from "../Components/CalculaldoraAproveitamento/FormCalculoAproveitamento/FormCalculoAproveitamento.js";
export default {
    title: 'Components/FormCalculoAproveitamento',
    component: FormCalculoAproveitamento,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: `
            ## Componente utilizado para captar valores para o calculo do aproveitamento das chapas.
          `,
        },
      },
    },
  };
  
  const Template = (args) => <CalculadoraAproveitamentoProvider> <CalculadoraAproveitamentoMockProvider value={args}> <FormCalculoAproveitamento {...args} /> </CalculadoraAproveitamentoMockProvider> </CalculadoraAproveitamentoProvider> ;
  
  export const Padrao = Template.bind({});
  Padrao.args = {};
