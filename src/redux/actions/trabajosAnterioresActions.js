import { ADD_TA, ADD_TRABAJO_ANTERIOR, CLEAN_IDS_TA, DELETE_TA_EMPLEADO, GET_TRABAJOS_ANTERIORES, SAVE_IDS_TA, TRABAJO_ANTERIOR_POR_EMPLEADO } from "../types/trabajosAnterioresTypes"

export const getTrabajosAnterioresPorEmpleados=(payload)=>{
    return{
        type: TRABAJO_ANTERIOR_POR_EMPLEADO,
        payload
    }
}
export const addTrabajoAnterior=(payload)=>{
    return{
        type: ADD_TRABAJO_ANTERIOR,
        payload
    }
}
export const getTrabajosAnteriores=(payload)=>{
    return{
        type: GET_TRABAJOS_ANTERIORES,
        payload
    }
}
export const saveIdsTa=(payload)=>{
    return{
        type: SAVE_IDS_TA,
        payload
    }
}
export const cleanIdsTa=(payload)=>{
    return {
        type: CLEAN_IDS_TA,
        payload
    }
}
export const deleteTaEmpleado=(payload)=>{
    return{
        type : DELETE_TA_EMPLEADO,
        payload
    }
}
