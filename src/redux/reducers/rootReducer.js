import { employeReducer } from "./employeReducer";
import { combineReducers } from "redux"
import { fetchReducer } from "./fetchReducer";


const rootReducer = combineReducers({
    //Este es nuestro estado general de Empleados (Lo llamamos en el Browser con useSelector.)
    employeState: employeReducer,
    fetchState : fetchReducer
});

export default rootReducer;