import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getEmpleados } from '../../redux/actions/emplyeActions';
import Browser from '../Browser/Browser';
import Personales from '../DatosPersonales/Personales';
import EmployeData from '../EmployeData/EmployeData';
import Familias from '../Familia/Familias';
import Liquidacion from '../Liquidacion/Liquidacion';
import "./NuevaVista.css"

const NuevaVista = () => {

    const [ index, setIndex ] = useState(0);
    const [ onOff, setOnOff ] = useState(true);
    const [ responses, setResponses ] = useState({});
    const [ disable, setDisable ] = useState(true);
    const dispatch = useDispatch();

    
    const url = `http://54.243.192.82/api/Empleados?page=2000&ordered=true`;
    const urlEmpleadoPorApellido = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.formBrowser?.nombreApellido ? responses?.formBrowser?.nombreApellido  : null}&ordered=true`;
    const urlEmpleadoPorLegajo = `http://54.243.192.82/api/Empleados?records=10000&legajo=${responses?.formBrowser?.legajo ? responses?.formBrowser?.legajo : null}&ordered=true`;
    const urlEmpleadoApYLegajo = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.formBrowser?.nombreApellido  ? responses?.formBrowser?.nombreApellido  : null}&legajo=${responses?.formBrowser?.legajo ? responses?.formBrowser?.legajo : null}&ordered=true`;
    const urlApeLegOrdered = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.formBrowser?.nombreApellido  ? responses?.formBrowser?.nombreApellido  : null}&legajo=${responses?.formBrowser?.legajo? responses?.formBrowser?.legajo : null}&ordered=true`;

    async function getEmpleadosData(){
      if(responses?.formBrowser?.nombreApellido){
        await axios({method: 'get',
                      url: urlEmpleadoPorApellido,
                      timeout: 1000}).then((res) => {
          dispatch(getEmpleados(res.data.result));    
        });
        return;
      }
      else if(responses?.formBrowser?.legajo){
        await axios({method: 'get',
                    url: urlEmpleadoPorLegajo,
                    timeout: 1000}).then((res) => {
          dispatch(getEmpleados(res.data.result));    
        });
        return;
      }else if(responses?.formBrowser?.nombreApellido   && responses?.formBrowser?.legajo){
        await axios({method: 'get',
                    url: urlEmpleadoApYLegajo,
                    timeout: 1000}).then((res) => {
            dispatch(getEmpleados(res.data.result));    
        });
        return;
      }else{
        await axios.get(url).then((res) => {

          dispatch(getEmpleados(res.data.result));
    
        });
      }      
    }

    useEffect(()=>{
        getEmpleadosData();
    },[responses?.formBrowser?.nombreApellido , responses?.formBrowser?.legajo])

  return (
    <><div className="offcanvas offcanvas-start offcanvasNav" tabIndex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
    <div className="offcanvas-header ">
        <h6 className="offcanvas-title d-none d-sm-block menuTitle" id="offcanvas">Menu</h6>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body px-0 ">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start " id="menu">
            {/*  <li className="nav-item">
                <a href="#" className="nav-link text-truncate colorFont" onClick={()=> { setOnOff(!onOff);setIndex(0)}}>
                    <i className="fs-5 bi-search "></i><span className="ms-1 d-none d-sm-inline colorFont">Buscar Empleado</span>
                </a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Nombre/Legajo" aria-label="Search"/>                    
                </form>
                <div class="list-group  me-2">
                        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            The current link item
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                        <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                        <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
                    </div>
            </li> */}
            <li className="nav-item">
                <a href="#" className="nav-link text-truncate colorFont" onClick={()=> { setOnOff(!onOff);setIndex(1)}}>
                    <i className="fs-5 bi-person "></i><span className="ms-1 d-none d-sm-inline colorFont">Cargar Empleado</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-truncate colorFont" onClick={()=> setIndex(2)}>
                    <i className="fs-5 bi-people-fill "></i><span className="ms-1 d-none d-sm-inline colorFont">Familia</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-truncate colorFont" onClick={()=> setIndex(3)}>
                    <i className="fs-5 bi-sort-up-alt "></i><span className="ms-1 d-none d-sm-inline colorFont">Liquidación</span>
                </a>
            </li>
            <li>
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate colorFont" onClick={()=> setIndex(2)}>
                    <i className="fs-5 bi-journal-arrow-up"></i><span className="ms-1 d-none d-sm-inline">Licencias</span> </a>
            </li>
            <li>
                <a href="#" className="nav-link text-truncate colorFont" onClick={()=> setIndex(4)}>
                    <i className="fs-5 bi-hammer"></i><span className="ms-1 d-none d-sm-inline">Trabajos Anteriores</span></a>
            </li>
            <li className="dropdown">
                <a href="#" className="nav-link dropdown-toggle  text-truncate colorFont" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fs-5 bi-graph-up"></i><span className="ms-1 d-none d-sm-inline">Informes</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    <li><a className="dropdown-item colorFont" href="#">New project...</a></li>
                    <li><a className="dropdown-item colorFont" href="#">Settings</a></li>
                    <li><a className="dropdown-item colorFont" href="#">Profile</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item colorFont" href="#">Sign out</a></li>
                </ul>
            </li>
            <li>
                <a href="#" className="nav-link text-truncate colorFont" onClick={()=> setIndex(5)}>
                    <i className="fs-5 bi-folder2-open"></i><span className="ms-1 d-none d-sm-inline">Documentacion</span></a>
            </li>
            <li>
                <a href="#" className="nav-link text-truncate colorFont" onClick={()=> setIndex(6)}>
                    <i className="fs-5 bi-explicit-fill"></i><span className="ms-1 d-none d-sm-inline">Extras</span> </a>
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
                            index === 1 && <div className='col-xl-12 col-lg-12 col-md-12'><Personales setResponses={setResponses} responses={responses} disable={disable} onOff={onOff} index={index}/></div>
                        }
                        {
                            index === 2 && <div className='col-xl-12 col-lg-12 col-md-12'><Familias index={index} setResponses={setResponses} responses={responses}/></div>
                        }
                        {
                            index === 3 && <div className='col-xl-12 col-lg-12 col-md-12'><Liquidacion index={index} setResponses={setResponses} responses={responses}/></div>
                        }
                    </div>
                </div>
                   

                          
                 
                </div> 
            
        </div>
    </div>
</div></>






   /*  <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            Content area...
        </div>
    </div>
</div> */

  )
}

export default NuevaVista