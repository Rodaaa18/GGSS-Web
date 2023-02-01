import React from 'react'
import { useSelector } from 'react-redux';
import { classesFormDP, inputButtonClasessParentesco, inputButtonClasessTextArea } from '../../classes/classes'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputForm from '../Inputs/InputForm/InputForm'
import TextArea from '../Inputs/TextArea/TextArea';
import "../Home/NuevaVista.css";
import TableBasic from '../Tables/TableBasic';

const Familias = ({index}) => {
    const tiposDocumento = useSelector((state)=> state.fetchState.tiposDocumento);
    const columns = [
        "Ape Nombre",
        "Tipo",
        "N°Documento",
        "Sexo",
        "Parentesco",
        "Nacimiento",
        "País Origen",
        "Nacionalidad",
        "Estudios",
        "Fecha Baja",
        "No Deducir",
        "Incluir Cuota",
        "Obs"
      ];
  return (
    index === 2 && <section className={index === 2 ? "transitionClassUp" : "transitionClassneDone"} >
    <div className='container'>
        <fieldset className="border p-2">
            <legend className="float-none w-auto p-2 contenedorFieldSet">
                <i className="fs-5 bi-person "></i><span className="ms-1 d-none d-sm-inline colorFont">Familia</span>
            </legend>
                <form action="" className='norder border-3 d-flex flex-column justify-content-center align-items-start w-100'>
                    <div className='container-flex w-100'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-12 col-md-12'>
                                <InputForm 
                                clasess={classesFormDP}
                                idInput="legajo"
                                messageError="Solo puede contener números."
                                placeHolder="Apellido y Nombres"
                                nameLabel="Apellido y Nombres"
                                numbers={true}
                                obligatorio ={true}
                                />
                                <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0'>
                                    <label htmlFor="" className='labelInput'>DNI</label>
                                    <select name="" className='formulario-input-InpButton-TipoDNI' id="">
                                        <option value="">Seleccionar</option>
                                        {
                                            tiposDocumento && tiposDocumento.map((item,i)=>{
                                                return(<option value={item.iDtipoDocumento}>{item.tipoDocumento}</option>)
                                            })
                                        }
                                    </select>
                                    <input type="text" className='formulario-input-Legajo-TipoDNI ' name="" id="" placeholder='N° Documento' />
                                </div>                                
                                <InputButtonLiquidacion
                                    clasess={inputButtonClasessParentesco}
                                    nameButton="..."
                                    nameLabel="Parentesco"
                                    placeholder="Parentesco"
                                    propArrayOp="nombreObraSocial"
                                    propIdOption="iDobraSocial"
                                    idInput="iDparentesco"
                                />
                                <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0 '>
                                    <label htmlFor="" className='labelInputDate'> Nacimiento</label>
                                    <input type="date" name="fechaNacimiento" id="fechaNacimiento" className='dateTimeClass'/>
                                    <div className='w-50'></div>
                                </div>
                                
                                <InputButtonLiquidacion
                                    clasess={inputButtonClasessParentesco}
                                    nameButton="..."
                                    nameLabel="Estudios"
                                    placeholder="Estudios"
                                    propArrayOp="nombreObraSocial"
                                    propIdOption="iDobraSocial"
                                    idInput="iDesudio"
                                />
                            </div>
                            <div className='col-xl-6 col-lg-12 col-md-12'>
                                <div className='d-flex flex-row justify-content-center align-items-center w-100 m-0 p-0 '>
                                    <label htmlFor="" className='labelInputDate'> Sexo</label>
                                    <div className='d-flex flex-row justify-content-between align-items-center w-100 m-0 p-0 '>
                                        <label htmlFor="" className='labelInputRadio'> Femenino</label>
                                        <input type="radio" name="fechaNacimiento" id="fechaNacimiento" className='radioClass' />
                                        <label htmlFor="" className='labelInputRadio'> Masculino</label>
                                        <input type="radio" name="fechaNacimiento" id="fechaNacimiento" className='radioClass' />
                                        <label htmlFor="" className='labelInputRadio'> Otro</label>
                                        <input type="radio" name="fechaNacimiento" id="fechaNacimiento" className='radioClass' />
                                    </div>
                                </div>
                                <InputButtonLiquidacion
                                    clasess={inputButtonClasessParentesco}
                                    nameButton="..."
                                    nameLabel="Pais O"
                                    placeholder="Pais O"
                                    propArrayOp="nombreObraSocial"
                                    propIdOption="iDobraSocial"
                                    idInput="iDPaisOrigen"
                                />
                                <InputButtonLiquidacion
                                    clasess={inputButtonClasessParentesco}
                                    nameButton="..."
                                    nameLabel="Nacionalidad"
                                    placeholder="Nacionalidad"
                                    propArrayOp="nombreObraSocial"
                                    propIdOption="iDobraSocial"
                                    idInput="idPais"
                                />
                                <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0 '>
                                    <label htmlFor="" className='labelInputDate'> Fecha Baja</label>
                                    <input type="date" name="fechaNacimiento" id="fechaNacimiento" className='dateTimeClass'/>
                                    <div className='w-50'></div>
                                </div>
                                <TextArea
                                    clasess={inputButtonClasessTextArea}
                                    nameLabel="Observ."
                                    idInput="observacionesEstudios"
                                    maxLength="255" 
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex flex-row justify-content-end align-items-center mt-2'>
                                <button className='btn btn-success' style={{width : "10%"}}>+</button>
                                <button className='btn btn-danger' style={{width : "10%"}}>-</button>
                            </div>
                            <div className='col-12 mt-1'>
                                <TableBasic 
                                    columns={columns}                                     
                                />
                            </div>
                        </div>
                    </div>
                    
                </form>
        </fieldset>
    </div>
    </section>
  )
}

export default Familias