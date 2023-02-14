import { ADD_DOMICILIO, DELETE_DOMICILIO, DOMICILIO_SELECTED, GET_DOMICILIOS, SAVE_ID_DOM } from "../types/domicilioTypes";

const initialState = {
    domiciliosEmpleado : "",
    domicilioSelected : "",
    idsDom : []
}

export const domicilioReducer = ( state = initialState, action)=>{
    const { type, payload } = action;

    switch(type){
        case GET_DOMICILIOS : {
            return{
                ...state,
                domiciliosEmpleado : payload
            }
        }
        case ADD_DOMICILIO : {
            return{
                ...state,
                domiciliosEmpleado : [...state.domiciliosEmpleado, payload]
            }
        }
        case DOMICILIO_SELECTED : {
            return{
                ...state,
                domicilioSelected : payload
            }
        }
        case DELETE_DOMICILIO : {
            console.log(payload)
           
            return{
                ...state,
                domiciliosEmpleado : state.domiciliosEmpleado.filter((item)=> item.idDomicilio !== payload)
            }
        }
        case SAVE_ID_DOM : {
            return {
                ...state,
                idsDom : [...state.idsDom.push(payload)]
            }
        }
        default : return state
    }
}