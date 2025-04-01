import styled from "styled-components";
import NavBarSuperior from "../Components/NavBarSuperior/NavBarSuperior.js";
import PainelPrincipal from "../Components/PainelPrincipal/PainelPrincipal.js";

const HomePage = styled.main`
    width:100%;
    height:100vh;
`
//Componente de pagina que une os componentes de barra de navegação superior e painel principal de Single page apllication.
function Home(){
    return(
        <HomePage>
            <NavBarSuperior/>
            <PainelPrincipal/>
        </HomePage>
    )
}

export default Home
