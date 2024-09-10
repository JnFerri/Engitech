

import { useMenuLateral } from "../../../Context/MenuLateral.js";
import LinhaMenuLateral from "../../ListaMenuLateral/LinhaMenuLateral/LinhaMenuLateral.js";
import ListaMenuLateral from "../../ListaMenuLateral/ListaMenuLateral.js";





function ListaMenuLateralMembro(){
    const {HandleTipoMenu} = useMenuLateral()


    return(
        <ListaMenuLateral>
            <LinhaMenuLateral onClick={() => HandleTipoMenu('CalculoChapas')} >Calculos de Chapa</LinhaMenuLateral>
        </ListaMenuLateral>
    )
}

export default ListaMenuLateralMembro
