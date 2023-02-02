import { GET_ESTADOS, GET_ESTADOS_CIVILES, GET_ESTUDIOS, GET_PAISES, GET_TIPOS_DNI } from "../types/fetchTypes";


const initialState = {
    tiposDocumento : "",
    estados : "",
    paises : "",
    estudios : "",
    estadosCiviles : ""
}
export const fetchReducer=(state = initialState, action)=>{
    const { type , payload } = action;

    switch(type){
        case GET_TIPOS_DNI : {
            return{
                ...state,
                tiposDocumento : payload
            }
        }
        case GET_ESTADOS : {
            return {
                ...state,
                estados : payload
            }
        }
        case GET_PAISES : {
            return {
                ...state,
                paises : payload
            }
        }
        case GET_ESTUDIOS : {
            return {
                ...state,
                estudios : payload
            }
        }
        case GET_ESTADOS_CIVILES : {
            return{
                ...state,
                estadosCiviles : payload
            }
        }
        default : return state;
    }
}