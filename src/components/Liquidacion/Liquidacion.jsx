import React from 'react'
import { classesFormDP, classesFormDPPagos, inputButtonClasessEmpleador, inputButtonClasessParentesco, inputButtonClasessParentescoEmpleador } from '../../classes/classes'
import DatosCertificado from './DatosCertificadoOficio'
import IngresoContrato from './IngresoContrato'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputForm from '../Inputs/InputForm/InputForm'
import SindicatoLiquidacion from '../Inputs/SindicatoLiquidacion/SindicatoLiquidacion'

const Liquidacion = () => {
  return (
    <div>
        <fieldset className="border p-2">
            <legend className="float-none w-auto p-2 contenedorFieldSet">
                <i className="fs-5 bi-house "></i><span className="ms-1 d-none d-sm-inline colorFont">Liquidacion</span>
            </legend>
            <form action="" className='norder border-3 d-flex flex-column justify-content-center align-items-start w-100'>
                        <div className='container-flex w-100'>                               
                                <div className='row'>                                                               
                                    <div className='col-xl-6 col-lg-12 col-md-12'>
                                    <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Empleador"
                                            placeholder="Empleador"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idEmpleador"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Convenio"
                                            placeholder="Convenio"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idConvenio"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Categoria"
                                            placeholder="Categoria"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idCategoria"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Agrupamiento"
                                            placeholder="Agrupamiento"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idAgrupamiento"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Cargo"
                                            placeholder="Cargo"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idCargo"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Tarea Des."
                                            placeholder="Tarea Des."
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idTareaDesempeñada"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="M. Contratac"
                                            placeholder="M. Contratac"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idModoContratacion"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="M. Liquid."
                                            placeholder="M. Liquid."
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idModoLiquidacion"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Ctro Costo"
                                            placeholder="Ctro Costo"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idCentroCosto"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Secretaria"
                                            placeholder="Secretaria"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idSecretariaSector"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            nameButton="..."
                                            nameLabel="Obra Social"
                                            placeholder="Obra Social"
                                            propArrayOp="nombreObraSocial"
                                            propIdOption="iDobraSocial"
                                            idInput="idObraSocial"
                                        />
                                    </div> 
                                    <div className='col-xl-6 col-lg-12 col-md-12'>
                                        <fieldset className="border">
                                            <legend className="float-none w-auto  contenedorFieldSet">
                                                <i className="fs-5 bi-info-circle "></i><span className=" d-none d-sm-inline colorFont">Info Pagos</span>
                                            </legend>
                                            <form action="" className='norder border-3 d-flex flex-column justify-content-center align-items-start w-100 p-2'>
                                            <InputButtonLiquidacion
                                                clasess={inputButtonClasessParentesco}
                                                nameButton="..."
                                                nameLabel="Forma Pago"
                                                placeholder="Forma Pago"
                                                propArrayOp="nombreObraSocial"
                                                propIdOption="iDobraSocial"
                                                idInput="idFormaPago"
                                            />
                                            <InputButtonLiquidacion
                                                clasess={inputButtonClasessParentesco}
                                                nameButton="..."
                                                nameLabel="Lugar Pago"
                                                placeholder="Lugar Pago"
                                                propArrayOp="nombreObraSocial"
                                                propIdOption="iDobraSocial"
                                                idInput="idLugarPago"
                                            />
                                            <InputButtonLiquidacion
                                                clasess={inputButtonClasessParentesco}
                                                nameButton="..."
                                                nameLabel="Banco"
                                                placeholder="Banco"
                                                propArrayOp="nombreObraSocial"
                                                propIdOption="iDobraSocial"
                                                idInput="idBanco"
                                            />
                                             <InputForm
                                                clasess={classesFormDPPagos}
                                                idInput="nroCuenta"
                                                messageError="Solo puede contener números."
                                                placeHolder="N° Cuenta"
                                                nameLabel="N° Cuenta"
                                                numbers={true}
                                                obligatorio={true} 
                                            />
                                            <div className='d-flex flex-row justify-content-center align-items-center w-100 m-0 p-0 '>
                                                <label htmlFor="" className='labelInputDate'> Tipo</label>
                                                <div className='d-flex flex-row justify-content-between align-items-center w-100 m-0 p-0 '>
                                                    <label htmlFor="" className='labelInputRadio'> Caja Ahorro</label>
                                                    <input type="radio" name="fechaNacimiento" id="fechaNacimiento" className='radioClass' />
                                                    <label htmlFor="" className='labelInputRadio'> Cta Corriente</label>
                                                    <input type="radio" name="fechaNacimiento" id="fechaNacimiento" className='radioClass' />
                                                </div>
                                            </div>
                                            <InputForm
                                                clasess={classesFormDPPagos}
                                                idInput="nroCuenta"
                                                messageError="Solo puede contener números."
                                                placeHolder="C.B.U"
                                                nameLabel="C.B.U"
                                                numbers={true}
                                                obligatorio={true} 
                                            />
                                            <button className='btn btn-danger w-50'>
                                                Actualización Masiva
                                            </button>
                                            </form>
                                        </fieldset>
                                            <InputButtonLiquidacion
                                                clasess={inputButtonClasessParentesco}
                                                nameButton="..."
                                                nameLabel="Direccion"
                                                placeholder="Direccion"
                                                propArrayOp="nombreObraSocial"
                                                propIdOption="iDobraSocial"
                                                idInput="idDireccion"
                                            />
                                            <SindicatoLiquidacion 
                                            clasess={inputButtonClasessParentesco}
                                            nameLabel="Sindicato"
                                            array={[]}
                                            />
                                    </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 mt-1'>
                                    <IngresoContrato />
                                </div>                                
                            </div>
                            <div className='row'>
                                <div className='col-12 mt-1'>
                                    <DatosCertificado />
                                </div>                                
                            </div>
                            <div className='row'>
                                <div className='col-12 mt-1 d-flex flex-row justify-content-end alig-items-center'>
                                    <button className='btn btn-success' >Aceptar</button>
                                    <button className='btn btn-danger' >Cancelar</button>
                                </div>                                
                            </div>
                        </div>
                    </form> 
        </fieldset>
    </div>
  )
}

export default Liquidacion