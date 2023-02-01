import { GET_ESTADOS, GET_TIPOS_DNI } from "../types/fetchTypes"

export const getTiposDni=(payload)=>{
    return{
        type : GET_TIPOS_DNI,
        payload
    }
}
export const getEstados=(payload)=>{
    return{
        type : GET_ESTADOS,
        payload
    }
}