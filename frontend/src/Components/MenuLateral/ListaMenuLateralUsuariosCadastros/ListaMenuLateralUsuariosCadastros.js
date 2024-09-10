

import { useMenuLateral } from "../../../Context/MenuLateral.js";
import LinhaMenuLateral from "../../ListaMenuLateral/LinhaMenuLateral/LinhaMenuLateral.js";
import ListaMenuLateral from "../../ListaMenuLateral/ListaMenuLateral.js";





function ListaMenuLateralUsuariosCadastros(){
    const {HandleOpcaoSelecionadaMenuLateral, OpcaoSelecionadaMenuLateral} = useMenuLateral()


    return(
        <ListaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleOpcaoSelecionadaMenuLateral('TodosUsuarios')} ativado = {OpcaoSelecionadaMenuLateral === 'TodosUsuarios' ? true : false} >Todos Usuarios</LinhaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleOpcaoSelecionadaMenuLateral('CadastrarUsuario')} ativado = {OpcaoSelecionadaMenuLateral === 'CadastrarUsuario' ? true : false}>Cadastrar Usuario</LinhaMenuLateral>
        </ListaMenuLateral>
        
    )
}

export default ListaMenuLateralUsuariosCadastros
