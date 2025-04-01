import BannerLogin from "../Components/BannerLogin.js/BannerLogin.js";

export default {
    title: 'Components/BannerLogin',
    component: BannerLogin,
    parameters: {
        docs:{
            description : {
                component: 'Banner da tela de login.'
            }
        }
    },
    argTypes: {
        
      },
    tags:['autodocs']
  };
  
  const Template = (args) => <BannerLogin {...args} />;

  export const Padrao  = Template.bind({});
  Padrao.args = {
    
  };