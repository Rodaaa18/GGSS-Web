import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { classesFormDP, inputButtonClasessParentesco, inputButtonClasessTextArea } from '../../classes/classes'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputForm from '../Inputs/InputForm/InputForm'
import TextArea from '../Inputs/TextArea/TextArea';
import "../Home/NuevaVista.css";
import TableBasic from '../Tables/TableBasic';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/employeTypes';
import axios from 'axios';
import { useState } from 'react';
import InputRadio from '../Inputs/InputRadio/InputRadio';
import swal from 'sweetalert';
import { setRefetch } from '../../redux/actions/fetchActions';
import { deleteFamiliar, getFamiliaresEmpleado, saveIdsFam } from '../../redux/actions/familiaActions';

const Familias = ({index, responses, setResponses}) => {
    const [ formFamilias, setFormFamilias ] = useState(responses["formFamilias"]);
    const [ parentescos, setParentescos ] = useState([]);
    const dispatch = useDispatch();
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
    const tiposDocumento = useSelector((state)=> state.fetchState.tiposDocumento);
    const nacionalidades = useSelector((state)=> state.fetchState.paises);
    const estudios = useSelector((state)=> state.fetchState.estudios);
    const familiarSeleccionado = useSelector((state)=> state.familiaState.familiarSeleccionado);
    const refetch = useSelector((state)=> state.fetchState.refetch);
    const familiares = useSelector((state)=> state.familiaState.familiares);
    const familiaresEmpleado = useSelector((state)=>  state.familiaState.familiaresEmpleado);
    const idsFam = useSelector((state)=>  state.familiaState.idsFam);

    const handleFetch = async (url, action) => {        
        
        await
          axios
          .get(url)
          .then((res) => {
            action(res.data.result);            
          })
          .catch((err) => {
           
          });    
      };
      useEffect(()=>{       
        handleFetch("http://54.243.192.82/api/Parentescos", setParentescos)  
      },[])
      /* useEffect(()=>{
        handleFetch(`http://54.243.192.82/api/MostrarDatosFamiliarPorEmpleado/${empleadoSeleccionado?.iDempleado}`, setFamiliaresEmpleado) 
      },[empleadoSeleccionado?.iDempleado]) */
      useEffect(()=>{
        axios.get(
            `http://54.243.192.82/api/MostrarDatosFamiliarPorEmpleado/${empleadoSeleccionado?.iDempleado}`
        ).then((res)=>{
            dispatch(getFamiliaresEmpleado(res.data.result));
        })
      },[empleadoSeleccionado?.iDempleado,refetch])

      

    function onChangeValues(e, key){
        const newResponse = {...formFamilias};
        newResponse[key] = e;
        setFormFamilias({
          ...newResponse
        });
    }
    useEffect(() => {  
        setResponses({
          ...responses,
          formFamilias
        });    
    },[formFamilias]);

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

      async function sendDataFamiliar(e,url, body){
        e.preventDefault();
        try{
            await axios
            .post(url, body)
            .then((res)=>{
                if(res.status === 200){
                    dispatch(setRefetch(!refetch));
                    return swal({
                        title : "Ok",
                        text : "Familiar agregado con éxito",
                        icon : "success"
                    })
                }
            })
        }catch(err){
            return swal({
                title : "Error",
                text : "Error al agregar el Familiar",
                icon : "error"
            })
        }
    }
    function deleteFamiliarSelect (e, id){       
        e.preventDefault();
        dispatch(deleteFamiliar(Number(id)))
        dispatch(saveIdsFam(Number(id)));   
      }
    
     

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
                                value={formFamilias?.apellidoyNombres}
                                clasess={classesFormDP}
                                idInput="apellidoyNombres"
                                messageError="Solo puede contener números."
                                placeHolder="Apellido y Nombres"
                                nameLabel="Apellido y Nombres"
                                numbers={true}
                                obligatorio ={true}
                                onChange={onChangeValues}
                                />
                                <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0'>
                                    <label htmlFor="" className='labelInput'>DNI</label>
                                    <select name="iDtipoDocumentos" onChange={(e)=>onChangeValues(e.target.value, "iDtipoDocumentos")} className='formulario-input-InpButton-TipoDNI' id="iDtipoDocumentos">
                                        <option value="">Seleccionar</option>
                                        {
                                            tiposDocumento && tiposDocumento.map((item,i)=>{
                                                return(<option value={item.iDtipoDocumento}>{item.tipoDocumento}</option>)
                                            })
                                        }
                                    </select>
                                    <input type="text" onChange={(e)=>onChangeValues(e.target.value, "nroDocumento")}  className='formulario-input-Legajo-TipoDNI ' name="nroDocumento" id="nroDocumento" placeholder='N° Documento' value={formFamilias?.nroDocumento} />
                                </div>                                
                                <InputButtonLiquidacion
                                    clasess={inputButtonClasessParentesco}
                                    array={parentescos}
                                    onChange={onChangeValues}
                                    idSelected={formFamilias?.iDparentesco}
                                    nameButton="..."
                                    nameLabel="Parentesco"
                                    placeholder="Parentesco"
                                    propArrayOp="nombreParentesco"
                                    propIdOption="iDparentesco"
                                    idInput="iDparentesco"
                                />
                                <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0 '>
                                    <label htmlFor="" className='labelInputDate'> Nacimiento</label>
                                    <input type="date" onChange={(e)=>onChangeValues(e.target.value, "fechaNacimiento")} name="fechaNacimiento" id="fechaNacimiento" className='dateTimeClass' value={formFamilias?.fechaNacimiento}/>
                                    <div className='w-50'></div>
                                </div>
                                
                                <InputButtonLiquidacion
                                    clasess={inputButtonClasessParentesco}
                                    array={estudios}
                                    onChange={onChangeValues}
                                    idSelected={formFamilias?.iDestudios}
                                    nameButton="..."
                                    nameLabel="Estudios"
                                    placeholder="Estudios"
                                    propArrayOp="estudiosNivel"
                                    propIdOption="iDestudios"
                                    idInput="iDestudios"
                                />
                            </div>
                            <div className='col-xl-6 col-lg-12 col-md-12'>
                                    <InputRadio
                                        value={ formFamilias?.sexo}                            
                                        nameFirst="Masculino"
                                        nameSecond="Femenino"
                                        nameLabel="Sexo"
                                        idInput="sexo"
                                        onChange={onChangeValues}
                                        //datosPersonalesValue={formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo} 
                                        obligatorio ={true}
                                        nameThird="Otro"
                                        //disabled={disable}
                                    />
                                {/* <div className='d-flex flex-row justify-content-center align-items-center w-100 m-0 p-0 '>
                                    <label htmlFor="" className='labelInputDate'> Sexo</label>
                                    <div className='d-flex flex-row justify-content-between align-items-center w-100 m-0 p-0 '>
                                        <label htmlFor="" className='labelInputRadio'> Femenino</label>
                                        <input type="radio" name="fechaNacimiento" id="fechaNacimiento" className='radioClass' />
                                        <label htmlFor="" className='labelInputRadio'> Masculino</label>
                                        <input type="radio" name="fechaNacimiento" id="fechaNacimiento" className='radioClass' />
                                        <label htmlFor="" className='labelInputRadio'> Otro</label>
                                        <input type="radio" name="fechaNacimiento" id="fechaNacimiento" className='radioClass' />
                                    </div>
                                </div> */}
                                <InputButtonLiquidacion
                                    clasess={inputButtonClasessParentesco}
                                    array={nacionalidades}
                                    onChange={onChangeValues}
                                    idSelected={formFamilias?.iDpaisOrigen}
                                    nameButton="..."
                                    nameLabel="Pais O"
                                    placeholder="Pais O"
                                    propArrayOp="nombrePais"
                                    propIdOption="idPais"
                                    idInput="iDpaisOrigen"
                                />
                                <InputButtonLiquidacion
                                    clasess={inputButtonClasessParentesco}
                                    array={nacionalidades}
                                    onChange={onChangeValues}
                                    idSelected={formFamilias?.iDnacionalidad}
                                    nameButton="..."
                                    nameLabel="Nacionalidad"
                                    placeholder="Nacionalidad"
                                    propArrayOp="nacionalidad_fem"
                                    propIdOption="idPais"
                                    idInput="iDnacionalidad"
                                />
                                <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0 '>
                                    <label htmlFor="" className='labelInputDate'> Fecha Baja</label>
                                    <input type="date" onChange={(e)=>onChangeValues(e.target.value, "fBaja")} name="fBaja" id="fBaja" className='dateTimeClass' value={formFamilias?.fBaja}/>
                                    <div className='w-50'></div>
                                </div>
                                <TextArea
                                    clasess={inputButtonClasessTextArea}
                                    onChange={onChangeValues}
                                    nameLabel="Observ."
                                    idInput="obs"
                                    maxLength="255" 
                                    value={ formFamilias?.obs} 
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex flex-row justify-content-end align-items-center mt-2'>
                                <button className='btn btn-success' onClick={(e)=>sendDataFamiliar(e, "http://54.243.192.82/api/InsertarNuevoFamiliar", {...formFamilias, idEmpleado : empleadoSeleccionado?.iDempleado, idFamiliares : ((familiares && familiares[familiares.length -1]  && (familiares[familiares.length -1].iDfamiliares))+1)})} style={{width : "10%"}}>+</button>
                                <button className='btn btn-danger' onClick={(e)=>deleteFamiliarSelect(e, familiarSeleccionado?.idFamiliares)} style={{width : "10%"}}>-</button>
                            </div>
                            <div className='col-12 mt-1'>
                                <TableBasic 
                                    columns={columns}   
                                    array={familiaresEmpleado && familiaresEmpleado}                                  
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