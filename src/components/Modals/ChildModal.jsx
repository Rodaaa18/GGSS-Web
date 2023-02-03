import React, { useState } from 'react'
import InputModal from '../Inputs/InputModal/InputModal';
import "./BasicModal.css"
const ChildModal = ({nameModalProp, disabled, array , propsModal, optionsInputs, transition, setTransition, handleClickClose,functionAdd, functionUpdate, functionDelete, valueItemModal, setValueItemModal, onChangeValues, modalValues, urlApi, bodyPetition, bodyUpdate,setModify, modify, idAModificar, disableModal, setDisableMOdal}) => {

    
  return (
    
    <section className={transition ? 'transitionClassUp' : ' transitionClassneDone '} >
    <div className='modalBodyClass p-2' >
        <div className="row p-2">
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <h3>{propsModal.nameModal}</h3>
                <button className='btn btn-outline-danger btn-sm buttonModal border border-dark' onClick={()=>{handleClickClose(nameModalProp); setTransition(false);}}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>            
        </div>
        <div className='row p-2 selectModal'>
            <div className='col-xl-6 border border-2 p-2 '>
                <select
                    className="form-select selectMenus p-0 m-0"
                    multiple
                    aria-label="multiple select example"
                    disabled={disabled}
                    
                    >
                    {array && array.map((op, i) => {
                        return (
                        <option
                            key={i}
                            value={op && op[propsModal.propArrayId]}
                            onClick={() => setValueItemModal(op)}  // si se rompe el abm comentar esta linea y descomentar la de abajo
                            //onClick={() => dispatch(dispatchGetID(op[propArrayId]))}
                        >
                            {op && op[propsModal.propArrayOp]}
                        </option>
                        );
                    })
                    }
                </select>
                <div className='d-flex flex-row justify-content-evenly align-items-center mt-1'>
                    <button className='btn btn-success' onClick={()=> {setDisableMOdal(false)}}>Agregar</button>
                    <button className='btn btn-warning' onClick={()=> {setModify(true);setDisableMOdal(false)}}>Modificar</button>
                    <button className='btn btn-danger' onClick={()=> functionDelete(urlApi, idAModificar)}>Eliminar</button>
                </div>
            </div>
            <div className='col-xl-6'>
                <div className='d-flex flex-column justify-content-start align-items-center'>
                    {
                        optionsInputs.map((option, index)=>{
                            return(
                                <InputModal
                                    disableModal={disableModal}
                                    key={index}
                                    placeholder={option.placeholder}
                                    nameLabel = {option.label}
                                    idInput={option.idInput}
                                    onChangeValues={onChangeValues}
                                    value={option.idInput === "masculino" ? modalValues?.masculino : modalValues?.femenino}
                                />
                            )
                        })
                    }
                </div>
                <div className='d-flex flex-row-reverse w-100 '>
                    <button className='btn btn-success m-1' onClick={()=>functionAdd(urlApi, bodyPetition, bodyUpdate, idAModificar)}>
                    Aceptar
                    </button>
                    <button className='btn btn-danger m-1'>
                    Cancelar
                    </button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default ChildModal