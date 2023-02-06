import React, { useState } from 'react'
import { inputButtonClasessDocumentacion } from '../../classes/classes';
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar';
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion';
import InputDate from '../Inputs/InputDate/InputDate';
import InputDateDocs from '../Inputs/InputDateDocs/InputDateDocs';
import TextArea from '../Inputs/TextArea/TextArea';
import TableBasic1 from '../Tables/TableBasic1';
import "./Documentacion.css";


const Documentacion = ({disable, index, responses, setResponses}) => {
    const [ formDocumentacion, setFormDocumentacion ] = useState(responses["formDocumentacion"]);
    
  return (
    index === 7 && 
    <section className={index === 7 ? "transitionClassUp" : "transitionClassneDone"}>
    <div className='container'>  
    <fieldset className="border p-2">
            <legend className="float-none w-auto p-2 contenedorFieldSet">
                <i className="fs-5 bi-folder2-open "></i><span className="ms-1 d-none d-sm-inline colorFont">Documentacion</span>
            </legend>      
        <div className='row'>
            <div className='col-xl-12'>
                <InputDateDocs 
                nameInput="Fecha Presentación" 
                idInput="inputDatePresentacion" 
                display={false} 
                //onChange={onChangeValues} 
                //disabled={disable} 
                //value={formDocumentacion?.inputDatePresentacion && formDocumentacion?.inputDatePresentacion} 
                />
            </div>
            <div className='col-xl-12'>
                <InputDate 
                disabled={disable} 
                nameInput="Fecha Vencimiento" 
                //disable={disableI} 
                //setDisable={setDisableI} 
                idInput="inputDateVencimiento" 
                display={true}  
                //onChange={onChangeValues} 
                //actionReset={getInputValue} 
                //value={formDocumentacion?.inputDateVencimiento && formDocumentacion?.inputDateVencimiento} 
                //valueCheck={formDocumentacion?.inputCheckDocusDate && formDocumentacion?.inputCheckDocusDate} 
                idInputCheck="inputCheckDocusDate" />
            </div>
            <div className='col-xl-12'>
                <InputButtonLiquidacion
                    clasess={inputButtonClasessDocumentacion}
                    // nameButton="..."
                    nameLabel="Documentación"
                    placeholder="Documentación"
                    //array={documentaciones && documentaciones}
                    propArrayOp="documentacion1"
                    propIdOption="idDocumentacion"
                    idInput="inputSelectDocumentacion"
                    //onChange={onChangeValues}
                    //value={formDocumentacion?.inputSelectDocumentacion && formDocumentacion?.inputSelectDocumentacion}
                    disabled={disable}
                />
            </div>
            <div className='col-xl-12'>
                <TextArea 
                inputName="Observaciones " 
                //onChange={onChangeValues} 
                idInput="textAreaDocumentacion" 
                //value={formDocumentacion?.textAreaDocumentacion && formDocumentacion?.textAreaDocumentacion} 
                disabled={disable} />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <CheckLabel 
                idInput="inputCheckLiquidacion" 
                nameLabel="Se tiene en cuenta en la Liquidación (Sólo si se cumplen las condiciones necesarias)"  
                //onChange={onChangeValues} 
                //value={formDocumentacion?.inputCheckLiquidacion && formDocumentacion?.inputCheckLiquidacion} 
                disabled={disable} 
                />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <CheckLabel 
                idInput="inputIncluirCuotaAlim" 
                nameLabel="Incluir en cuota Alimentaria"  
                //onChange={onChangeValues} 
                //value={formDocumentacion?.inputIncluirCuotaAlim && formDocumentacion?.inputIncluirCuotaAlim}
                disabled={disable} 
                />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <ButtonCancelarAceptar 
                //idElimiar={documentacionSeleccionada.idEmpleadoDocumentacion && documentacionSeleccionada.idEmpleadoDocumentacion} 
                cancelar="-" 
                aceptar="+" 
                //functionSend={sendDataDoc} 
                //functionDelete={deleteData} 
                disabled={disable} 
                />
                <TableBasic1 
                //refetch={refetch} 
                //setRefetch={setRefectch} 
                //columns={columns} 
                //value={documentacionDelEmpleado}  
                //documentaciones={documentaciones} 
                disabled={disable} 
                />
            </div>
        </div>
        </fieldset>
    </div>
    </section>
  )
}

export default Documentacion