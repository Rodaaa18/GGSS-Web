import { ADD_DOMICILIO, DELETE_DOMICILIO, DOMICILIO_SELECTED, GET_DOMICILIOS, SAVE_ID_DOM } from "../types/domicilioTypes"

export const getDomicilios=(payload)=>{
    return{
        type : GET_DOMICILIOS,
        payload
    }
}
export const addDomicilio=(payload)=>{
    return{
        type : ADD_DOMICILIO,
        payload
    }
}
export const domicilioSelected=(payload)=>{
    return{
        type : DOMICILIO_SELECTED,
        payload
    }
}
export const deleteDomicilio=(payload)=>{
    return{
        type : DELETE_DOMICILIO,
        payload
    }
}
export const saveIdDom=(payload)=>{
    return{
        type : SAVE_ID_DOM,
        payload
    }
}