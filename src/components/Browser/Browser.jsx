import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { addOneEmploye, getEmpleados } from '../../redux/actions/emplyeActions';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/employeTypes';
import { getEmployeById } from '../../services/fetchAPI';
import "./Browser.css";


const Browser = ({responses, setResponses, setDisable}) => {
    const [ nameInput, setNameInput ] = useState("");
    const [ legajoInput, setLegajoInput ] = useState();
    const dispatch = useDispatch();
    const urlEmpleados = "http://54.243.192.82/api/Empleados?records=100&ordered=true";
    const empleados = useSelector((state)=> state.employeState.employes);
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);

    const url = `http://54.243.192.82/api/Empleados?page=2000&ordered=true`;
    const urlEmpleadoPorApellido = `http://54.243.192.82/api/Empleados?records=10000&filter=${nameInput ? nameInput : null}&ordered=true`;
    const urlEmpleadoPorLegajo = `http://54.243.192.82/api/Empleados?records=10000&legajo=${legajoInput ? legajoInput : null}&ordered=true`;
    const urlEmpleadoApYLegajo = `http://54.243.192.82/api/Empleados?records=10000&filter=${nameInput ? nameInput : null}&legajo=${legajoInput ? legajoInput : null}&ordered=true`;
    const urlApeLegOrdered = `http://54.243.192.82/api/Empleados?records=10000&filter=${nameInput ? nameInput : null}&legajo=${legajoInput ? legajoInput : null}&ordered=true`;

    async function getEmpleadosData(){
      if(nameInput){
        await axios({method: 'get',
                      url: urlEmpleadoPorApellido,
                      timeout: 1000}).then((res) => {
          dispatch(getEmpleados(res.data.result));    
        });
        return;
      }
      else if(legajoInput){
        await axios({method: 'get',
                    url: urlEmpleadoPorLegajo,
                    timeout: 1000}).then((res) => {
          dispatch(getEmpleados(res.data.result));    
        });
        return;
      }else if(nameInput && legajoInput){
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
    },[nameInput, legajoInput])

    function onChange(e, setStates){
        setStates(e.target.value)
    }

    function onSelect(e, name, idEmpleado) {        
        //dispatch(recharge(!recharged))
        getEmployeById(empleados, idEmpleado).then((res) => {          
          dispatch(addOneEmploye(res[0]));
        });
      }
      function habilitaEdit() {
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
    
        let formData = { ...responses.formDatosPersonales };
    
        const inputsArray = Object.entries(formData);
    
        const formDatosPersonale = inputsArray.map(([key]) => [key, ""]);
    
        const formDatosPersonales = Object.fromEntries(formDatosPersonale);
        setResponses({
          ...responses,
          formDatosPersonales
        });
        setDisable(false);    
      }
      function habilitaUpdate(e) {
        e.preventDefault();
        if (empleadoSeleccionado?.iDempleado) {
          return setDisable(false);
        }
        swal({
          title: "Error",
          text: `Debe seleccionar un empleado`,
          icon: "error",
        });
      }
  return (
    <><fieldset className="border p-2">
      <legend className="float-none w-auto p-2 contenedorFieldSet">
        <i className="fs-5 bi-search "></i><span className="ms-1 d-none d-sm-inline colorFont">Buscar Empleado</span>
      </legend>
      <div className='container-flex w-100'>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12 '>
            <input
              onChange={(e) => onChange(e, setLegajoInput)}
              value={legajoInput}
              className='w-100 '
              placeholder='Legajo'
              type="text"
              name="legajo"
              id="legajo" />
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12 mt-1 '>
            <input
              onChange={(e) => onChange(e, setNameInput)}
              value={nameInput}
              className='w-100 '
              placeholder='Apellido'
              type="text"
              name="nombreApellido"
              id="nombreApellido" />
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12 mt-1 '>
            <select
              defaultValue={[]}
              className="form-select  mt-1 selectMenu "
              multiple
              aria-label="multiple select example"
              onKeyDown={(e) => onSelect(e, e.target.value.split(',')[0], Number(e.target.value.split(',')[1]))}
              onKeyUp={(e) => onSelect(e, e.target.value.split(',')[0], Number(e.target.value.split(',')[1]))}
            >
              {empleados &&
                empleados.map((emp, i) => {
                  return (
                    <option
                      key={i}
                      onClick={(e) => onSelect(e, emp.apellido, emp.iDempleado)}
                      value={`${emp.apellido},${emp.iDempleado}`}
                    >{`${emp.apellido}, ${emp.nombres}`}</option>
                  );
                })}
            </select>
          </div>
        </div>
      </div>
    </fieldset><div className=" extendButtons">
        <div className="row">
          <div className="col-xl-2 d-flex flex-row justify-content-start align-items-center m-1">
            <button
              className={`btn btn-danger btn-sm d-flex justify-content-center m-1  align-items- newClass`}
              onClick={habilitaEdit}
            >
              Agregar
            </button>
            <button
              className={`btn btn-danger btn-sm d-flex justify-content-center m-1  align-items- newClass`}
              onClick={(e) => habilitaUpdate(e)}
            >
              Modificar
            </button>
            <button
              className={`btn btn-danger btn-sm d-flex justify-content-center m-1  align-items- newClass`}
              //onClick={(e) => habilitaUpdate(e)}
            >
              Eliminar
            </button>
          </div>
          <div className='col-xl-9 d-flex flex-row-reverse justify-content-start align-items-center m-1'>
            <button
              className={`btn btn-danger btn-sm d-flex justify-content-center m-1  align-items- newClass`}
              //onClick={(e) => habilitaUpdate(e)}
            >
              Aceptar
            </button>
            <button
              className={`btn btn-danger btn-sm d-flex justify-content-center m-1  align-items- newClass`}
              //onClick={(e) => habilitaUpdate(e)}
            >
              Cancelar
            </button>
          </div>
        </div>        
      </div></>
  )
}

export default Browser