import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { getEmpleados } from '../../redux/actions/emplyeActions';
import { setRefetch } from '../../redux/actions/fetchActions';
import Browser from '../Browser/Browser';
import ButtonCallModal from '../ButtonCallModal/ButtonCallModal';
import Personales from '../DatosPersonales/Personales';
import Documentacion from '../Documentacion/Documentacion';
import EmployeData from '../EmployeData/EmployeData';
import Extras from '../Extras/Extras';
import Familias from '../Familia/Familias';
import Licencias from '../Licencias/Licencias';
import Liquidacion from '../Liquidacion/Liquidacion';
import ChildModal from '../Modals/ChildModal';
import { objectEstadosCiviles, objectEstudios, objectTipoDocumento, propsModal, propsModalEstudios, propsModalTiposDocumento } from '../Modals/props';
import TrabajosAnteriores from '../TrabajosAnteriores/TrabajosAnteriores';
import "./NuevaVista.css"

const NuevaVista = ({combosForm , setCombosForm}) => {
    const [ modalValues, setModalValues ] = useState({});
    const [ nameModal, setNameModal ] = useState({});
    const [ index, setIndex ] = useState(0);
    const [ onOff, setOnOff ] = useState(true);
    const [ responses, setResponses ] = useState({});
    const [ disable, setDisable ] = useState(true);
    const [ transition, setTransition ] = useState(false);
    const [ valueItemModal , setValueItemModal ] = useState({});
    const [ modify, setModify ] = useState(false);
    const [ disableModal, setDisableMOdal ] = useState(true);
    const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);

    const dispatch = useDispatch();
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
    const estadosCiviles = useSelector((state)=> state.fetchState.estadosCiviles);
    const estudios = useSelector((state)=> state.fetchState.estudios);
    const tiposDocumento = useSelector((state)=> state.fetchState.tiposDocumento);
    const refetch = useSelector((state)=> state.fetchState.refetch);
    //#region -------------------------------------------------------------------------------------URLs Informes
    const urlReporteAsignacionesFamiliares = `http://54.243.192.82/api/ReporteAsignacionesFamiliares/${empleadoSeleccionado.iDempleado},%201`;
    const urlReporteResumenLegajo = `http://54.243.192.82/api/ResumenDeLegajo/Get?IDempleado=${empleadoSeleccionado.iDempleado}&idParametro=1`
    const urlReporteServicio = `http://54.243.192.82/api/ReporteServicio/${empleadoSeleccionado.iDempleado},%201`;
    const urlFichaEmpleado = `http://54.243.192.82/api/FichaEmpleado/Get?IDempleado=${empleadoSeleccionado.iDempleado}&idParametro=1`;

    function onClickInfo(empleado){
        if(empleado){
            return;
        }else{
            swal({
                title : "Error",
                text : "Debe seleccionar un Empleado",
                icon : "error"
            })
        }

    }
    //#endregion
    //#region -------------------------------------------------------------------------------------URLs Empleados
    const urlBasica = `http://54.243.192.82/api/Empleados?page=2000&ordered=true`;
    const urlEmpleadoPorApellido = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.formBrowser?.nombreApellido ? responses?.formBrowser?.nombreApellido  : null}&ordered=true`;
    const urlEmpleadoPorLegajo = `http://54.243.192.82/api/Empleados?records=10000&legajo=${responses?.formBrowser?.legajo ? responses?.formBrowser?.legajo : null}&ordered=true`;
    const urlEmpleadoApYLegajo = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.formBrowser?.nombreApellido  ? responses?.formBrowser?.nombreApellido  : null}&legajo=${responses?.formBrowser?.legajo ? responses?.formBrowser?.legajo : null}&ordered=true`;
    const urlApeLegOrdered = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.formBrowser?.nombreApellido  ? responses?.formBrowser?.nombreApellido  : null}&legajo=${responses?.formBrowser?.legajo? responses?.formBrowser?.legajo : null}&ordered=true`;
    //#endregion

    function onChangeValues(e, key){
        
        const newResponse = {...modalValues};
        newResponse[key] = e;
        setModalValues({
          ...newResponse
        });
    }

    async function getEmpleadosData(){
      if(responses?.formBrowser?.nombreApellido){
        await axios({method: 'get',
                      url: urlEmpleadoPorApellido,
                      timeout: 4000}).then((res) => {
          dispatch(getEmpleados(res.data.result));    
        });
        return;
      }
      else if(responses?.formBrowser?.legajo){
        await axios({method: 'get',
                    url: urlEmpleadoPorLegajo,
                    timeout: 4000}).then((res) => {
          dispatch(getEmpleados(res.data.result));    
        });
        return;
      }else if(responses?.formBrowser?.nombreApellido   && responses?.formBrowser?.legajo){
        await axios({method: 'get',
                    url: urlEmpleadoApYLegajo,
                    timeout: 4000}).then((res) => {
            dispatch(getEmpleados(res.data.result));    
        });
        return;
      }else{
        await axios.get(urlBasica).then((res) => {
            console.log(res)
          dispatch(getEmpleados(res.data.result));
    
        });
      }      
    }
    const handleClickClose=(nameModalProp)=>{
        let newState = {...nameModal}
    
        newState[nameModalProp] = false;
        setNameModal(newState);
        setTransition(true);
    }

    useEffect(()=>{
        getEmpleadosData();
    },[responses?.formBrowser?.nombreApellido , responses?.formBrowser?.legajo])

    //#region -------------------------------------------------------------------------------------Modal Functions
    async function sendModalData(url, body,bodyUpdate, id){
        if(modify){
            try{
                await axios
                .put(`${url}/${id}`, bodyUpdate)
                .then((res)=>{
                    if(res.status === 200){
                        setRefetch(!refetch)
                        setModify(false);
                        setDisableMOdal(true)
                        return swal({
                            title : "Ok",
                            text : "Item actualizado con éxito",
                            icon : "success"
                        });
                    }
                    return;
                })
            }catch(err){
                setModify(false);
                setDisableMOdal(true)
                return swal({
                    title : "Error",
                    text : "Error al actualizar el item" + `${err}`,
                    icon : "error"
                });
            }
            return;
        }
        try{
            //debugger;
            await axios
            .post(url, body)
            .then((res)=>{
                if(res.status === 200){
                    setRefetch(!refetch)
                    setDisableMOdal(true)
                    return swal({
                        title : "Ok",
                        text : "Item guardado con éxito",
                        icon : "success"
                    });
                }
            })
        }catch(err){
            setDisableMOdal(true)
            return swal({
                title : "Error",
                text : "Error al guardar el item" + `${err}`,
                icon : "error"
            });
        }
    }
    async function deleteItemModal(url, id){
        swal({
              title: "Desea eliminar el item?",
              text: "Si confirma el item será borrado de la Base de Datos",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then( async (willDelete) => {
              if (willDelete) {
                    try{
                    await axios
                        .delete(`${url}/${id}`)
                        .then((res)=>{
                            if(res.status === 200){
                                setRefetch(!refetch)
                                setDisableMOdal(true)
                                return swal({
                                    title : "Ok",
                                    text : "Item eliminado con éxito",
                                    icon : "success"
                                });
                            }
                            return;
                        })
                }catch(err){
                    setDisableMOdal(true)
                    return swal({
                        title : "Error",
                        text : "Error al eliminar el item" + `${err}`,
                        icon : "error"
                    });
                }
              } else {
                swal("Puede seguir operando");
              }
            });
        
    }
    //URLs Modales
    const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles";
    const urlEstudios = "http://54.243.192.82/api/Estudios"
    const urlTiposDocumentos = "http://54.243.192.82/api/TiposDocumento";
    //Estados Civiles
    const idEstadoCivil = ((estadosCiviles && estadosCiviles[estadosCiviles.length -1] !== undefined && (estadosCiviles[estadosCiviles.length -1].idEstadoCivil))+1)
    const bodyEstadosCiviles = {
        idEstadoCivil : idEstadoCivil,
        masculino : modalValues?.masculino,
        femenino : modalValues?.femenino
    }
    const bodyUpdateEstadosCiviles = {
        idEstadoCivil : valueItemModal?.idEstadoCivil,
        masculino : modalValues?.masculino,
        femenino : modalValues?.femenino
    }
    //Estudios
    const idEstudios = ((estudios && estudios[estudios.length -1] !== undefined && (estudios[estudios.length -1].iDestudios))+1)
    const bodyEstudios = {
        "iDestudios": idEstudios,
        "estudiosNivel": modalValues?.estudiosNivel,
        "id": null
    }
    const bodyUpdateEstudios = {
        "iDestudios": valueItemModal?.iDestudios,
        "estudiosNivel": modalValues?.estudiosNivel,
        "id": null
    }
    //TiposDocumento
    const iDtipoDocumento = ((tiposDocumento && tiposDocumento[tiposDocumento.length -1] !== undefined && (tiposDocumento[tiposDocumento.length -1].iDtipoDocumento))+1)
    const bodyTiposDocumento = {
        "iDtipoDocumento": iDtipoDocumento,
        "tipoDocumento": modalValues?.tipoDocumento,
        "id": null
    }
    const bodyUpdateTiposDocumento = {
        "iDtipoDocumento": valueItemModal?.iDtipoDocumento,
        "tipoDocumento": modalValues?.tipoDocumento,
        "id": null
    }
    
    //#endregion
  
    console.log(responses)
    return (
    <><div className="offcanvas offcanvas-start offcanvasNav" tabIndex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
    <div className="offcanvas-header ">
        <h6 className="offcanvas-title d-none d-sm-block menuTitle" id="offcanvas">Menu</h6>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body px-0 ">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start " id="menu">           
            <li className="nav-item">
                <a  className="nav-link text-truncate colorFont" onClick={()=> { setOnOff(!onOff);setIndex(1)}}>
                    <i className="fs-5 bi-person "></i><span className="ms-1 d-none d-sm-inline colorFont">Cargar Empleado</span>
                </a>
            </li>
            <li className="nav-item">
                <a  className="nav-link text-truncate colorFont" onClick={()=> setIndex(2)}>
                    <i className="fs-5 bi-people-fill "></i><span className="ms-1 d-none d-sm-inline colorFont">Familia</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-truncate colorFont" onClick={()=> setIndex(3)}>
                    <i className="fs-5 bi-sort-up-alt "></i><span className="ms-1 d-none d-sm-inline colorFont">Liquidación</span>
                </a>
            </li>
            <li>
                <a data-bs-toggle="collapse" className="nav-link text-truncate colorFont" onClick={()=> setIndex(4)}>
                    <i className="fs-5 bi-journal-arrow-up"></i><span className="ms-1 d-none d-sm-inline">Trabajos Anteriores</span> </a>
            </li>
            <li>
                <a className="nav-link text-truncate colorFont" onClick={()=> setIndex(5)}>
                    <i className="fs-5 bi-hammer"></i><span className="ms-1 d-none d-sm-inline">Documentación</span></a>
            </li>            
            <li>
                <a  className="nav-link text-truncate colorFont" onClick={()=> setIndex(6)}>
                    <i className="fs-5 bi-folder2-open"></i><span className="ms-1 d-none d-sm-inline">Licencias</span></a>
            </li>
            <li>
                <a href="#" className="nav-link text-truncate colorFont" onClick={()=> setIndex(7)}>
                    <i className="fs-5 bi-explicit-fill"></i><span className="ms-1 d-none d-sm-inline">Extras</span> </a>
            </li>
            <li className="dropdown">
                <a href="#" className="nav-link dropdown-toggle  text-truncate colorFont" id="dropdown" data-bs-toggle="dropdown" aria-expanded={false}>
                    <i className="fs-5 bi-graph-up"></i><span className="ms-1 d-none d-sm-inline">Informes</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    <li><a target="_blank" onClick={()=>onClickInfo(empleadoSeleccionado)} className="dropdown-item colorFont d-flex flex-row justify-content-start align-items-center flex-wrap btnInformes" rel="noreferrer" href={empleadoSeleccionado ? urlReporteAsignacionesFamiliares : null}>Constancia de Asignaciones Familiares</a></li>
                    <li><a target="_blank" onClick={()=>onClickInfo(empleadoSeleccionado)} className="dropdown-item colorFont d-flex flex-row justify-content-start align-items-center flex-wrap btnInformes" rel="noreferrer" href={empleadoSeleccionado ? urlReporteResumenLegajo : null}>Resumen Legajo Empleado</a></li>
                    <li><a target="_blank" onClick={()=>onClickInfo(empleadoSeleccionado)} className="dropdown-item colorFont d-flex flex-row justify-content-start align-items-center flex-wrap btnInformes" rel="noreferrer" href={empleadoSeleccionado ? urlReporteServicio : null}>Certificado de Servicio/Oficio</a></li>
                    <li><a target="_blank" onClick={()=>onClickInfo(empleadoSeleccionado)} className="dropdown-item colorFont d-flex flex-row justify-content-start align-items-center flex-wrap btnInformes" rel="noreferrer" href={empleadoSeleccionado ? urlFichaEmpleado : null}>Ficha Empleado</a></li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className="nav-link dropdown-toggle  text-truncate colorFont" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fs-5 bi-graph-up"></i><span className="ms-1 d-none d-sm-inline">Tabla de Datos</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    <li>
                        <ButtonCallModal nameModal={nameModal} setNameModal={setNameModal}  nameModalProp="estadosCiviles"  setTransition={setTransition} nameButton="Estados Civiles">
                            <ChildModal 
                                modalValues={modalValues} 
                                onChangeValues={onChangeValues}  
                                valueItemModal={valueItemModal} 
                                setValueItemModal={setValueItemModal} 
                                nameModalProp="estadosCiviles" 
                                handleClickClose={handleClickClose} 
                                setTransition={setTransition} 
                                array={estadosCiviles && estadosCiviles}  
                                nameModal="Estados Civiles" 
                                propsModal={propsModal} 
                                optionsInputs={objectEstadosCiviles} 
                                transition={transition}
                                functionAdd={sendModalData}
                                urlApi={urlEstadosCiviles}
                                bodyPetition ={bodyEstadosCiviles}
                                bodyUpdate={bodyUpdateEstadosCiviles}
                                modify={modify} 
                                setModify={setModify}
                                idAModificar={valueItemModal?.idEstadoCivil}
                                functionDelete={deleteItemModal}
                                disableModal={disableModal}
                                setDisableMOdal={setDisableMOdal}
                            />
                        </ButtonCallModal>
                    </li>    
                    <li>
                        <ButtonCallModal nameModal={nameModal} setNameModal={setNameModal}  nameModalProp="estudios" setTransition={setTransition} nameButton="Estudios">
                            <ChildModal 
                                modalValues={modalValues} 
                                onChangeValues={onChangeValues} 
                                valueItemModal={valueItemModal} 
                                setValueItemModal={setValueItemModal} 
                                nameModalProp="estudios" 
                                handleClickClose={handleClickClose} 
                                setTransition={setTransition} 
                                array={estudios && estudios}  
                                nameModal="Estudios" 
                                propsModal={propsModalEstudios} 
                                optionsInputs={objectEstudios} 
                                transition={transition}
                                functionAdd={sendModalData}
                                urlApi={urlEstudios}
                                bodyPetition ={bodyEstudios}
                                bodyUpdate={bodyUpdateEstudios}
                                modify={modify} 
                                setModify={setModify}
                                idAModificar={valueItemModal?.iDestudios}
                                functionDelete={deleteItemModal}
                                disableModal={disableModal}
                                setDisableMOdal={setDisableMOdal}
                            />
                        </ButtonCallModal>
                    </li>
                    <li>
                        <ButtonCallModal nameModal={nameModal} setNameModal={setNameModal}  nameModalProp="tiposDocumentos" setTransition={setTransition} nameButton="Tipos Documento">
                            <ChildModal 
                                modalValues={modalValues}  
                                onChangeValues={onChangeValues} 
                                valueItemModal={valueItemModal} 
                                setValueItemModal={setValueItemModal} 
                                nameModalProp="tiposDocumentos" 
                                handleClickClose={handleClickClose} 
                                setTransition={setTransition} 
                                array={tiposDocumento && tiposDocumento}  
                                nameModal="Tipos Documento" 
                                propsModal={propsModalTiposDocumento} 
                                optionsInputs={objectTipoDocumento} 
                                transition={transition}
                                functionAdd={sendModalData}
                                urlApi={urlTiposDocumentos}
                                bodyPetition ={bodyTiposDocumento}
                                bodyUpdate={bodyUpdateTiposDocumento}
                                modify={modify} 
                                setModify={setModify}
                                idAModificar={valueItemModal?.iDtipoDocumento}
                                functionDelete={deleteItemModal}
                                disableModal={disableModal}
                                setDisableMOdal={setDisableMOdal}
                            />
                        </ButtonCallModal>
                    </li>                
                </ul>
            </li>            
        </ul>
    </div>
</div>
<div className="container-fluid">
    <div className="row">
        <div className="col min-vh-100 py-3">
            
            <button className="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                <i className="bi bi-list fs-3 colorFont" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            </button>
            
            <div className='container-flex' >
                <div className='row'>                    
                    <div className='col-xl-3 col-lg-12 col-md-12'>
                        <Browser setResponses={setResponses} responses={responses} setDisable={setDisable}/>
                    </div>
                    <div className='col-xl-9 col-lg-12 col-md-12'>
                        <EmployeData />
                        {
                            index === 1 && 
                            <div className='col-xl-12 col-lg-12 col-md-12'>
                                <Personales combosForm={combosForm} setCombosForm={setCombosForm} setResponses={setResponses} responses={responses} disable={disable} onOff={onOff} index={index} ImageSelectedPrevious={ImageSelectedPrevious} setImageSelectedPrevious={setImageSelectedPrevious} />
                            </div>
                        }
                        {
                            index === 2 && 
                            <div className='col-xl-12 col-lg-12 col-md-12'>
                                <Familias index={index} setResponses={setResponses} responses={responses}/>
                            </div>
                        }
                        {
                            index === 3 && 
                            <div className='col-xl-12 col-lg-12 col-md-12'>
                                <Liquidacion combosForm={combosForm} setCombosForm={setCombosForm} index={index} setResponses={setResponses} responses={responses}/>
                            </div>
                        }
                        {
                            index === 4 && 
                            <div className='col-xl-12 col-lg-12 col-md-12'>
                                <TrabajosAnteriores index={index} setResponses={setResponses} responses={responses}/>
                            </div>
                        }
                        {
                            index === 5 && 
                            <div className='col-xl-12 col-lg-12 col-md-12'>
                                <Documentacion index={index} setResponses={setResponses} responses={responses}/>
                            </div>
                        }
                        {
                            index === 6 && 
                            <div className='col-xl-12 col-lg-12 col-md-12'>
                                <Licencias index={index} setResponses={setResponses} responses={responses}/>
                            </div>
                        }
                        {
                            index === 7 && 
                            <div className='col-xl-12 col-lg-12 col-md-12'>
                                <Extras index={index} setResponses={setResponses} responses={responses}/>
                            </div>
                        }
                    </div>
                    <div className='col-xl-12 d-flex flex-row-reverse align-items-center'>
                        <button className='btn btn-success m-1'>
                            <span>Aceptar</span>
                        </button>
                        <button className='btn btn-danger m-1'>
                            <span>Cancelar</span>
                        </button>
                    </div>
                </div>
                </div> 
        </div>
    </div>
</div></>

  )
}

export default NuevaVista