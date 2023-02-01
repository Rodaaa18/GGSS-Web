import { GET_ESTADOS, GET_TIPOS_DNI } from "../types/fetchTypes";


const initialState = {
    tiposDocumento : "",
    estados : ""
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
        default : return state;
    }
}