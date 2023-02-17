import { ADD_DETALLE_LIC, ADD_NEW_LICENCIA, CLEAR_IDS_LIC, DELETE_LICENCIA, DETALLE_SELECTED, GET_LIC_EMPLEADO, LICENCIA_SELECTED, OPTION_SELECTED, SAVE_IDS_LIC, UPDATE_LICENCIA } from "../types/licenciasTypes";

const initialState = {
    options : "",
    licenciasEmpleado : "",
    detalleLicencia : "",
    licenciaSelected : "",
    detalleSelected : "",
    idsLic : []
}

export const licenciasReducer=(state = initialState, action)=>{
    const { type, payload } = action;

    switch(type){
        case OPTION_SELECTED : {
            return {
                ...state,
                options : payload
            }
        }
        case GET_LIC_EMPLEADO : {
            return {
                ...state,
                licenciasEmpleado : payload
            }
        }
        case ADD_DETALLE_LIC : {
            return {
                ...state,
                detalleLicencia : payload
            }
        }
        case LICENCIA_SELECTED : {
            return{
                ...state,
                licenciaSelected : payload
            }
        }
        case DETALLE_SELECTED : {
            return {
                ...state,
                detalleSelected : payload
            }
        }
        case DELETE_LICENCIA : {
            return {
                ...state,
                licenciasEmpleado : state.licenciasEmpleado.filter((item)=> item.idLicenciaEmpleado !== payload)
            }
        }
        case SAVE_IDS_LIC : {
            return{
                ...state,
                idsLic : [...state.idsLic.push(payload)]
            }
        }
        case UPDATE_LICENCIA : {
            const newLicencia = {...action.payload}
            return{
                ...state.licenciasEmpleado,
                licenciasEmpleado : state.licenciasEmpleado.filter((licencia)=> licencia.idLicenciaEmpleado === newLicencia.idLicenciaEmpleado)
            }
        }
        case ADD_NEW_LICENCIA : {
            return {
                ...state,
                licenciasEmpleado : [...state.licenciasEmpleado, payload]
            }
        }
        case CLEAR_IDS_LIC : {
            return {
                ...state,
                idsLic : state.idsLic = []
            }
        }
        default : return state
    }
}