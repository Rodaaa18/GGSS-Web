import React from 'react'
import { classesFormDP, inputButtonClasessParentesco } from '../../classes/classes'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputForm from '../Inputs/InputForm/InputForm'
import TablaDomicilios from '../Tables/TablaDomicilios'

const Domicilio = () => {
    const columns = [
        "Predeterminado",
        "Calle",
        "Barrio",
        "Localidad",
        "Piso/Of/Dpto",
        "Provincia",
      ];
  return (
    <div className=''>
        {/* <fieldset className="border p-2">
            <legend className="float-none w-auto p-2 contenedorFieldSet">
                <i className="fs-5 bi-house "></i><span className="ms-1 d-none d-sm-inline colorFont">Domicilios</span>
            </legend> */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                >
                                Domicilios
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                            <div className="accordion-body">
            <form action="" className='norder border-3 d-flex flex-column justify-content-center align-items-start w-100'>
                        <div className='container-flex w-100'>
                            <div className='row'>
                                <div className='d-flex flex-row justify-content-start align-items-center'>
                                    <label htmlFor="">Predeterminado</label>
                                    <input className='ml-2' type="checkbox" name="" id="" />
                                </div>                                
                                <div className='col-xl-4 col-lg-12 col-md-12'>
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Calle"
                                        placeholder="Calle"
                                        propArrayOp="nombreObraSocial"
                                        propIdOption="iDobraSocial"
                                        idInput="idCalle"
                                    />
                                    <InputForm 
                                        clasess={classesFormDP}
                                        idInput="email"
                                        messageError="Solo puede contener números."
                                        placeHolder="Piso / Dpto"
                                        nameLabel="Piso / Dpto"
                                        numbers={true}
                                        obligatorio ={true}
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-12 col-md-12'>
                                    <InputForm 
                                        clasess={classesFormDP}
                                        idInput="email"
                                        messageError="Solo puede contener números."
                                        placeHolder="N° Calle"
                                        nameLabel="N° Calle"
                                        numbers={true}
                                        obligatorio ={true}
                                    />
                                </div> 
                                <div className='col-xl-4 col-lg-12 col-md-12'>
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Provincia"
                                        placeholder="Provincia"
                                        propArrayOp="nombreObraSocial"
                                        propIdOption="iDobraSocial"
                                        idInput="idProvincia"
                                    />
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Depto"
                                        placeholder="Departamento"
                                        propArrayOp="nombreObraSocial"
                                        propIdOption="iDobraSocial"
                                        idInput="idDepartamento"
                                    />
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Localidad"
                                        placeholder="Localidad"
                                        propArrayOp="nombreObraSocial"
                                        propIdOption="iDobraSocial"
                                        idInput="idLocalidad"
                                    />
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Barrio"
                                        placeholder="Barrio"
                                        propArrayOp="nombreObraSocial"
                                        propIdOption="iDobraSocial"
                                        idInput="idBarrio"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <TablaDomicilios columns={columns}/>
                                </div>

                            </div>
                        </div>
                    </form> 
                    </div> 
                    </div> 
                    </div> 
    </div>
  )
}

export default Domicilio