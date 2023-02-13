import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { addTrabajoAnterior, deleteTaEmpleado, getTrabajosAnteriores, getTrabajosAnterioresPorEmpleados, saveIdsTa } from '../../redux/actions/trabajosAnterioresActions';
import InputTextTrabajos from '../Inputs/InputTextTrabajos/InputTextTrabajos';
import TableTrabajosAnteriores from '../Tables/TableTrabajosAnteriores';
import "./TrabajosAnteriores.css"

const TrabajosAnteriores = ({responses, setResponses, disable, index}) => {
    const [checked , setChecked] = useState(false);
    const [disabled , setDisabled] = useState(false);
    const [ modificar, setModificar ] = useState(false);
    const [ refetch, setRefetch ] = useState(false);
    const [ formTrabajosAnteriores, setFormTrabajosAnteriores ] = useState(responses["formTrabajosAnteriores"]);
    const [ trabajoSeleccionado, setTrabajoSeleccionado ] = useState({});
    const dispatch = useDispatch();
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
    const trabajosAnteriores = useSelector((state)=> state.trabajosAnterioresState.trabajosAnteriores);
    const columns = ["Seleccionar" , "Desde" , "Hasta", "Descripción"];
    //const trabajoAnterior = useSelector((state)=> state.trabajosAnteriores.trabajoAnterior);
    const trabajoAnterior = {};
    const urlTrabajosAnteriores = "http://54.243.192.82/api/TrabajosAnteriores"
    const urlTrabajosAnterioresPost = `http://54.243.192.82/api/TrabajosAnteriores?IdTrabajoAnterior=0&IdEmpleado=${empleadoSeleccionado?.iDempleado}&Desde=${formTrabajosAnteriores?.desde}&Hasta=${formTrabajosAnteriores?.hasta}&Actualidad=${formTrabajosAnteriores?.actualidad ? formTrabajosAnteriores?.actualidad : false}&Descripcion=${formTrabajosAnteriores?.descripcion}`;

    let trabajosAnterioresDelEmpleado = trabajosAnteriores && trabajosAnteriores.filter((trabajo)=> trabajo.idEmpleado === empleadoSeleccionado.iDempleado);
    const handleFetch=(url, action )=>{
        axios.get(url)
        .then((res)=>{
        dispatch( action(res.data.result));
        })
        .catch((err)=>{
        
        })
    }

    useEffect(()=>{
        handleFetch(urlTrabajosAnteriores, getTrabajosAnteriores);
    },[refetch,empleadoSeleccionado?.iDempleado])

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

    /* async function getTrabajosanterioresPorEmpleado(){
        if(empleadoSeleccionado){
            try{
                await axios.get(`http://54.243.192.82/api/TrabajosAnteriores/${empleadoSeleccionado?.iDempleado}`)
                .then((res)=>{
                    dispatch(getTrabajosAnterioresPorEmpleados(res.data));
                })
            }catch(err){
                return err;
            }
        }
        return;
    }

    useEffect(()=>{
        getTrabajosanterioresPorEmpleado();
    },[empleadoSeleccionado?.iDempleado, refetch]) */

    

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
    
    async function sendData(e,valueSended){
        e.preventDefault();
        
        if(valueSended){
            try{
                //LOADING
                await axios.post(urlTrabajosAnterioresPost)
                .then((res)=>{
                    if(res.status === 200){
                        //loading false
                        dispatch(addTrabajoAnterior(res.data)) //crear la accion para agregar un nuevo trabajo.
                        setRefetch(!refetch)
                        swal({
                            title: "Trabajo anterior Agregado",
                            text: "Trabajo anterior agregado con éxito",
                            icon: "success",
                        })
                    }
                })
            }catch(err){
                //error true
                swal({
                    title: "Error",
                    text: err.toString(),
                    icon: "error",
                })
            }
        }else{
           return dispatch(addTrabajoAnterior({...formTrabajosAnteriores, idEmpleado : empleadoSeleccionado?.iDempleado}));            
        }
        
    }
    const deleteTRabajoAnterior=(id)=>{
        dispatch(deleteTaEmpleado(id));
        dispatch(saveIdsTa(id));
    }
    console.log({...formTrabajosAnteriores, idEmpleado : empleadoSeleccionado?.iDempleado})
    
  return (
    index === 5 && <section className={index === 5 ? "transitionClassUp" : "transitionClassneDone"}>  
    <fieldset className="border p-2">
                <legend className="float-none w-auto p-2 contenedorFieldSet">
                    <i className="fs-5 bi-hammer "></i><span className="ms-1 d-none d-sm-inline colorFont">Trabajos Anteriores</span>
                </legend>    
        <div className="container-flex  ">
            
         <div className='row rowTrabajos'> 
            <div className='col-xl-4 cont-Desde w-100'>
                <div className='d-flex flex-row justify-content-start align-items-center mt-2 '>
                    <label htmlFor="desde" className='labelTrabajos'>Desde:</label>
                    <input 
                    type="date" 
                    //disabled={disable} 
                    onChange={(e)=> onChangeValues(e.target.value, "desde")} 
                    value={ modificar ? (formTrabajosAnteriores?.desde ? formTrabajosAnteriores?.desde : trabajoAnterior?.desde.substring(0, trabajoAnterior?.desde.length - 9)) : formTrabajosAnteriores?.desde && formTrabajosAnteriores?.desde} name="desde" id="desde" className='dateTrabajos '/>
                </div>
            </div>    
            </div>    
        
        <div className='row rowTrabajos'>
            <div className='col-xl-4 cont-Desde w-100'>
                <div className='d-flex flex-row justify-content-start align-items-center mt-2 '>
                    <label htmlFor="hasta" className='labelTrabajos'>Hasta:</label>
                    <input type="date"  onChange={(e)=> onChangeValues(e.target.value, "hasta")} disabled={disable ? disable : disabled} value={modificar ? (checked ? null : formTrabajosAnteriores?.hasta ? formTrabajosAnteriores?.hasta : trabajoAnterior?.hasta.substring(0, trabajoAnterior?.desde.length - 9)) : formTrabajosAnteriores?.hasta && formTrabajosAnteriores?.hasta} name="hasta" id="hasta" className='dateTrabajos2 '/>
                    <label htmlFor="idDateDesde" className='labelTrabajos2'>Hasta la Actualidad:</label>
                    <input type="checkbox" disabled={disable} checked={modificar ? (checked ? checked : trabajoAnterior?.actualidad) : checked && checked} name="actualidad" id="actualidad" className='checkTrabajos' 
                    onChange={(e)=>{ setChecked(!checked); onCheckActualidad(e.target.checked , "actualidad", "hasta")}} />
                    </div>
            </div>        
        </div>
        </div>
        <div className='row px-3'>
            <InputTextTrabajos disable={disable} nameLabel="Descripción" inputId="descripcion" onChange={onChangeValues} value={modificar ? (formTrabajosAnteriores?.descripcion ? formTrabajosAnteriores?.descripcion : trabajoAnterior?.descripcion) : formTrabajosAnteriores?.descripcion && formTrabajosAnteriores?.descripcion}            
            onSend={sendData} 
            onDelete={deleteTRabajoAnterior} id={trabajoSeleccionado?.idTrabajoAnterior} 
            />
        </div>
        <div className='row px-3'>
            <TableTrabajosAnteriores disable={disable} setTrabajoSeleccionado={setTrabajoSeleccionado} setModificar={setModificar} nameLabel="Historial:" 
            columns={columns} 
            array={trabajosAnterioresDelEmpleado}
            />
        </div>
        </fieldset>
    </section>
  )
}

export default TrabajosAnteriores