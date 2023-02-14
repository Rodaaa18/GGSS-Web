import { ADD_DATOSE_EMP, CLEAN_ID_DE, DATOS_EXTRAS_EMPLEADO, DELETE_DE_EMP, GET_DATOS_EXTRAS, GET_DE_SELECTED, SAVE_ID_DE } from "../types/datosExtrasTypes"

export const getDatosExtras=(payload)=>{
    return{
        type : GET_DATOS_EXTRAS,
        payload
    }
}
export const datosExtrasEmpleado=(payload)=>{
    return{
        type : DATOS_EXTRAS_EMPLEADO,
        payload
    }
}
export const saveIdDe=(payload)=>{
    return {
        type: SAVE_ID_DE,
        payload,
    }
}
export const cleanIdDe=(payload)=>{
    return {
        type: CLEAN_ID_DE,
        payload,
    }
}
export const addDatosExtraPorEmpleado=(payload)=>{
    
    return {
        type: ADD_DATOSE_EMP,
        payload,
    }
}
export const deleteDatoExtraEmpl=(payload)=>{
    return{
        type : DELETE_DE_EMP,
        payload
    }
}
export const getDatoExtraSelected=(payload)=>{
    return {
        type: GET_DE_SELECTED,
        payload,
    }
}