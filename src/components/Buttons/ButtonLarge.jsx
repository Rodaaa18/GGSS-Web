import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';
import "./Buttons.css"

const ButtonLarge = ({color, align, tamaño, justyfy, nameButton, url, empleadoUno}) => {

  const [urls , setUrls] = useState("");
  
  const urlValidate=(url, empleado)=>{
    if(empleado){
      return setUrls(url);
    }
    return swal({
      title: "Error",
      text: "Debe seleccionar un empleado",
      icon: "error",
    })
  }

  return (
        empleadoUno?.iDempleado !== undefined ?
        <a href={url} rel="noreferrer"  className={`btn btn-${color} btn-${tamaño} d-flex justify-content-${justyfy} align-items-${align} newClass`}>
          {nameButton}
        </a> : <button onClick={()=> swal({
      title: "Error",
      text: "Debe seleccionar un empleado",
      icon: "error",
    })}  className={`btn btn-${color} btn-${tamaño} d-flex justify-content-${justyfy} align-items-${align} newClass`}>
          {nameButton}
        </button>
    
  )
}

export default ButtonLarge