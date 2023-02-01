import { GET_ESTADOS, GET_ESTUDIOS, GET_PAISES, GET_TIPOS_DNI } from "../types/fetchTypes"

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
export const getPaises=(payload)=>{
    return{
        type : GET_PAISES,
        payload
    }
}
export const getEstudios=(payload)=>{
    return{
        type : GET_ESTUDIOS,
        payload
    }
}