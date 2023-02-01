import React from 'react'
import { classesFormDPPagos } from '../../classes/classes';
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import InputForm from '../Inputs/InputForm/InputForm';



const DatosCertificado = ({nameLabel, onChange, formLiquidacion, disabled}) => {
  
  
  return (
   <>
   <div className="row  p-2 mt-1">
            <label htmlFor="">{nameLabel}</label> 
          <div className='col  d-flex flex-row justify-content-start align-items-center'>
            <InputForm 
              clasess={classesFormDPPagos}
              nameLabel="Total Remuneración: " idInput="inputTotalRemu" nameInput="inputTotalRemu" onChange={onChange} value={formLiquidacion?.inputTotalRemu && formLiquidacion?.inputTotalRemu}  disabled={disabled}/>
            <InputForm 
            clasess={classesFormDPPagos}
              nameLabel="Total Neto: " idInput="inputTotalNeto" nameInput="inputTotalNeto" onChange={onChange} value={formLiquidacion?.inputTotalNeto && formLiquidacion?.inputTotalNeto}  disabled={disabled}/>     
          </div>
          <div className='col'>
            <CheckLabel nameLabel="Tiene Embargos" idInput="inputCheckEmbargo" onChange={onChange}  value={formLiquidacion?.inputCheckEmbargo && formLiquidacion?.inputCheckEmbargo} disabled={disabled}/>

            <CheckLabel nameLabel="Tiene Sumario Administrativos" idInput="inputCheckSumAdministrativo" onChange={onChange} value={formLiquidacion?.inputCheckSumAdministrativo && formLiquidacion?.inputCheckSumAdministrativo}disabled={disabled}  />
            
            <CheckLabel nameLabel="Tiene Licencia Sin Goce de Haberes" idInput="inputCheckLicSinGoce" onChange={onChange}  value={formLiquidacion?.inputCheckLicSinGoce && formLiquidacion?.inputCheckLicSinGoce}disabled={disabled} />
        
          </div>
    </div>
</>
)
}

export default DatosCertificado;