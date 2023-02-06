import { CLEAN_IDS_DOC, DELETE_DOC_EMPLEADO, GET_DOCUMENTACIONES, GET_DOC_EMPLEADO, SAVE_IDS } from "../types/documentacionTypes";

const initialState = {
    documentaciones : "",
    documentacionDelEmpleado : "",
    ids : [],

}

export const documentacionesReducer=(state = initialState, action)=>{
    const { type, payload } = action;
    switch(type){
        case GET_DOCUMENTACIONES : {
            return{
                ...state,
                documentaciones : payload
            }   
        }
        case GET_DOC_EMPLEADO : {
            return{
                ...state,
                documentacionDelEmpleado : payload
            }
        }
        case SAVE_IDS : {
            return {
                ...state,
                ids : [...state.ids.push(payload)]
            }
        }
        case CLEAN_IDS_DOC : {
            return{
                ...state,
                ids : state.ids = []
            }
        }
        case DELETE_DOC_EMPLEADO : {
            return{
                ...state,
                documentacionDelEmpleado : state.documentacionDelEmpleado.filter((doc)=> doc.idEmpleadoDocumentacion !== payload)
            }
        }
        default:
                return state;
    }
}