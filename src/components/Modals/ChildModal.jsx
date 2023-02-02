import React from 'react'
import InputModal from '../Inputs/InputModal/InputModal';
import "./BasicModal.css"
const ChildModal = ({onClose, disabled, array , propsModal, optionsInputs, transition, setTransition}) => {
  return (
    <section className={transition ? 'transitionClassUp' : ' transitionClassneDone '} >
    <div className='modalBodyClass p-2' >
        <div className="row p-2">
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <h3>{propsModal.nameModal}</h3>
                <button className='btn btn-outline-danger btn-sm buttonModal border border-dark' onClick={()=>{onClose(); setTransition(false);}}>
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
                            // onClick={() => onSelect(action, op)}  // si se rompe el abm comentar esta linea y descomentar la de abajo
                            //onClick={() => dispatch(dispatchGetID(op[propArrayId]))}
                        >
                            {op && op[propsModal.propArrayOp]}
                        </option>
                        );
                    })
                    }
                </select>
                <div className='d-flex flex-row justify-content-evenly align-items-center mt-1'>
                    <button className='btn btn-success'>Agregar</button>
                    <button className='btn btn-warning'>Modificar</button>
                    <button className='btn btn-danger'>Eliminar</button>
                </div>
            </div>
            <div className='col-xl-6'>
                <div className='d-flex flex-column justify-content-start align-items-center'>
                    {
                        optionsInputs.map((option, index)=>{
                            return(
                                <InputModal
                                    key={index}
                                    placeholder={option.placeholder}
                                    nameLabel = {option.label}
                                    idInput={option.idInput}
                                    
                                />
                            )
                        })
                    }
                </div>
                <div className='d-flex flex-row-reverse w-100 '>
                    <button className='btn btn-success m-1 mr-2'>
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