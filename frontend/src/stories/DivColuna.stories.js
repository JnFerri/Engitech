
import Button from "../Components/Button/Button.js";
import DivColuna from "../Components/DivColuna/DivColuna.js";


export default {
    title: 'Components/DivColuna',
    component: DivColuna,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: 'Componente utilizado para englobar outros componentes e organizalos alinhados em coluna com flexbox. Componente utilizado apenas para organizar outros componentes.'
          ,
        },
      },
    },
    argTypes: {
      width : { control: 'string' , default: '100%' , description : 'Define o comprimento do componente.' , type : 'string' , table : { category: 'Props'}}
    },
  };
  
  const Template = (args) =>  <DivColuna {...args} > {args.children} </DivColuna> ;
  
  export const Padrao = Template.bind({});
  Padrao.args = {};

  export const ComComponentes = Template.bind({})
  ComComponentes.args = {
    children : (
        <section style ={{display:"flex", margin:'0 1rem', alignItems:'center'}}>
        <span>Os componentes ao lado estão englobados pelo DivColuna e alinhados em coluna.</span>
        <DivColuna>
            <Button>Componente 1</Button>
            <Button>Componente 2</Button>
            <Button>Componente 3</Button>
        </DivColuna>
        </ section >
    )
  }
  