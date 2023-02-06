import { CLEAN_IDS_DOC, DELETE_DOC_EMPLEADO, GET_DOCUMENTACIONES, GET_DOC_EMPLEADO, SAVE_IDS } from "../types/documentacionTypes"

export const getDocumentaciones=(payload)=>{
    return{
        type : GET_DOCUMENTACIONES,
        payload
    }
}
export const getDocumentacionEmpleado=(payload)=>{
    return{
        type : GET_DOC_EMPLEADO,
        payload
    }
}
export const saveIds=(payload)=>{
    return{
        type: SAVE_IDS,
        payload
    }
}
export const cleanIdsDoc=(payload)=>{
    return {
        type: CLEAN_IDS_DOC,
        payload
    }
}
export const deleteDocuEmpleado=(payload)=>{
    return{
        type : DELETE_DOC_EMPLEADO,
        payload
    }
}