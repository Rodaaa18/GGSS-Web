import React from 'react'
import "../Home/NuevaVista.css";
import InputEfectivo from '../Inputs/InputEfectivo/InputEfectivo'
import InputIngreso from '../Inputs/InputIngreso/InputIngreso'


const IngresoContrato = ({ esquemas, onChange, formLiquidacion, disabled}) => {
return (
<>
    <div className="row  p-2 col"> 
        <div className='row'>
                <InputIngreso disabled={disabled} nameLabel="Ingresó:" nameInput="ingresoInput" nameInputDate="ingresoDateInput" valueDate={formLiquidacion?.ingresoDateInput && formLiquidacion?.ingresoDateInput} value={formLiquidacion?.ingresoInput && formLiquidacion?.ingresoInput} onChange={onChange} formLiquidacion={formLiquidacion} />
                <InputEfectivo disableds={disabled} nameLabel="Efectivo:" idInputCheck ="inputCheckEfectivo"idInputDate="inputDateEfectivo" idInputCheckAsigna="inputCheckAsigna" nameLabelAsigna="Asignar Esquema de Liquidación:" idSelect="selectOptionsId" esquemas={esquemas} propArrayOp="nombreEsquema" propArrayId="iDesquema" onChange={onChange} obligatorio={true} />
        </div>
    </div>
</>
)
}

export default IngresoContrato