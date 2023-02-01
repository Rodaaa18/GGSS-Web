import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {classesFormDP, inputButtonClasessParentesco, inputButtonClasessTextArea } from '../../classes/classes'
import { getEstados, getTiposDni } from '../../redux/actions/fetchActions';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/employeTypes';
import Browser from '../Browser/Browser';
import Domicilio from '../Domicilios/Domicilio';
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputFile from '../Inputs/InputFile/InputFile';
import InputForm from '../Inputs/InputForm/InputForm';
import InputRadio from '../Inputs/InputRadio/InputRadio';
import TextArea from '../Inputs/TextArea/TextArea';
import Liquidacion from '../Liquidacion/Liquidacion';
import "../Home/NuevaVista.css";
import { urls } from './urls';

const Personales = ({ index, disable }) => {
    const [ estadosCiviles, setEstadosCiviles ] = useState([]);
    const [ nacionalidades, setNacionalidades ] = useState([]);
    const [ estudios, setEstudios ] = useState([]);
    const dispatch = useDispatch();
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
    
    const tiposDocumento = useSelector((state)=> state.fetchState.tiposDocumento);
    const estados = useSelector((state)=> state.fetchState.estados);


    const handleFetch = async (url, action, state) => {
        dispatch({ type: SET_LOADING });
        if(state){
            await axios
          .get(url)
          .then((res) => {
            action(res.data.result);
            return
          })
          .catch((err) => {
            dispatch({ type: AXIOS_ERROR });
          });
          return;
        }else{
            await axios
            .get(url)
            .then((res) => {
              dispatch(action(res.data.result));
            })
            .catch((err) => {
              dispatch({ type: AXIOS_ERROR });
            });
        }       
    };

    useEffect(()=>{
        handleFetch(urls.urlTiposDocumentos, getTiposDni);
        handleFetch(urls.urlEstadosCiviles, setEstadosCiviles , true);  
        handleFetch(urls.urlPaisesNac, setNacionalidades , true);
        handleFetch(urls.urlEstados, getEstados);  
        handleFetch(urls.urlEstudios, setEstudios , true);  
    },[])

    console.log(tiposDocumento)
    function onChangeValues(){

    }
  return (
    
    index === 1 && <section className={index === 1 ? "transitionClassUp" : "transitionClassneDone"} >
            <div className='container-flex' >
                <div className='row'>
                    {/* <div className='col-xl-3 col-lg-12 col-md-12'>
                        <Browser />
                    </div> */}
                    <div className='col-xl-12 col-lg-12 col-md-12'>
                    {/* <fieldset className="border p-2">
                      <legend className="float-none w-auto p-2 contenedorFieldSet">
                          <i className="fs-5 bi-person "></i><span className="ms-1 d-none d-sm-inline colorFont">Datos Personales</span>
                      </legend> */}
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                            ><i className="fs-5 bi-person "></i>
                                Datos Personales
                            </button>
                            </h4>
                            <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                            >
                            <div className="accordion-body">
                      <form action="" className='norder border-3 d-flex flex-column justify-content-center align-items-start w-100'>
                          <div className='container-flex w-100'>
                              <div className='row'>
                                  <div className='col-xl-4 col-lg-4 col-md-12'>
                                      <InputForm
                                          clasess={classesFormDP}
                                          value={empleadoSeleccionado?.legajo}
                                          idInput="legajo"
                                          messageError="Solo puede contener números."
                                          placeHolder="N° Legajo"
                                          nameLabel="Legajo"
                                          numbers={true}
                                          obligatorio={true}
                                          disabled={disable}
                                          />
                                      <InputForm
                                          clasess={classesFormDP}
                                          value={empleadoSeleccionado?.apellido}
                                          idInput="apellido"
                                          messageError="Solo puede contener números."
                                          placeHolder="Apellidos"
                                          nameLabel="Apellidos"
                                          numbers={true}
                                          obligatorio={true}
                                          disabled={disable} />
                                      <InputForm
                                          clasess={classesFormDP}
                                          value={empleadoSeleccionado?.nombres}
                                          idInput="nombres"
                                          messageError="Solo puede contener números."
                                          placeHolder="Nombres"
                                          nameLabel="Nombres"
                                          numbers={true}
                                          obligatorio={true}
                                          disabled={disable} />
                                      <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0'>
                                          <label htmlFor="" className='labelInput'>DNI</label>
                                          <select name="" disabled={disable} className='formulario-input-InpButton-TipoDNI' id="">
                                              <option value="">Seleccionar</option>
                                              {
                                                tiposDocumento && tiposDocumento.map((item,i)=>{
                                                    return(Number(empleadoSeleccionado?.iDtipoDocumento) === Number(item.iDtipoDocumento) ? <option selected key={i} value={item.iDtipoDocumento}>{item.tipoDocumento}</option> : <option key={i} value={item.iDtipoDocumento}>{item.tipoDocumento}</option>)
                                                })
                                              }
                                          </select>
                                          <input 
                                          type="text" 
                                          className='formulario-input-Legajo-TipoDNI '
                                          value={empleadoSeleccionado?.nroDocumento} 
                                          name="" 
                                          id="" 
                                          placeholder='N° Documento' 
                                          disabled={disable}
                                          />
                                      </div>
                                      <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0 '>
                                          <label htmlFor="" className='labelInputDate'> CUIL</label>
                                          <input 
                                          disabled={disable}
                                          type="text" 
                                          name="fechaNacimiento" 
                                          id="fechaNacimiento" 
                                          className='dateTimeClass'
                                          value={empleadoSeleccionado?.cuil} 
                                          />
                                          <div className='d-flex flex-row justify-content-start align-items-center mt-2 btnGenerar w-50'>
                                              <button disabled={disable} className='btn btn-danger btn-sm'>Generar</button>
                                          </div>
                                      </div>
                                      <InputForm
                                          clasess={classesFormDP}
                                          idInput="legajo"
                                          messageError="Solo puede contener números."
                                          placeHolder="Telefono"
                                          nameLabel="Telefono"
                                          value={empleadoSeleccionado?.telFijo}
                                          numbers={true}
                                          obligatorio={true} 
                                          disabled={disable}/>
                                      <InputButtonLiquidacion
                                          clasess={inputButtonClasessParentesco}
                                          array={estadosCiviles && estadosCiviles}
                                          idSelected={empleadoSeleccionado?.iDestadoCivil}
                                          nameButton="..."
                                          nameLabel="Estado Civil"
                                          placeholder="Estado Civil"
                                          propArrayOp="masculino"
                                          propIdOption="idEstadoCivil"
                                          idInput="IdEstadoCivil" 
                                          disabled={disable}/>
                                      <InputButtonLiquidacion
                                          clasess={inputButtonClasessParentesco}
                                          array={nacionalidades && nacionalidades}
                                          idSelected={empleadoSeleccionado?.idPaisOrigen}
                                          nameButton="..."
                                          nameLabel="Nacionalidad"
                                          placeholder="Nacionalidad"
                                          propArrayOp="nacionalidad_masc"
                                          propIdOption="idPais"
                                          idInput="iDNacionalidad" 
                                          disabled={disable}/>
                                  </div>
                                  <div className='col-xl-4 col-lg-4 col-md-12'>
                                      <InputButtonLiquidacion
                                          clasess={inputButtonClasessParentesco}
                                          idSelected={empleadoSeleccionado?.idEstado}
                                          array={estados && estados}
                                          nameButton="..."
                                          nameLabel="Estado"
                                          placeholder="Estado"
                                          propArrayOp="nombreEstado"
                                          propIdOption="idEstado"
                                          idInput="IdEstado" 
                                          disabled={disable}/>
                                        <InputRadio
                                        value={empleadoSeleccionado?.sexo && empleadoSeleccionado?.sexo}                            
                                        nameFirst="Masculino"
                                        nameSecond="Femenino"
                                        nameLabel="Sexo"
                                        idInput="inputSexo"
                                        onChange={onChangeValues}
                                        datosPersonalesValue={empleadoSeleccionado?.sexo && empleadoSeleccionado?.sexo}
                                        //datosPersonalesValue={formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo} 
                                        obligatorio ={true}
                                        nameThird="Otro"
                                        disabled={disable}
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
                                      </div>
                                      <div className='d-flex flex-row justify-content-start align-items-center w-100 m-0 p-0 '>
                                          <label htmlFor="" className='labelInputDate'> Nacimiento</label>
                                          <input type="date" name="fechaNacimiento" id="fechaNacimiento" className='dateTimeClass' />
                                          <div className='w-50'></div>
                                      </div> */}
                                      <InputForm
                                          clasess={classesFormDP}
                                          value={empleadoSeleccionado?.telMovil && empleadoSeleccionado?.telMovil}  
                                          idInput="movil"
                                          messageError="Solo puede contener números."
                                          placeHolder="Celular"
                                          nameLabel="Celular"
                                          numbers={true}
                                          obligatorio={true}
                                          disabled={disable} />
                                      <InputForm
                                          clasess={classesFormDP}
                                          value={empleadoSeleccionado?.mail && empleadoSeleccionado?.mail}  
                                          idInput="email"
                                          messageError="Solo puede contener números."
                                          placeHolder="Email"
                                          nameLabel="Email"
                                          numbers={true}
                                          obligatorio={true}
                                          disabled={disable} />
                                      <InputButtonLiquidacion
                                          clasess={inputButtonClasessParentesco}
                                          array={nacionalidades && nacionalidades}
                                          idSelected={empleadoSeleccionado?.idPaisOrigen}
                                          nameButton="..."
                                          nameLabel="Pais Origen"
                                          placeholder="Pais Origen"
                                          propArrayOp="nombrePais"
                                          propIdOption="idPais"
                                          idInput="iDPaisOrigen" 
                                          disabled={disable}/>
                                      <InputButtonLiquidacion
                                          clasess={inputButtonClasessParentesco}
                                          array={estudios && estudios}
                                          idSelected={empleadoSeleccionado?.iDestudios}
                                          nameButton="..."
                                          nameLabel="Estudios"
                                          placeholder="Estudios"
                                          propArrayOp="estudiosNivel"
                                          propIdOption="iDestudios"
                                          idInput="iDestudios" 
                                          disabled={disable}/>
                                      <TextArea
                                          clasess={inputButtonClasessTextArea}
                                          value={empleadoSeleccionado?.obsEstudios && empleadoSeleccionado?.obsEstudios}  
                                          nameLabel="Observ."
                                          idInput="observacionesEstudios"
                                          maxLength="255" 
                                          disabled={disable}/>
                                  </div>
                                  <div className='col-xl-4 col-lg-4 col-md-12 d-flex flex-column justify-content-start align-items-center'>
                                      <InputFile
                                          inputName="Arrastre su imagen"
                                          idInput="inputImage" 
                                          disabled={disable}/>
                                  </div>
                              </div>
                          </div>

                      </form>
                      </div>
                      </div>
                      </div>
                      
                  {/* </fieldset> */}
                  <Domicilio />
                  </div>
                    </div>
                    {/* <div className='col-xl-6 col-lg-12 col-md-12'>
                        <Liquidacion />
                    </div> */}
                </div>
                  
              </div>
              </section>
        
  )
}

export default Personales