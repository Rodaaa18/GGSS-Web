import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { classesFormDP, inputButtonClasessParentesco } from '../../classes/classes'
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/employeTypes'
import "./Domicilio.css"
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputForm from '../Inputs/InputForm/InputForm'
import TablaDomicilios from '../Tables/TablaDomicilios'
import { setRefetch } from '../../redux/actions/fetchActions'
import { deleteDomicilio, getDomicilios, saveIdDom } from '../../redux/actions/domicilioActions'
import { urlsDomicilios } from '../ServiceComponent/urls'


const Domicilio = ({disable, responses, setResponses, combosForm , setCombosForm}) => {
    const [ formDomicilios, setFormDomicilios ] = useState(responses["formDomicilios"]);
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
    
    const [ provinciaSelected, setProvinciaSelected ] = useState();
    const [ departamentoSelected, setDepartamentoSelected ] = useState();
    const [ localidadSelected, setLocalidadSelected ] = useState();
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const refetch = useSelector((state)=> state.fetchState.refetch);
    const domiciliosDelEmpleado = useSelector((state)=> state.domiciliosState.domiciliosEmpleado);
    const domicilioSeleccionado = useSelector((state)=> state.domiciliosState.domicilioSelected);
    const idsDomicilio = useSelector((state)=> state.domiciliosState.idsDom);

    async function getDomiciliosPorEmpleado(){
        if(empleadoSeleccionado){
            try{
                await axios.get(`http://54.243.192.82/api/sp_DomiciliosDatosxIdEmpleado?IdEmpleado=${empleadoSeleccionado?.iDempleado}`)
                .then((res)=>{
                  dispatch(getDomicilios(res.data));
                })
            }catch(err){
                swal({
                    title : "Error",
                    text : "Error al obtener los domicilios",
                    icon : "error"
                })
            }
        }        
    }
    useEffect(()=>{
        getDomiciliosPorEmpleado();
    },[empleadoSeleccionado?.iDempleado, refetch])

    
      const handleChangePredeterminado=(e, key)=>{
        setChecked(!checked)
        const newResponse = {...formDomicilios};
          newResponse[key] = e.target.checked;
          setFormDomicilios({
            ...newResponse
          });
      }
      function onChangeValues(e, key){
        const newResponse = {...formDomicilios};
        newResponse[key] = e;
        setFormDomicilios({
          ...newResponse
        });
    }
    useEffect(() => {  
        setResponses({
          ...responses,
          formDomicilios
        });    
    },[formDomicilios]);


      

       const arrayDepartamentos = provinciaSelected && combosForm?.dptos.filter((departamento) => departamento.idProvincia === provinciaSelected.idProvincia);


      const arrayLocalidades = departamentoSelected && combosForm?.localidades.filter((localidad) => localidad.idDepartamento === departamentoSelected.idDepartamento);
    
    
      const arrayBarrios = localidadSelected&&  combosForm?.barrios.filter((barrio) => barrio.idLocalidad === localidadSelected.idLocalidad); 
    const columns = [
        "Predeterminado",
        "Calle",
        "Barrio",
        "Localidad",
        "Piso/Of/Dpto",
        "Provincia",
      ];
    async function guardarDomicilio(e){
        e.preventDefault();
        try{
            await axios.post(`http://54.243.192.82/api/sp_DomiciliosGuarda?idDomicilio=0&idCalle=${formDomicilios?.idCalle}&Numero=${formDomicilios?.nroCalle}&idBarrio=${formDomicilios?.idBarrio}&Dpto=${formDomicilios?.idDepartamento}&Predeterminado=${formDomicilios?.predeterminado}&IdEmpleado=${empleadoSeleccionado?.iDempleado}`,{
                headers: {
                  'Access-Control-Allow-Origin' : '*'
                }})
            .then((res)=>{
                if(res.status === 200){
                    dispatch(setRefetch(!refetch));
                    swal({
                    title: "Domicilio Agregado",
                    text: "Domicilio agregado con éxito",
                    icon: "success",
                  }) 
                }
            });
        }catch(err){
            return swal({
                title: "Error",
                text: "Debe completar todos los campos",
                icon: "error",
              })
        }
    }
    function deleteDomicilios (e, id){
        console.log(id)
        e.preventDefault();
        dispatch(deleteDomicilio(Number(id)))
        dispatch(saveIdDom(Number(id)));   
      }
      console.log(idsDomicilio)
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
                                    <input className='ml-2' type="checkbox" onChange={(e)=> handleChangePredeterminado(e, "predeterminado")} name="predeterminado" id="predeterminado" value={disable ? empleadoSeleccionado?.predeterminado : formDomicilios?.predeterminado} />
                                </div>                                
                                <div className='col-xl-4 col-lg-12 col-md-12'>
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        idSelected={formDomicilios?.idCalle}
                                        nameButton="..."
                                        nameLabel="Calle"
                                        placeholder="Calle"
                                        propArrayOp="calle"
                                        propIdOption="idCalle"
                                        idInput="idCalle"
                                        array={combosForm?.calles}
                                        disabled={disable}
                                        onChange={onChangeValues}
                                    />
                                    <InputForm 
                                        clasess={classesFormDP}
                                        value={ formDomicilios?.pisoDepto }
                                        idInput="pisoDepto"
                                        messageError="Solo puede contener números."
                                        placeHolder="Piso / Dpto"
                                        nameLabel="Piso / Dpto"
                                        numbers={true}
                                        obligatorio ={true}
                                        disabled={disable}
                                        onChange={onChangeValues}
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-12 col-md-12'>
                                    <InputForm 
                                        clasess={classesFormDP}
                                        value={ formDomicilios?.nroCalle }
                                        idInput="nroCalle"
                                        messageError="Solo puede contener números."
                                        placeHolder="N° Calle"
                                        nameLabel="N° Calle"
                                        numbers={true}
                                        obligatorio ={true}
                                        disabled={disable}
                                        onChange={onChangeValues}
                                    />
                                </div> 
                                <div className='col-xl-4 col-lg-12 col-md-12'>
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Provincia"
                                        placeholder="Provincia"
                                        propArrayOp="provincia"
                                        propIdOption="idProvincia"
                                        idInput="idProvincia"
                                        updateSelected = {setProvinciaSelected}
                                        idSelected={formDomicilios?.idProvincia}
                                        array={combosForm?.provincias}
                                        disabled={disable}
                                        onChange={onChangeValues}
                                    />
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Depto"
                                        placeholder="Departamento"
                                        propArrayOp="departamento"
                                        propIdOption="idDepartamento"
                                        updateSelected = {setDepartamentoSelected}
                                        idSelected={formDomicilios?.idDepartamento}
                                        idInput="idDepartamento"
                                        array={arrayDepartamentos}
                                        disabled={disable}
                                        onChange={onChangeValues}
                                    />
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Localidad"
                                        placeholder="Localidad"
                                        propArrayOp="localidad"
                                        propIdOption="idLocalidad"
                                        updateSelected = {setLocalidadSelected}
                                        idSelected={formDomicilios?.idLocalidad}
                                        idInput="idLocalidad"
                                        array={arrayLocalidades}
                                        disabled={disable}
                                        onChange={onChangeValues}
                                    />
                                    <InputButtonLiquidacion
                                        clasess={inputButtonClasessParentesco}
                                        nameButton="..."
                                        nameLabel="Barrio"
                                        placeholder="Barrio"
                                        propArrayOp="barrio"
                                        propIdOption="idBarrio"
                                        idInput="idBarrio"
                                        idSelected={formDomicilios?.idBarrio}
                                        array={arrayBarrios}
                                        disabled={disable}
                                        onChange={onChangeValues}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-xl-12 d-flex flex-row-reverse justify-content-start align-items-center">
                                    <button className='btn btn-success btn-sm buttonAgregarTable m-1'onClick={(e)=> guardarDomicilio(e)}>
                                        +
                                    </button>
                                    <button className='btn btn-danger btn-sm buttonAgregarTable m-1' onClick={(e)=> deleteDomicilios(e,domicilioSeleccionado?.idDomicilio)}>
                                        -
                                    </button>
                                </div>
                                <div className='col-12'>
                                    <TablaDomicilios 
                                        columns={columns}
                                        value={domiciliosDelEmpleado && domiciliosDelEmpleado}
                                        disabled={disable}
                                    />
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

