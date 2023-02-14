import { GET_ESTADOS, GET_ESTADOS_CIVILES, GET_ESTUDIOS, GET_PAISES, GET_TIPOS_DNI, REFETCH } from "../types/fetchTypes"

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
export const getEstadosCiviles=(payload)=>{
    return{
        type : GET_ESTADOS_CIVILES,
        payload
    }
}
export const setRefetch=(payload)=>{
    return{
        type : REFETCH,
        payload
    }
}