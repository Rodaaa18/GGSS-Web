import React, { useState } from 'react'
import { useEffect } from 'react';
import InputDate from '../../../Inputs/InputDate/InputDate';
import "./Childs.css";


const FechaSuspencion = ({valueForm, onChange, setCheckeds}) => {
  const [checked, setChecked] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(()=>{
    setCheckeds(false)
  },[])

  return (
    <div className='row'>
        <div className='col-xl-12'>
            <InputDate 
              disabled={disable} 
              nameInput="Fecha Suspención:" 
              onChange={onChange} 
              valueCheck={true} 
              idInput="inputDateSuspLic" 
              value={checked ? "" : valueForm?.inputDateSuspLic && valueForm?.inputDateSuspLic}
            />
            <div className='d-flex flex-row justify-content-start align-items-center'>
                <div className='space'/>
                <input type="checkbox" checked={checked} className='mt-1' name="inputQuitaSusp" id="inputQuitaSusp" onChange={(e)=>{ setDisable(!disable); setChecked(!checked); onChange(e.target.checked, "inputQuitaSusp")}} />
                <label htmlFor="inputQuitaSusp">Quitar Fecha de Suspensión</label>
            </div>
        </div>
    </div>
  )
}

export default FechaSuspencion