import { ADD_DETALLE_LIC, ADD_NEW_LICENCIA, DELETE_LICENCIA, DETALLE_SELECTED, GET_LIC_EMPLEADO, LICENCIA_SELECTED, OPTION_SELECTED, SAVE_IDS_LIC, UPDATE_LICENCIA } from "../types/licenciasTypes"

export const optionSelected=(payload)=>{
    return{
        type : OPTION_SELECTED,
        payload
    }
}
export const getLicenciaEmpleado=(payload)=>{
    return{
        type : GET_LIC_EMPLEADO,
        payload
    }
}
export const addDetalleLic=(payload)=>{
    return {
        type :  ADD_DETALLE_LIC,
        payload
    }
}
export const licenciaSelected=(payload)=>{
    return {
        type :  LICENCIA_SELECTED,
        payload
    }
}
export const detalleSelected=(payload)=>{
    return {
        type :  DETALLE_SELECTED,
        payload
    }
}
export const deleteLicencia=(payload)=>{
    return {
        type :  DELETE_LICENCIA,
        payload
    }
}
export const saveIdsLic=(payload)=>{
    return {
        type :  SAVE_IDS_LIC,
        payload
    }
}
export const updateLicencia=(payload)=>{
    return {
        type :  UPDATE_LICENCIA,
        payload
    }
}
export const addNewLicencia=(payload)=>{
    return {
        type :  ADD_NEW_LICENCIA,
        payload
    }
}