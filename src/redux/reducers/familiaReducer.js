import { DELETE_FAMILIAR, FAMILIAR_SELECTED, GET_FAMILIARES, GET_FAMILIARES_EMPLEADOS, SAVE_IDS_FAM } from "../types/familiaTypes";

const initialState = {
    familiares : "",
    familiaresEmpleado : "",
    familiarSeleccionado : "",
    idsFam : [],

}

export const familiaReducer=( state = initialState, action)=> {
    const { type, payload } = action;

    switch(type){
        case FAMILIAR_SELECTED : {
            return{
                ...state,
                familiarSeleccionado : payload
            }
        }
        case GET_FAMILIARES : {
            return{
                ...state,
                familiares : payload
            }
        }
        case DELETE_FAMILIAR : {
            return{
                ...state,
                familiaresEmpleado : state.familiaresEmpleado.filter((item)=> item.idFamiliares !== payload)
            }
        }
        case SAVE_IDS_FAM : {
            return {
                ...state,
                idsFam : [...state.idsFam.push(payload)]
            }
        }
        case GET_FAMILIARES_EMPLEADOS : {
            return{
                ...state,
                familiaresEmpleado : payload
            }
        }
        default : return state
    }
}