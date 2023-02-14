import React from 'react'
import { useEffect } from 'react'
import InputDate from '../../../Inputs/InputDate/InputDate'
import InputForm from '../../../Inputs/InputForm/InputForm'


const Prorroga = ({valueForm, onChange, checked, setChecked}) => {
  useEffect(()=>{
    setChecked(false)
  },[])
  return (
    <div className='row'>
        <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
            <InputDate nameInput="Nueva Fecha:" valueForm={valueForm} onChange={onChange} valueCheck={true} idInput="inputNuevaFechaLic" value={valueForm?.inputNuevaFechaLic && valueForm?.inputNuevaFechaLic} />
            <InputForm 
            nameLabel="N° Resolución" 
            valueForm={valueForm} 
            onChange={onChange} 
            value={
              valueForm?.inputNuevaResolucionLic && valueForm?.inputNuevaResolucionLic 
            }
            idInput="inputNuevaResolucionLic"
            />
        </div>
    </div>
  )
}

export default Prorroga