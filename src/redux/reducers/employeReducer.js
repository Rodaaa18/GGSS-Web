import { ADD_ONE_EMPLOYE, AXIOS_ERROR, AXIOS_SUCCESS, GET_EMPLEADOS, SET_LOADING } from "../types/employeTypes";

const initialState = {
    employes : "",
    employe : ""
}
export const employeReducer=( state = initialState, action)=>{
    const { type , payload } = action;

    switch(type){
        case SET_LOADING :
            return{
                loading : true,
                error: false,
                data : {}
            };
        case AXIOS_ERROR : 
            return{
                error: true,
                loading : false,
                data: {}
            } 
        case AXIOS_SUCCESS : 
            return{
                error: false,
                loading : false,
                data: payload
            }
        case GET_EMPLEADOS : {
            return{
                ...state,
                employes : payload
            }
        }
        case ADD_ONE_EMPLOYE: {
            
            return {
                ...state,
                employe : payload,
            }
        }
        default:
            return state;
    }
}