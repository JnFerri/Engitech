
import { useMenuLateral } from "../../../Context/MenuLateral.js";
import LinhaMenuLateral from "../../ListaMenuLateral/LinhaMenuLateral/LinhaMenuLateral.js";
import ListaMenuLateral from "../../ListaMenuLateral/ListaMenuLateral.js";





function ListaMenuCalculoChapas(){
    const {HandleOpcaoSelecionadaMenuLateral} = useMenuLateral()


    return(
        <ListaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleOpcaoSelecionadaMenuLateral('CalculadoraAproveitamento')}>Calculadora Chapa de Composição</LinhaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleOpcaoSelecionadaMenuLateral('ChapasCadastradas')}>Chapas Cadastradas</LinhaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleOpcaoSelecionadaMenuLateral('RetalhosEstoque')}>Retalhos em Estoque</LinhaMenuLateral>
        </ListaMenuLateral>
    )
}

export default ListaMenuCalculoChapas
