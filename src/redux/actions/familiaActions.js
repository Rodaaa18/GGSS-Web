import { CLEAN_ID_FAM, DELETE_FAMILIAR, FAMILIAR_SELECTED, GET_FAMILIARES, GET_FAMILIARES_EMPLEADOS, SAVE_IDS_FAM } from "../types/familiaTypes"

export const familiarSelected=(payload)=>{
    return{
        type : FAMILIAR_SELECTED,
        payload
    }
}
export const getFamiliares=(payload)=>{
    return{
        type : GET_FAMILIARES,
        payload
    }
}
export const deleteFamiliar=(payload)=>{
    return{
        type : DELETE_FAMILIAR,
        payload
    }
}
export const saveIdsFam=(payload)=>{
    return{
        type : SAVE_IDS_FAM,
        payload
    }
}
export const getFamiliaresEmpleado=(payload)=>{
    return{
        type : GET_FAMILIARES_EMPLEADOS,
        payload
    }
}
export const cleanIdFam=(payload)=>{
    return{
        type : CLEAN_ID_FAM,
        payload
    }
}