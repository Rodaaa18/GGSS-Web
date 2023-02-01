import React from 'react'
import { useSelector } from 'react-redux';
import InputEmpData from '../Inputs/InputEmpData/InputEmpData'
import "./EmployeData.css";

const EmployeData = ({disabled}) => {
    const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
  return (
    <fieldset className="border p-1">
      <legend className="float-none w-auto p-2 contenedorFieldSet">
        <i className="fs-5 bi-person "></i><span className="ms-1 d-none d-sm-inline colorFont">Info Empleado</span>
      </legend>
    <div className='container-flex d-flex flex-row justify-content-start align-items-center'>
        <div className='row w-100'>
            <div className='col-xl-2'>
                <img src={empleadoSeleccionado && empleadoSeleccionado.obsFechaIngreso} alt=""className='border border-1 imgData' />
            </div>
            <div className='col-xl-5 d-flex flex-column justify-content-start align-items-center '>
                <InputEmpData
                    idInput=""
                    inputValue=
                    {
                        empleadoSeleccionado && empleadoSeleccionado.legajo
                    }
                    nameLabel="Legajo: "
                    disabled={disabled}
                />
                <InputEmpData
                    idInput=""
                    inputValue=
                    {
                        empleadoSeleccionado && empleadoSeleccionado.apellido
                    }
                    nameLabel="Apellidos: "
                    disabled={disabled}
                />
                <InputEmpData
                    idInput=""
                    inputValue=
                    {
                        empleadoSeleccionado && empleadoSeleccionado.nroDocumento
                    }
                    nameLabel="NroDoc: "
                    disabled={disabled}
                />
            </div>
            <div className='col-xl-5 d-flex flex-column justify-content-start align-items-center '>
                <InputEmpData
                    idInput=""
                    inputValue=
                    {
                        empleadoSeleccionado && empleadoSeleccionado.nroDocumento
                    }
                    nameLabel="Estado: "
                    disabled={disabled}
                />
                <InputEmpData
                    idInput=""
                    inputValue=
                    {
                        empleadoSeleccionado && empleadoSeleccionado.nombres
                    }
                    nameLabel="Nombres: "
                    disabled={disabled}
                />
            </div>
        </div>
    </div>
    </fieldset>
  )
}

export default EmployeData