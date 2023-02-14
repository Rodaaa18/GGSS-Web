import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { inputButtonClasessDocumentacion } from '../../classes/classes';
import { deleteDocuEmpleado, getDocumentacionEmpleado, getDocumentaciones, saveIds } from '../../redux/actions/documentacionesActions';
import { setRefetch } from '../../redux/actions/fetchActions';
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
    const dispatch = useDispatch();
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
    const documentacion = useSelector((state)=> state.documentacionState.documentaciones);
    const documentacionDelEmpleado = useSelector((state)=> state.documentacionState.documentacionDelEmpleado);
    const refetch = useSelector((state)=> state.fetchState.refetch);
    const [ documentacionSeleccionada, setDocumentacionSeleccionada ] = useState({});
    const columns = ["Seleccionar" ,"Fecha", "Vencimiento", "Documento", "Liq", "Observaciones", "Incluir Cuota"]
    const handleFetch = async (url, action, comun) => {   
        if(comun){
            await
            axios
            .get(url)
            .then((res) => {
                dispatch(action(res.data));            
            })
            .catch((err) => {
             
            });
            return;
        }
        await
        axios
        .get(url)
        .then((res) => {
            dispatch(action(res.data.result));            
        })
        .catch((err) => {
           
        });    
    };
    useEffect(()=>{       
        handleFetch("http://54.243.192.82/api/Documentacion", getDocumentaciones)  
        handleFetch(`http://54.243.192.82/api/EmpleadosDocumentacion/${empleadoSeleccionado?.iDempleado}`, getDocumentacionEmpleado, true)
    },[refetch, empleadoSeleccionado?.iDempleado])

    function onChangeValues(e, key){
        const newResponse = {...formDocumentacion};
        newResponse[key] = e;
        setFormDocumentacion({
          ...newResponse
        });
    }

    useEffect(() => {  
        setResponses({
          ...responses,
          formDocumentacion
        });    
    },[formDocumentacion]);


    async function sendDataDoc(){
        if(empleadoSeleccionado){
            try{
                await axios
                .post("http://54.243.192.82/api/EmpleadosDocumentacion", {...formDocumentacion, idEmpleado : empleadoSeleccionado?.iDempleado})
                .then((res)=>{
                    if(res.status === 200){
                        dispatch(setRefetch(!refetch));
                        console.log(res)
                        return swal({
                            title : "Ok",
                            text : "Documentacion agregada con éxito",
                            icon : "success"
                        });
                    }
                    return;
                })
            }catch(err){
                return swal({
                    title : "Error",
                    text : "Error al agregar la documentacion" + " "+ err,
                    icon : "error"
                });
            }
        }else
        return swal({
            title : "Error",
            text : "Debe seleccionar un empleado",
            icon : "error"
        }); 
        
    }
    function deleteData(id){
        dispatch(deleteDocuEmpleado(id))
        dispatch(saveIds(id))
    }
    
  return (
    index === 5 && 
    <section className={index === 5 ? "transitionClassUp" : "transitionClassneDone"}>
    <div className='container'>  
    <fieldset className="border p-2">
            <legend className="float-none w-auto p-2 contenedorFieldSet">
                <i className="fs-5 bi-folder2-open "></i><span className="ms-1 d-none d-sm-inline colorFont">Documentacion</span>
            </legend>      
        <div className='row'>
            <div className='col-xl-12'>
                <InputDateDocs 
                nameInput="Fecha Presentación" 
                idInput="fecha" 
                display={false} 
                onChange={onChangeValues} 
                //disabled={disable} 
                value={formDocumentacion?.fecha && formDocumentacion?.fecha} 
                />
            </div>
            <div className='col-xl-12'>
                <InputDate 
                disabled={disable} 
                nameInput="Fecha Vencimiento" 
                //disable={disableI} 
                //setDisable={setDisableI} 
                idInput="fechaVencimiento" 
                display={true}  
                onChange={onChangeValues} 
                //actionReset={getInputValue} 
                value={formDocumentacion?.fechaVencimiento && formDocumentacion?.fechaVencimiento} 
                valueCheck={formDocumentacion?.inputCheckDocusDate && formDocumentacion?.inputCheckDocusDate} 
                idInputCheck="inputCheckDocusDate" />
            </div>
            <div className='col-xl-12'>
                <InputButtonLiquidacion
                    clasess={inputButtonClasessDocumentacion}
                    // nameButton="..."
                    nameLabel="Documentación"
                    placeholder="Documentación"
                    array={documentacion && documentacion}
                    propArrayOp="documentacion1"
                    propIdOption="idDocumentacion"
                    idInput="idDocumentacion"
                    onChange={onChangeValues}
                    value={formDocumentacion?.idDocumentacion && formDocumentacion?.idDocumentacion}
                    disabled={disable}
                />
            </div>
            <div className='col-xl-12'>
                <TextArea 
                inputName="Observaciones " 
                onChange={onChangeValues} 
                idInput="obs" 
                value={formDocumentacion?.obs && formDocumentacion?.obs} 
                disabled={disable} />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <CheckLabel 
                idInput="generaLiquidacion" 
                nameLabel="Se tiene en cuenta en la Liquidación (Sólo si se cumplen las condiciones necesarias)"  
                onChange={onChangeValues} 
                value={formDocumentacion?.generaLiquidacion && formDocumentacion?.generaLiquidacion} 
                disabled={disable} 
                />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <CheckLabel 
                idInput="incluirCuotaAlimentaria" 
                nameLabel="Incluir en cuota Alimentaria"  
                onChange={onChangeValues} 
                value={formDocumentacion?.incluirCuotaAlimentaria && formDocumentacion?.incluirCuotaAlimentaria}
                disabled={disable} 
                />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <ButtonCancelarAceptar 
                idElimiar={documentacionSeleccionada.idEmpleadoDocumentacion && documentacionSeleccionada.idEmpleadoDocumentacion} 
                cancelar="-" 
                aceptar="+" 
                functionSend={sendDataDoc} 
                functionDelete={deleteData} 
                disabled={disable} 
                />
                <TableBasic1 
                //refetch={refetch} 
                //setRefetch={setRefectch} 
                setDocumentacionSeleccionada = {setDocumentacionSeleccionada}
                columns={columns} 
                value={documentacionDelEmpleado}  
                documentaciones={documentacion} 
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