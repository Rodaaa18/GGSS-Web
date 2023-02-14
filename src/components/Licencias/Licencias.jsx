import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { inputSelectedoptionLicencias } from '../../classes/classes'
import { setRefetch } from '../../redux/actions/fetchActions'
import { getLicenciaEmpleado, optionSelected } from '../../redux/actions/licenciasActions'
import InputCbo from '../Inputs/InputCbo/InputCbo'
import FieldSet from './FieldSet/FieldSet'

const Licencias = ({disable,  index, responses, setResponses}) => {
    const [ formLicencias, setFormLicencias ] = useState(responses["formLicencias"]);
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
    const licenciasDelEmpleado = useSelector((state)=> state.licenciasState.licenciasEmpleado);
    const detalleLicencia = useSelector((state)=> state.licenciasState.detalleLicencia);
    const dispatch = useDispatch();
    const refetch = useSelector((state)=> state.fetchState.refetch);
    console.log(detalleLicencia)

    function onChangeValues(e, key){
        const newResponse = {...formLicencias};
        newResponse[key] = e;
        setFormLicencias({
          ...newResponse
        });
    }

    async function getLicenciasEmpleado(){
        if(empleadoSeleccionado){
            try{
                await axios.get(`http://54.243.192.82/api/MostrarDatosPorEmpleado/${empleadoSeleccionado?.iDempleado}`)
                .then((res)=>{
                    console.log(`http://54.243.192.82/api/MostrarDatosPorEmpleado/${empleadoSeleccionado?.iDempleado}`)
                    dispatch(getLicenciaEmpleado(res.data));
                })
            }catch(err){
                return err;
            }
        }
        
    }
    function sendData(url,  action){
        try{
            axios.post(url)
        .then((res)=>{
           if(res.status === 200){
            dispatch(action(res.data));
            dispatch(setRefetch(!refetch))
            swal({
                title : "Ok",
                text : "Licencia agregada con éxito",
                icon : "success"
            })
           }
            
        })
        }catch(err){
            swal({
                title: "Error",
                  text: `Error al insertar la Licencia, error: ${err}`,
                  icon: "error",
            })
        }
        
    }
    useEffect(()=>{
        getLicenciasEmpleado();
    },[empleadoSeleccionado?.iDempleado, refetch])

    useEffect(() => {  
        setResponses({
          ...responses,
          formLicencias
        });    
    },[formLicencias]);
    const año = new Date().getFullYear();
    const años = Array.from(new Array(123), (val, index) => año - index);
    const newAños = años && años.map((año)=>{
        return (
            {
                "año" : año 
            }
        )
    })
    const opciones = [{
        opcion : "1 - Disponibles por Periodo",        
    },{
        opcion : "2 - Solicita Nueva Licencia",        
    },{
        opcion : "3 - Prorroga Vencimiento",        
    },{
        opcion : "4 - Suspende Licencia",        
    }]
  return (
    index === 6 && 
    <section className={index === 6 ? "transitionClassUp" : "transitionClassneDone"}>
    <div className='container-flex'>  
    <fieldset className="border p-2">
            <legend className="float-none w-auto p-2 contenedorFieldSet">
                <i className="fs-5 bi-folder2-open "></i><span className="ms-1 d-none d-sm-inline colorFont">Licencias</span>
            </legend> 
        <div className='row'>
            <div className='col-xl-12'>
                <b>
                    Total días disponibles : 
                    10
                </b>
                {/* <b>
                    Total días disponibles : 
                    {licenciaEmpleado && licenciaEmpleado.diasDisponibles}
                </b> */}
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center col-xl-12 contenedorLicencias'>
                <InputCbo 
                    licencia={true}
                    clasess={inputSelectedoptionLicencias}
                    display={false} 
                    idInput="inputOpcionsLicencias" 
                    value={[]} 
                    propArrayOpFem="opcion" 
                    array={opciones} 
                    valueId="opcion" 
                    nameLabel="Opciones:" 
                    nameButton="..." 
                    onChange={onChangeValues} 
                    provinciaAction={optionSelected} 
                    idSelected = {formLicencias?.inputOpcionsLicencias && formLicencias?.inputOpcionsLicencias}
                    disabled={disable} 
                />
            </div>
            <div className='col-xl-12 mt-2'>
                <FieldSet 
                    refetch={refetch} 
                    setRefectch={setRefetch} 
                    formLicencias={formLicencias} 
                    sendData={sendData} 
                    detalleLicencia={detalleLicencia && detalleLicencia} 
                    licenciaDelEmpleado={licenciasDelEmpleado && licenciasDelEmpleado} 
                    array={newAños} 
                    valueId="año" 
                    propArrayOpFem="año" 
                    opciones={opciones} 
                    selectedOption={formLicencias?.inputOpcionsLicencias && formLicencias?.inputOpcionsLicencias} 
                    onChange={onChangeValues} 
                    valueForm={formLicencias && formLicencias} 
                    disabled={disable} 
                />
            </div>            
        </div>
    </fieldset>
    </div>
    </section>
  )
}

export default Licencias