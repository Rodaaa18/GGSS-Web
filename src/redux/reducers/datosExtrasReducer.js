import { ADD_DATOSE_EMP, CLEAN_ID_DE, DATOS_EXTRAS_EMPLEADO, DELETE_DE_EMP, GET_DATOS_EXTRAS, GET_DE_SELECTED, SAVE_ID_DE } from "../types/datosExtrasTypes";

const initialState = {
    datosExtras : "",
    datosExtraEmpleado : "",
    datoExtra : "",
    idsDe : []
}

export const datosExtrasReducer=(state = initialState, action )=>{
    const { type, payload } = action;

    switch(type){
        case GET_DATOS_EXTRAS : {
            return{
                ...state,
                datosExtras : payload
            }
        }
        case DATOS_EXTRAS_EMPLEADO : {
            return{
                ...state,
                datosExtraEmpleado : payload
            }
        }
        case ADD_DATOSE_EMP : {
            
            return{
                ...state,
                datosExtraEmpleado : payload
            }
        }
        case SAVE_ID_DE : {
            return {
                ...state,
                idsDe : [...state.idsDe.push(payload)]
            }
        }
        case CLEAN_ID_DE : {
            return {
                ...state,
                idsDe : state.idsDe = []
            }
        }
        case DELETE_DE_EMP : {
            return {
                ...state,
                datosExtraEmpleado : state.datosExtraEmpleado.filter((de)=> de.idEmpleadoDatoExtra !== payload)
            }
        }
        case GET_DE_SELECTED : {
            return {
                ...state,
                datoExtra : payload
            }
        }
        default : return state
    }
}