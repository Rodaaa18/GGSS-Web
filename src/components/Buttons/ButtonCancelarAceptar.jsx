import "./Buttons.css"
const ButtonCancelarAceptar = ({cancelar, aceptar, disabled,functionSend,functionDelete, idElimiar, refetch, setRefectch}) => {

  
  return (
    <div className="d-flex flex-row">
         <div className='form__grupo__icons d-flex flex-row-reverse w-100 '>
            <button className='btn btn-danger  btnTablaDom'disabled={disabled}
                    onClick={(e)=>functionDelete(idElimiar)}>{cancelar}</button>
                    
            <button className='btn btn-success btnTablaDom ml-2'disabled={disabled} onClick={functionSend}
                    
                    >{aceptar}</button>
        </div>
    </div>
  )
}

export default ButtonCancelarAceptar;