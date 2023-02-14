import { employeReducer } from "./employeReducer";
import { combineReducers } from "redux"
import { fetchReducer } from "./fetchReducer";
import { documentacionesReducer } from "./documentacionesReducer";
import { trabajosAnterioresReducer } from "./trabajosAnterioresReducer";
import { domicilioReducer } from "./domicilioReducer";
import { familiaReducer } from "./familiaReducer";
import { licenciasReducer } from "./licenciasReducer";
import { datosExtrasReducer } from "./datosExtrasReducer";


const rootReducer = combineReducers({
    //Este es nuestro estado general de Empleados (Lo llamamos en el Browser con useSelector.)
    employeState: employeReducer,
    fetchState : fetchReducer,
    documentacionState : documentacionesReducer,
    trabajosAnterioresState : trabajosAnterioresReducer,
    domiciliosState :  domicilioReducer,
    familiaState : familiaReducer,
    licenciasState : licenciasReducer,
    datosExtrasState : datosExtrasReducer
});

export default rootReducer;