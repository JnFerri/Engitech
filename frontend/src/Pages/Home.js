import styled from "styled-components";
import NavBarSuperior from "../Components/NavBarSuperior/NavBarSuperior.js";

const HomePage = styled.main`
    width:100%;
    height:100vh;
`

function Home(){
    return(
        <HomePage>
            <NavBarSuperior/>
            
        </HomePage>
    )
}

export default Home
