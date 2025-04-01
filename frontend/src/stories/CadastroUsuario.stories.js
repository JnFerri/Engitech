import { CadastroUsuarioProvider } from "../Context/CadastroUsuario";
import CadastroUsuario from "../Components/CadastroUsuario/CadastroUsuario";

export default {
  title: 'Components/CadastroUsuario',
  component: CadastroUsuario,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente utilizado para englobar todos componentes relacionados a pagina de cadastro de usuario. Atualmente unico componente utilizado é o formulario de cadastro.',
      },
    },
  },
  
};

const Template = (args) => <CadastroUsuarioProvider> <CadastroUsuario {...args} /> </CadastroUsuarioProvider> ;

export const Padrao = Template.bind({});
Padrao.args = {
};