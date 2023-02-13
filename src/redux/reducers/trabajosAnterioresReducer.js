import { ADD_TA, ADD_TRABAJO_ANTERIOR, CLEAN_IDS_TA, DELETE_TA_EMPLEADO, GET_TRABAJOS_ANTERIORES, SAVE_IDS_TA, TRABAJO_ANTERIOR_POR_EMPLEADO } from "../types/trabajosAnterioresTypes";

const initialState = {
    trabajosAnterioresPorEmpleado : "",
    trabajosAnteriores : "",
    ids : []
}

export const trabajosAnterioresReducer=(state = initialState, action)=>{
    const { type, payload } = action;

    switch(type){
        case GET_TRABAJOS_ANTERIORES : {
            return{
                ...state,
                trabajosAnteriores : payload
            }
        }
        case TRABAJO_ANTERIOR_POR_EMPLEADO : {
            return{
                ...state,
                trabajosAnterioresPorEmpleado : payload
            }
        }
        case ADD_TRABAJO_ANTERIOR : {
            return{
                ...state,
                trabajosAneriores : state.trabajosAnteriores.push(payload)
            }
        }
        case SAVE_IDS_TA : {
            return {
                ...state,
                ids : [...state.ids.push(payload)]
            }
        }
        case CLEAN_IDS_TA : {
            return{
                ...state,
                ids : state.ids = []
            }
        }
        case DELETE_TA_EMPLEADO : {
            return{
                ...state,
                trabajosAnteriores : state.trabajosAnteriores.filter((ta)=> ta.idTrabajoAnterior !== payload)
            }
        }
        default : return state
    }
}