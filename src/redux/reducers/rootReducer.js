import { employeReducer } from "./employeReducer";
import { combineReducers } from "redux"
import { fetchReducer } from "./fetchReducer";
import { documentacionesReducer } from "./documentacionesReducer";
import { trabajosAnterioresReducer } from "./trabajosAnterioresReducer";


const rootReducer = combineReducers({
    //Este es nuestro estado general de Empleados (Lo llamamos en el Browser con useSelector.)
    employeState: employeReducer,
    fetchState : fetchReducer,
    documentacionState : documentacionesReducer,
    trabajosAnterioresState : trabajosAnterioresReducer
});

export default rootReducer;