import React from 'react'
import "./InputIngreso.css";

const InputIngreso = ({nameLabel,nameInputDate, nameInput,  value, valueDate, onChange, disabled}) => {
 
  
  return (
    <div className='col-xl-12 d-flex fle-row justify-content-start align-items-center'>
        <label htmlFor="">{nameLabel}</label>
        <input disabled={disabled} type="date" onChange={(e)=> onChange(e.target.value, nameInputDate)} value={valueDate && valueDate} className='inputDates' name={nameInputDate} id={nameInputDate} />
        <input disabled={disabled} type="text" onChange={(e)=> onChange(e.target.value, nameInput)} value={value} className="textboxIngreso" name={nameInput} id={nameInput} />
    </div>
  )
}

export default InputIngreso