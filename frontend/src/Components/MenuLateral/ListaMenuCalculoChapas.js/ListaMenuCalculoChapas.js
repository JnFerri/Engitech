import LinhaMenuLateral from "../../ListaMenuLateral/LinhaMenuLateral/LinhaMenuLateral.js";
import ListaMenuLateral from "../../ListaMenuLateral/ListaMenuLateral.js";





function ListaMenuCalculoChapas(){
    return(
        <ListaMenuLateral>
            <LinhaMenuLateral>Calculadora Chapa de Composição</LinhaMenuLateral>
            <LinhaMenuLateral>Chapas Cadastradas</LinhaMenuLateral>
            <LinhaMenuLateral>Retalhos em Estoque</LinhaMenuLateral>
        </ListaMenuLateral>
    )
}

export default ListaMenuCalculoChapas
