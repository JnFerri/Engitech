
import Button from "../Components/Button/Button.js";
import DivLinha from "../Components/DivLinha/DivLinha.js";


export default {
    title: 'Components/DivLinha',
    component: DivLinha,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: 'Componente utilizado para englobar outros componentes e organizalos alinhados em linha na horizontal com flexbox. Componente utilizado apenas para organizar outros componentes.'
          ,
        },
      },
    },
    argTypes: {
      width : { control: 'string' , default: '100%' , description : 'Define o comprimento do componente.' , type : 'string' , table : { category: 'Props'}},
      justifyContent : { control: 'string' , default: 'space-around' , description : 'Define o tipo de organização do espaço vazio entre os componentes.' , type : 'string' , table : { category: 'Props'}},
      alignItems : { control: 'string' , default: 'center' , description : 'Define o tipo de alinhamento dos componentes englobados pelo DivLinha.' , type : 'string' , table : { category: 'Props'}},
      margin : { control: 'string' , default: '' , description : 'Define a margem do componente.' , type : 'string' , table : { category: 'Props'}}
    },
  };
  
  const Template = (args) =>  <DivLinha {...args} > {args.children} </DivLinha> ;
  
  export const Padrao = Template.bind({});
  Padrao.args = {};

  export const ComComponentes = Template.bind({})
  ComComponentes.args = {
    children : (
        <section style ={{display:"flex", flexDirection:'column', margin:'0 1rem', alignItems:'center'}}>
        <span>Os componentes abaixo estão englobados pela DivLinha e alinhados lado a lado na horizontal.</span>
        <DivLinha>
            <Button width='30%'>Componente 1</Button>
            <Button width='30%'>Componente 2</Button>
            <Button width='30%'>Componente 3</Button>
        </DivLinha>
        </ section >
    )
  }
  