import React, { useEffect, useState } from 'react'
import {  classesFormDPPagos,  inputButtonClasessParentesco } from '../../classes/classes'
import DatosCertificado from './DatosCertificadoOficio'
import IngresoContrato from './IngresoContrato'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputForm from '../Inputs/InputForm/InputForm'
import SindicatoLiquidacion from '../Inputs/SindicatoLiquidacion/SindicatoLiquidacion'
import axios from 'axios'

const Liquidacion = ({responses, setResponses, index}) => {
    const [ formLiquidacion, setFormLiquidacion ] = useState(responses["formLiquidacion"]);
    const [ combosForm , setCombosForm ] = useState({});
    const newState = {...combosForm};


    function onChangeValues(e, key){
        const newResponse = {...formLiquidacion};
        newResponse[key] = e;
        setFormLiquidacion({
          ...newResponse
        });
    }
    useEffect(() => {  
        setResponses({
          ...responses,
          formLiquidacion
        });    
    },[formLiquidacion]);

    const handleFetch = async (url, propState) => {        
            
            await axios
            .get(url)
            .then((res) => {
                newState[propState] = (res.data.result);            
            })
            .catch((err) => {
            
            });    
        };
    async function handleFetchComun(url, propState){
        await axios
            .get(url)
            .then((res) => {
            newState[propState] = (res.data);
            })
            .catch((err) => {
            
            });
        };
      
    useEffect(()=>{
        new Promise((resolve, reject)=>{
                resolve(
                    handleFetch("http://54.243.192.82/api/Empleadores", "empleadores"),
                    handleFetch("http://54.243.192.82/api/Convenios", "convenios"),
                    handleFetch("http://54.243.192.82/api/Categorias", "categorias"),
                    handleFetch("http://54.243.192.82/api/Agrupamientos", "agrupamientos"),
                    handleFetch("http://54.243.192.82/api/Cargos", "cargos"),
                    handleFetch("http://54.243.192.82/api/TareasDesempeñadas", "tareasDesempeñadas"),
                    handleFetch("http://54.243.192.82/api/ModosContratacion", "modosContratacion"),
                    handleFetch("http://54.243.192.82/api/ModosLiquidacion", "modosLiquidacion"),
                    handleFetch("http://54.243.192.82/api/CentrosDeCostos", "centrosDeCosto"),
                    handleFetchComun("http://54.243.192.82/api/SectoresDptos/0,%201", "sectores"),
                    handleFetch("http://54.243.192.82/api/ObrasSociales", "obrasSociales"),
                    handleFetch("http://54.243.192.82/api/FormasdePagos", "formasDePago"),
                    handleFetch("http://54.243.192.82/api/LugaresdePago", "lugaresDePago"),
                    handleFetch("http://54.243.192.82/api/Bancos", "bancos"),
                    handleFetchComun("http://54.243.192.82/api/Direcciones/DireccionesDatos/0,1", "direcciones"),
                    handleFetch("http://54.243.192.82/api/Sindicatos", "sindicatos"),
                    handleFetch("http://54.243.192.82/api/Esquemas", "esquemas"),
                    handleFetchComun("http://54.243.192.82/api/ConceptosDatos/0,1", "conceptos")
                    )
            }
            ).then(
            setCombosForm(newState)
        )
      },[]);
 console.log(combosForm)

  return (
    index === 3 && <div className={index === 3 ? "transitionClassUp" : "transitionClassneDone"}>
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
                                            array={combosForm?.empleadores}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="Empleador"
                                            placeholder="Empleador"
                                            propArrayOp="razonSocial"
                                            propIdOption="iDempleador"
                                            idInput="idEmpleador"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.convenios}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="Convenio"
                                            placeholder="Convenio"
                                            propArrayOp="convenio"
                                            propIdOption="iDconvenio"
                                            idInput="idConvenio"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.categorias}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="Categoria"
                                            placeholder="Categoria"
                                            propArrayOp="categoria"
                                            propIdOption="iDcategoria"
                                            idInput="idCategoria"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.agrupamientos}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="Agrupamiento"
                                            placeholder="Agrupamiento"
                                            propArrayOp="agrupamiento"
                                            propIdOption="idAgrupamiento"
                                            idInput="idAgrupamiento"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.cargos}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="Cargo"
                                            placeholder="Cargo"
                                            propArrayOp="nombreCargo"
                                            propIdOption="iDcargo"
                                            idInput="idCargo"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.tareasDesempeñadas}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="Tarea Des."
                                            placeholder="Tarea Des."
                                            propArrayOp="tareaDesempeñada"
                                            propIdOption="idTareaDesempeñada"
                                            idInput="idTareaDesempeñada"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.modosContratacion}                                                                           
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="M. Contratac"
                                            placeholder="M. Contratac"
                                            propArrayOp="modoContratacion"
                                            propIdOption="iDmodoContratacion"
                                            idInput="idModoContratacion"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.modosLiquidacion}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="M. Liquid."
                                            placeholder="M. Liquid."
                                            propArrayOp="modoLiquidacion"
                                            propIdOption="iDmodoLiquidacion"
                                            idInput="idModoLiquidacion"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.centrosDeCosto}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="Ctro Costo"
                                            placeholder="Ctro Costo"
                                            propArrayOp="centrodeCosto"
                                            propIdOption="idCentrodeCosto"
                                            idInput="idCentroCosto"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.sectores}
                                            onChange={onChangeValues}
                                            nameButton="..."
                                            nameLabel="Secretaria"
                                            placeholder="Secretaria"
                                            propArrayOp="sectorDpto"
                                            propIdOption="iDsectorDpto"
                                            idInput="idSecretariaSector"
                                        />
                                        <InputButtonLiquidacion
                                            clasess={inputButtonClasessParentesco}
                                            array={combosForm?.obrasSociales}
                                            onChange={onChangeValues}
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
                                            <aside action="" className='norder border-3 d-flex flex-column justify-content-center align-items-start w-100 p-2'>
                                            <InputButtonLiquidacion
                                                clasess={inputButtonClasessParentesco}
                                                array={combosForm?.formasDePago}
                                                onChange={onChangeValues}
                                                nameButton="..."
                                                nameLabel="Forma Pago"
                                                placeholder="Forma Pago"
                                                propArrayOp="nombreFormadePago"
                                                propIdOption="iDformadePago"
                                                idInput="idFormaPago"
                                            />
                                            <InputButtonLiquidacion
                                                clasess={inputButtonClasessParentesco}
                                                array={combosForm?.lugaresDePago}
                                                onChange={onChangeValues}
                                                nameButton="..."
                                                nameLabel="Lugar Pago"
                                                placeholder="Lugar Pago"
                                                propArrayOp="lugardePago"
                                                propIdOption="idLugardePago"
                                                idInput="idLugarPago"
                                            />
                                            <InputButtonLiquidacion
                                                clasess={inputButtonClasessParentesco}
                                                array={combosForm?.bancos}
                                                onChange={onChangeValues}
                                                nameButton="..."
                                                nameLabel="Banco"
                                                placeholder="Banco"
                                                propArrayOp="nombreBanco"
                                                propIdOption="idBanco"
                                                idInput="idBanco"
                                            />
                                             <InputForm
                                                clasess={classesFormDPPagos}
                                                onChange={onChangeValues}
                                                value={formLiquidacion?.nroCuenta}
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
                                                    <input onChange={(e)=> onChangeValues(e.target.checked, "tipoCuenta")}type="radio" name="tipoCuenta" id="tipoCuenta" className='radioClass' value={1} />
                                                    <label htmlFor="" className='labelInputRadio'> Cta Corriente</label>
                                                    <input onChange={(e)=> onChangeValues(e.target.checked, "tipoCuenta")}type="radio" name="tipoCuenta" id="tipoCuenta" className='radioClass' value={2} />
                                                </div>
                                            </div>
                                            <InputForm
                                                clasess={classesFormDPPagos}
                                                onChange={onChangeValues}
                                                value={formLiquidacion?.cbu}
                                                idInput="cbu"
                                                messageError="Solo puede contener números."
                                                placeHolder="C.B.U"
                                                nameLabel="C.B.U"
                                                numbers={true}
                                                obligatorio={true} 
                                            />
                                            <button className='btn btn-danger w-50'>
                                                Actualización Masiva
                                            </button>
                                            </aside>
                                        </fieldset>
                                            <InputButtonLiquidacion
                                                clasess={inputButtonClasessParentesco}
                                                array={combosForm?.direcciones}
                                                onChange={onChangeValues}
                                                nameButton="..."
                                                nameLabel="Direccion"
                                                placeholder="Direccion"
                                                propArrayOp="direccion"
                                                propIdOption="idDireccion"
                                                idInput="idDireccion"
                                            />
                                            <SindicatoLiquidacion 
                                            clasess={inputButtonClasessParentesco}
                                            nameLabel="Sindicato"
                                            array={combosForm?.sindicatos}
                                            porpArrayOp="nombreSindicato"
                                            propIdOption="idSindicato"
                                            />
                                    </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 mt-1'>
                                    <IngresoContrato esquemas={combosForm?.esquemas}/>
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