import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./InputButton.css";

const InputButton = ({nameButton, placeHolder, nameLabel, maxLeght, value, disabled, nameInput, id,onChange,funcionCuil,nroDocumento,genre, usaCuil,datosPersonalesValue,swal , clasess, obligatorio, inputId, idInput, cancelar, numbers,validateNumbers, validateLetters, idSelected, propIdOption, array, propArrayOp }) => {

  const [valor, setValor] = useState();
  const dispatch = useDispatch();
  


  useEffect(()=>{
    setValor(datosPersonalesValue)
  },[datosPersonalesValue])
  
  useEffect(()=>{
    
    setValor(value);
  },[value])

  return (
    clasess && <div className={clasess.classOne}>
    <div className={clasess.classTwo}>
      <label className={clasess.classThree} htmlFor={inputId}>
        {nameLabel}
      </label>
      {
        obligatorio ? 
        <select 
       name={idInput} 
       id={idInput} 
       disabled={disabled} 
       className={obligatorio ? `${clasess.classFour}` : `${clasess.classFour}`} 
       onChange={(e)=>onChange(e.target.value, idInput)} 
       value={value && value} >
        <option value="">Seleccionar</option>
        {
            array && array.map((valor,index)=>{
             
                return(
                  Number(idSelected) === Number(valor[propIdOption]) ? <option selected key={index} value={valor[propIdOption]}>{valor[propArrayOp]}</option> : 
                  <option key={index} value={valor[propIdOption]}>{valor[propArrayOp]}</option>
                )
            })
        }
       </select> :
      <select 
      name={idInput} 
      id={idInput} 
      disabled={disabled} 
      className={obligatorio ? `${clasess.classFour}` : `${clasess.classFour}`} 
      onChange={(e)=>onChange(e.target.value, idInput)} 
      value={value && value} >
       <option value="">Seleccionar</option>
       {
           array && array.map((valor,index)=>{
            
               return(
                 Number(idSelected) === Number(valor[propIdOption]) ? <option selected key={index} value={valor[propIdOption]}>{valor[propArrayOp]}</option> : 
                 <option key={index} value={valor[propIdOption]}>{valor[propArrayOp]}</option>
               )
           })
       }
      </select>
      }
    </div>
  </div> 
  );
};
export default InputButton;
