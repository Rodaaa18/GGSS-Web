import { ADD_ONE_EMPLOYE, AXIOS_ERROR, AXIOS_SUCCESS, CLEAN_EMPLOYE, GET_EMPLEADOS, TOTAL_EMPLOYES } from "../types/employeTypes"

export const axiosSuccess = (payload) =>{
    return {
        type : AXIOS_SUCCESS,
        payload,
    };
}
export const axiosError = (payload) =>{
    return {
        type : AXIOS_ERROR,
        payload,
    };
}
export const getEmpleados=(payload)=>{
    return{
        type : GET_EMPLEADOS,
        payload
    }
}
export const addOneEmploye = (payload) =>{
    return {
        type : ADD_ONE_EMPLOYE,
        payload,
    };
}
export const cleanEmploye=(payload)=>{
    return{
        type: CLEAN_EMPLOYE,
        payload
    }
}
export const totalEmployes=(payload)=>{
    return{
        type: TOTAL_EMPLOYES,
        payload
    }
}