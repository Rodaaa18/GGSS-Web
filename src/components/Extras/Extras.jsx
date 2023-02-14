import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { inputButtonClasessExtras } from '../../classes/classes'
import { datosExtrasEmpleado, deleteDatoExtraEmpl, saveIdDe } from '../../redux/actions/datosExtrasActions'
import { setRefetch } from '../../redux/actions/fetchActions'
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import TextArea from '../Inputs/TextArea/TextArea'
import TableExtras from '../Tables/TableExtras'
import "./Extras.css"

const Extras = ({responses, setResponses, disable, index}) => {
    const [ formDatosExtras, setFormDatosExtras ] = useState(responses["formDatosExtras"]);
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
    const refetch = useSelector((state)=> state.fetchState.refetch);
    const datosExtras = useSelector((state)=> state.datosExtrasState.datosExtras);
    const datosExtraEmpleado = useSelector((state)=> state.datosExtrasState.datosExtraEmpleado);
    const datoExtraSelected = useSelector((state)=> state.datosExtrasState.datoExtra);
    const dispatch = useDispatch();


    const urlPetition = `http://54.243.192.82/api/GuardarDatosExtras/0?Fecha=${formDatosExtras?.inputFechaExtras}&IdEmpleado=${empleadoSeleccionado.iDempleado}&IdDatoExtra=${formDatosExtras?.inputDatosExtrasCbo}&Obs=${formDatosExtras?.inputTextExtras}`

    const columns = ["Seleccionar","Fecha", "Descripción", "Observaciones"]
    function onChangeValues(e, key){
        const newResponse = {...formDatosExtras};
        newResponse[key] = e;
        setFormDatosExtras({
          ...newResponse
        });
    };

    useEffect(() => {    
        setResponses({
          ...responses,
          formDatosExtras
        });    
    },[formDatosExtras]);

    async function sendData(){
        if(empleadoSeleccionado){
          try{
            await axios.post(urlPetition)
            .then((res)=>{
                if(res.status === 200){
                  dispatch(setRefetch(!refetch));
                  return swal({
                    title: "Ok",
                    text: "Dato Extra agregado con éxito",
                    icon: "success",
                })
                
                }
                return;
            })
          }catch(err){
            return swal({
                title: "Error",
                text: `Error al insertar el Dato Extra, error: ${err}`,
                icon: "error",
          })
          }
        }else{
          return swal({
            title: "Error",
            text: `Debe seleccionar un Empleado`,
            icon: "error",
          })
        }
        
        
      }
      async function getDatosExtraEmpleado(){
        try{
            axios
                .get(
                    `http://54.243.192.82/api/MostrarDatosExtrasPorEmpleado/${empleadoSeleccionado?.iDempleado}`
                )
                .then((res) => {
                    dispatch(datosExtrasEmpleado(res.data));
            });
        }catch(err){
            return err
        }
      }
      useEffect(()=>{
         getDatosExtraEmpleado();
      },[empleadoSeleccionado?.iDempleado, refetch])

      async function deleteDatoExtra(id){
        dispatch(deleteDatoExtraEmpl(id));
        dispatch(saveIdDe(id));
      
    }


  return (
    index === 7 && <section className={index === 7 ? "transitionClassUp" : "transitionClassneDone"}>
    <div className='container-flex'>      
    <fieldset className="border p-2">
            <legend className="float-none w-auto p-2 contenedorFieldSet">
                <i className="fs-5 bi-folder2-open "></i><span className="ms-1 d-none d-sm-inline colorFont">Extras</span>
            </legend>    
      
      <div className='container-flex  border-top-0 p-0'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button acordeonOption" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <p className="tituloAcordeon p-0 m-0">Datos Extras</p>
              </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <div className='row  mt-1'>
                    <div className='col-xl-12'>
                        <InputButtonLiquidacion
                        class='fs-5' 
                        idInput="inputDatosExtrasCbo" 
                        nameButton="..." 
                        onChange={onChangeValues} 
                        value={formDatosExtras?.inputDatosExtrasCbo && formDatosExtras?.inputDatosExtrasCbo}
                        propArrayOp="descripcion"
                        array={datosExtras && datosExtras}
                        propIdOption="idDatoExtra"
                        nameLabel="Datos Extras" 
                        clasess={inputButtonClasessExtras}
                        disabled={disable}
                         />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-6'>
                    <div className="formulario__grupo__inputs ">
                      <div className="form-check p-0 mt-2">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Fecha
                        </label>
                      </div>
                      <div className="d-flex flex-row justify-content-start align-items-center">
                          
                          <input id="inputFechaExtras" className="secondCheckNacExtras" name="inputFechaExtras" type="date" value={formDatosExtras?.inputFechaExtras && formDatosExtras?.inputFechaExtras} disabled={disable} onChange={(e)=>onChangeValues(e.target.value, "inputFechaExtras")} />
                          
                      </div>
                  </div>
                       {/*  <InputDate valueCheck={true} value={formDatosExtras?.inputFechaExtras && formDatosExtras?.inputFechaExtras} onChange={onChangeValues} idInput="inputFechaExtras" nameInput="Fecha" action={GET_INPUT_VALUES_EXTRAS} disabled={disable} /> */}
                    </div>
                </div>
                <div className='row'>
                      <div className='col-xl-12 fs-6 '>
                          <TextArea onChange={onChangeValues} idInput="inputTextExtras" value={formDatosExtras?.inputTextExtras && formDatosExtras?.inputTextExtras} inputName="Observaciones"  disabled={disable} />
                          <ButtonCancelarAceptar cancelar="-" aceptar="+" idElimiar={datoExtraSelected.idEmpleadoDatoExtra} functionDelete={deleteDatoExtra} functionSend={sendData} disabled={disable} />
                          <TableExtras descripcion={datosExtras} disabled={disable} datosExtraEmpleado={datosExtraEmpleado && datosExtraEmpleado} columns={columns} />
                      </div>
                </div>
            </div>
          </div>
        </div>
       {/*  <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Adscripto
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inpútAdscriptoExtras" nameLabel="Adscripto" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegal" clasess={inputButtonClasessExtrasInstrum} onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                    </div>
                    <div className='divObservaciones'>
                        <TextArea idInput="inputTextExtrasAdscripto" inputName="Observaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                    </div>

              </div>
              <div className='linea' />
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inputAfectacionesExtras" nameLabel="Afectaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegalAfectaciones" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasInstrum} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion nameButton="..." nameLabel="Sector" id="inputSectorExtras" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasAfectaciones} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion nameButton="..." nameLabel="Direcciones" id="inputDireccionesExtras" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasAfectaciones} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacionObs '>
                        <TextArea idInput="inputTextExtrasAfectaciones" inputName="Observaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />                          
                    </div>
                    
              </div>
              </div>
            </div>
          </div>  */}        
        </div>        
      </div>
      </fieldset>
      </div>
      </section> 
  )
}

export default Extras