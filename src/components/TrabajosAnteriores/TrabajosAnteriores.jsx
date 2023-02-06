import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InputTextTrabajos from '../Inputs/InputTextTrabajos/InputTextTrabajos';
import TableTrabajosAnteriores from '../Tables/TableTrabajosAnteriores';
import "./TrabajosAnteriores.css"

const TrabajosAnteriores = ({responses, setResponses, disable, index}) => {
    const [checked , setChecked] = useState(false);
    const [disabled , setDisabled] = useState(false);
    const [ modificar, setModificar ] = useState(false);
    const [ formTrabajosAnteriores, setFormTrabajosAnteriores ] = useState(responses["formTrabajosAnteriores"]);
    const dispatch = useDispatch();
    const columns = ["Seleccionar" , "Desde" , "Hasta", "Descripción"];
    //const trabajoAnterior = useSelector((state)=> state.trabajosAnteriores.trabajoAnterior);
    const trabajoAnterior = {};

    const handleFetch=(url, action )=>{
   
        axios.get(url)
        .then((res)=>{
        dispatch( action(res.data.result));
        })
        .catch((err)=>{
        
        })
    }
    
    function onChangeValues(e, key){
        const newResponse = {...formTrabajosAnteriores};
        newResponse[key] = e;
        setFormTrabajosAnteriores({
            ...newResponse
        });
    };


    useEffect(() => {
    setResponses({
        ...responses,
        formTrabajosAnteriores
    });      
},[formTrabajosAnteriores]);
const onCheckActualidad=(e, key, idValues)=>{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    if(!checked){
        setDisabled(true);
        const newRespons = {...formTrabajosAnteriores}
        newRespons[idValues] = "";
        newRespons[key] = e;
        setFormTrabajosAnteriores({
            ...newRespons
        });
        return;
    }
    const newRespons = {...formTrabajosAnteriores}
    setDisabled(false);
    newRespons[key] = e;
        setFormTrabajosAnteriores({
            ...newRespons
        });
        return;
    }
  return (
    index === 5 && <section className={index === 5 ? "transitionClassUp" : "transitionClassneDone"}>  
    <fieldset className="border p-2">
                <legend className="float-none w-auto p-2 contenedorFieldSet">
                    <i className="fs-5 bi-hammer "></i><span className="ms-1 d-none d-sm-inline colorFont">Trabajos Anteriores</span>
                </legend>    
        <div className="container-flex  ">
            
        {/* <div className='row '> */}
            <div className='col-xl-4 cont-Desde'>
                <div className='d-flex flex-row justify-content-start align-items-center mt-2 '>
                    <label htmlFor="idDateDesde">Desde:</label>
                    <input 
                    type="date" 
                    //disabled={disable} 
                    onChange={(e)=> onChangeValues(e.target.value, "idDateDesde")} 
                    value={ modificar ? (formTrabajosAnteriores?.idDateDesde ? formTrabajosAnteriores?.idDateDesde : trabajoAnterior?.desde.substring(0, trabajoAnterior?.desde.length - 9)) : formTrabajosAnteriores?.idDateDesde && formTrabajosAnteriores?.idDateDesde} name="idDateDesde" id="idDateDesde" className='dateTrabajos '/>
                </div>
            </div>        
        </div>
        <div className='row px-3'>
            <div className='col-xl-4'>
                <div className='d-flex flex-row justify-content-start align-items-center mt-2 '>
                    <label htmlFor="idDateDesde">Hasta:</label>
                    <input type="date"  onChange={(e)=> onChangeValues(e.target.value, "idDateHasta")} disabled={disable ? disable : disabled} value={modificar ? (checked ? null : formTrabajosAnteriores?.idDateHasta ? formTrabajosAnteriores?.idDateHasta : trabajoAnterior?.hasta.substring(0, trabajoAnterior?.desde.length - 9)) : formTrabajosAnteriores?.idDateHasta && formTrabajosAnteriores?.idDateHasta} name="idDateHasta" id="idDateHasta" className='dateTrabajos2 '/>
                    <input type="checkbox" disabled={disable} checked={modificar ? (checked ? checked : trabajoAnterior?.actualidad) : checked && checked} name="idCheckTrabajos" id="idCheckTrabajos" className='checkTrabajos' 
                    onChange={(e)=>{ setChecked(!checked); onCheckActualidad(e.target.checked , "idCheckTrabajos", "idDateHasta")}} />
                    <label htmlFor="idDateDesde" className='labelTrabajos'>Hasta la Actualidad:</label>
                </div>
            </div>        
        </div>
        <div className='row px-3'>
            <InputTextTrabajos disable={disable} nameLabel="Descripción" inputId="idDescripcionTrabajos" onChange={onChangeValues} value={modificar ? (formTrabajosAnteriores?.idDescripcionTrabajos ? formTrabajosAnteriores?.idDescripcionTrabajos : trabajoAnterior?.descripcion) : formTrabajosAnteriores?.idDescripcionTrabajos && formTrabajosAnteriores?.idDescripcionTrabajos}            
            //onSend={sendData} 
            //onDelete={deleteTRabajoAnterior} id={valueIdTrabajoAnterior} 
            />
        </div>
        <div className='row px-3'>
            <TableTrabajosAnteriores disable={disable} setModificar={setModificar} nameLabel="Historial:" 
            columns={columns} 
            //array={trabajosAnterioresDelEmpleado}
            />
        </div>
        </fieldset>
    </section>
  )
}

export default TrabajosAnteriores