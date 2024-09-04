

import { useMenuLateral } from "../../../Context/MenuLateral.js";
import LinhaMenuLateral from "../../ListaMenuLateral/LinhaMenuLateral/LinhaMenuLateral.js";
import ListaMenuLateral from "../../ListaMenuLateral/ListaMenuLateral.js";





function ListaMenuCalculoChapas(){
    const {HandleOpcaoSelecionadaMenuLateral, OpcaoSelecionadaMenuLateral} = useMenuLateral()


    return(
        <ListaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleOpcaoSelecionadaMenuLateral('CalculadoraAproveitamento')} ativado = {OpcaoSelecionadaMenuLateral === 'CalculadoraAproveitamento' ? true : false} >Calculadora Chapa de Composição</LinhaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleOpcaoSelecionadaMenuLateral('ChapasCadastradas')} ativado = {OpcaoSelecionadaMenuLateral === 'ChapasCadastradas' ? true : false}>Chapas Cadastradas</LinhaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleOpcaoSelecionadaMenuLateral('RetalhosEstoque')} ativado = {OpcaoSelecionadaMenuLateral === 'RetalhosEstoque' ? true : false}>Retalhos em Estoque</LinhaMenuLateral>
        </ListaMenuLateral>
    )
}

export default ListaMenuCalculoChapas
