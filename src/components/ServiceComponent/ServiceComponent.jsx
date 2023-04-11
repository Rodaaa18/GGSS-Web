import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDatosExtras } from '../../redux/actions/datosExtrasActions';
import { getFamiliares } from '../../redux/actions/familiaActions';
import { getEstados, getEstadosCiviles, getEstudios, getPaises, getTiposDni } from '../../redux/actions/fetchActions';
import { addDetalleLic } from '../../redux/actions/licenciasActions';
import { getTrabajosAnteriores } from '../../redux/actions/trabajosAnterioresActions';
import NuevaVista from '../Home/NuevaVista'
import { urls } from './urls';

const ServiceComponent = () => {    
    const [ combosForm , setCombosForm ] = useState({});
    const [ renderButtons, setRenderButtons ] = useState(0);
    const newState = {...combosForm};
    const dispatch = useDispatch();
    const refetch = useSelector((state)=> state.fetchState.refetch);

    const handleFetch = async (url, action, state) => {
        if(state){
            await axios
          .get(url)
          .then((res) => {
            action(res.data.result);
            return
          })
          .catch((err) => {
            
          });
          return;
        }else{
            await axios
            .get(url)
            .then((res) => {
              dispatch(action(res.data.result));
            })
            .catch((err) => {
            });
        }       
    };
    const handleFetchComun = async (url, action, state) => {
        if(state){
            await axios
          .get(url)
          .then((res) => {
            action(res.data);
            return
          })
          .catch((err) => {
            
          });
          return;
        }else{
            await axios
            .get(url)
            .then((res) => {
              dispatch(action(res.data));
            })
            .catch((err) => {
            });
        }       
    };
    const handleFetchDom = async (url, propState, comun) => {        
        if(comun){
            await axios
                .get(url)
                .then((res) => {
                newState[propState] = (res.data.result);
                })
                .catch((err) => {
                    console.log(err)
                });
            }
            else{
                await axios
                .get(url)
                .then((res) => {
                    newState[propState] = (res.data.result);            
                })
                .catch((err) => {
                    console.log(err)
                }); 
            }               
        return;  
    };
  
    useEffect(()=>{
        handleFetch(urls.urlTiposDocumentos, getTiposDni);
        handleFetch(urls.urlEstadosCiviles, getEstadosCiviles);  
        handleFetch(urls.urlPaisesNac, getPaises);
        handleFetch(urls.urlEstados, getEstados);  
        handleFetch(urls.urlEstudios, getEstudios);  
        handleFetch(urls.urlTrabajosAnteriores, getTrabajosAnteriores);
        handleFetch(urls.urlFamiliares, getFamiliares);
        handleFetch(urls.urlDetalleLicenciasEmpleados, addDetalleLic);
        handleFetch(urls.urlDatosExtras, getDatosExtras);
        new Promise((resolve, reject)=>{
                resolve(
                    handleFetchDom("http://54.243.192.82/api/Calles", "calles"),
                    handleFetchDom("http://54.243.192.82/api/Departamentos",  "dptos"),
                    handleFetchDom("http://54.243.192.82/api/Provincias",  "provincias"),
                    handleFetchDom("http://54.243.192.82/api/Localidades",  "localidades"),
                    handleFetchDom("http://54.243.192.82/api/Barrios",  "barrios"),
                    handleFetchDom("http://54.243.192.82/api/Empleadores", "empleadores"),
                    handleFetchDom("http://54.243.192.82/api/Convenios", "convenios"),
                    handleFetchDom("http://54.243.192.82/api/Categorias", "categorias"),
                    handleFetchDom("http://54.243.192.82/api/Agrupamientos", "agrupamientos"),
                    handleFetchDom("http://54.243.192.82/api/Cargos", "cargos"),
                    handleFetchDom("http://54.243.192.82/api/TareasDesempeñadas", "tareasDesempeñadas"),
                    handleFetchDom("http://54.243.192.82/api/ModosContratacion", "modosContratacion"),
                    handleFetchDom("http://54.243.192.82/api/ModosLiquidacion", "modosLiquidacion"),
                    handleFetchDom("http://54.243.192.82/api/CentrosDeCostos", "centrosDeCosto"),
                    handleFetchDom("http://54.243.192.82/api/SectoresDptos/0,%201", "sectores", true),
                    handleFetchDom("http://54.243.192.82/api/ObrasSociales", "obrasSociales"),
                    handleFetchDom("http://54.243.192.82/api/FormasdePagos", "formasDePago"),
                    handleFetchDom("http://54.243.192.82/api/LugaresdePago", "lugaresDePago"),
                    handleFetchDom("http://54.243.192.82/api/Bancos", "bancos"),
                    handleFetchDom("http://54.243.192.82/api/Direcciones/DireccionesDatos/0,1", "direcciones", true),
                    handleFetchDom("http://54.243.192.82/api/Sindicatos", "sindicatos"),
                    handleFetchDom("http://54.243.192.82/api/Esquemas", "esquemas"),
                    handleFetchDom("http://54.243.192.82/api/ConceptosDatos/0,1", "conceptos", true)
                    )
            }
            ).then(
            setCombosForm(newState)
        )
    },[refetch])





  return (
    <div>
        <NuevaVista 
            refetch={refetch} 
            combosForm={combosForm}
            setCombosForm={setCombosForm}
            renderButtons={renderButtons} 
            setRenderButtons={setRenderButtons}
        />
    </div>
  )
}

export default ServiceComponent