import React from 'react'
import { useEffect } from 'react'
import InputCbo from '../../../Inputs/InputCbo/InputCbo'
import InputDate from '../../../Inputs/InputDate/InputDate'
import InputForm from '../../../Inputs/InputForm/InputForm'


const PorPeriodo = ({valueId,propArrayOpFem, array, onChange,valueForm, checked, setChecked }) => {

    useEffect(()=>{
        setChecked(false)
      },[])

  return (
    <>
          <div className='row'>
              <div className='col-xl-4'>
                  <InputCbo 
                  display={false} 
                  onChange={onChange} 
                  value={valueForm?.inputCboAñosLicencia && valueForm?.inputCboAñosLicencia} 
                  idInput="inputCboAñosLicencia" 
                  valueId={valueId} 
                  propArrayOp={propArrayOpFem}
                  propArrayOpFem={propArrayOpFem} 
                  idSelected = {valueForm?.inputCboAñosLicencia && valueForm?.inputCboAñosLicencia }
                  array={array} 
                  nameLabel="Año:" 
                  nameButton="..." />
              </div>
              <div className='col-xl-4'>
                  <InputForm display={false} onChange={onChange} idInput="inputCantDiasDispLicencia" value={valueForm?.inputCantDiasDispLicencia && valueForm?.inputCantDiasDispLicencia} array={[]} nameLabel="Cant Días Disponibles:" nameButton="..." />
              </div>
              <div className='col-xl-4'>
                  <InputDate valueCheck={true} nameInput="Vencimiento" onChange={onChange} idInput="inputVencimientoLicencias" value={valueForm?.inputVencimientoLicencias && valueForm?.inputVencimientoLicencias} />
              </div>
          </div></>
            
  )
}

export default PorPeriodo