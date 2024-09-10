

import { useMenuLateral } from "../../../Context/MenuLateral.js";
import LinhaMenuLateral from "../../ListaMenuLateral/LinhaMenuLateral/LinhaMenuLateral.js";
import ListaMenuLateral from "../../ListaMenuLateral/ListaMenuLateral.js";





function ListaMenuLateralAdmin(){
    const {HandleTipoMenu} = useMenuLateral()


    return(
        <ListaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleTipoMenu('CalculoChapas')} >Calculos de Chapa</LinhaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleTipoMenu('UsuariosAdmin')}>Usuarios</LinhaMenuLateral>
        </ListaMenuLateral>
    )
}

export default ListaMenuLateralAdmin
