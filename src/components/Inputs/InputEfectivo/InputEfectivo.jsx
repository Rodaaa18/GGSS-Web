import React from 'react'
import { useState } from 'react';
import "./InputEfectivo.css";

const InputEfectivo = ({nameLabel, idInputCheck,idInputDate, idInputCheckAsigna, nameLabelAsigna, idSelect, esquemas, propArrayId, propArrayOp, onChange, obligatorio, disableds}) => {

  const [ disabled , setDisabled] = useState(true);
  const [ disabled2 , setDisabled2] = useState(true);
  const [ checked, setChecked] = useState(false);
  const [ checked2, setChecked2] = useState(false);



  function onChangeChecks(e,action ){
      setChecked(!checked)
      setDisabled(!disabled)
       
  }
  function onChangeCheck2s(e , action){
      setChecked2(!checked2)
      setDisabled2(!disabled2)
      
  }

  

  return (
    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center mt-2'>
        <label className='' htmlFor="">{nameLabel}</label>
        <input  disabled={disableds} checked={checked} className='checkEfectivo' type="checkbox" name={idInputCheck} id={idInputCheck}  />
        <input onChange={(e)=> onChange(e.target.value, idInputDate)} disabled={disabled} className='inputdates' type="date" name={idInputDate} id={idInputDate} />
        <input onChange={(e)=> {onChange(e.target.checked, idInputCheckAsigna);setChecked2(!checked2); setDisabled2(!disabled2)}} disabled={disableds} className=' checkAsigna' type="checkbox" name={idInputCheckAsigna} id={idInputCheckAsigna} checked={checked2}  />
        <label className='labelAsigna' htmlFor="">{nameLabelAsigna}</label>
        <select className={obligatorio ? 'selectAsigna obligatorio' : 'selectAsigna'} disabled={disabled2} onChange={(e)=> onChange(e.target.value, idSelect)} name={idSelect} id={idSelect}>
          <option value="">Seleccionar</option>
          {
            esquemas && esquemas.map((op, index)=>{
              return(
                  <option value={op[propArrayId]}>{op[propArrayOp]}</option>
              )
            })
          }
        </select>
    </div>
  )
}

export default InputEfectivo