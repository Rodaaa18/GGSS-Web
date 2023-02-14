import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { addNewLicencia, deleteLicencia, saveIdsLic, updateLicencia } from "../../../redux/actions/licenciasActions";
import TableLicencias from "../../Tables/TableLicencias";
import TableSuspenLicencia from "../../Tables/TableSuspenLicencia";
import FechaSuspencion from "./Childs/FechaSuspencion";
import NuevaLicencia from "./Childs/NuevaLicencia";
import PorPeriodo from "./Childs/PorPeriodo";
import Prorroga from "./Childs/Prorroga";
import "./FieldSet.css";

const FieldSet = ({
  array,
  valueId,
  propArrayOpFem,
  licenciaDelEmpleado,
  selectedOption,
  onChange,
  valueForm,
  detalleLicencia,
  sendData,
  formLicencias,
  setRefectch,
  refetch,
  disabled
}) => {
  const columns1 = [
    "Seleccionar",
    "Año",
    "Días Totales",
    "Tomados",
    "Restan",
    "Vto",
    "Prórroga",
    "Resolución",
    "Disponibles",
  ];
  const columns2 = ["Seleccionar", "Desde", "Hasta", "Fecha Suspensión"];

  const empleadoSeleccionado = useSelector((state)=> state.employeState.employe);
  const licenciuaSelected =  useSelector((state)=> state.licenciasState.licenciaSelected);
  const detalleSelected = useSelector((state) => state.licenciasState.detalleSelected);

  //const licenciaDelEmpleado = useSelector((state)=> state.licenciasState.licenciasEmpleado);
  console.log(formLicencias)
  

  const url = `http://54.243.192.82/api/ActualizaDisponibles/0?idEmpleado=${empleadoSeleccionado.iDempleado}&anio=${formLicencias?.inputCboAñosLicencia}&diasDisponiblesTotales=${formLicencias?.inputCantDiasDispLicencia}&fechaVencimiento=${formLicencias?.inputVencimientoLicencias}&newId=0`
  const urlCreateLicencia = `http://54.243.192.82/api/ActualizaDisponibles/0?idEmpleado=${empleadoSeleccionado.iDempleado}&anio=${formLicencias?.inputCboAñosLicencia}&diasDisponiblesTotales=${formLicencias?.inputCantDiasDispLicencia}&fechaVencimiento=${formLicencias?.inputVencimientoLicencias}&newId=0`;

  const urlLicencias = "http://54.243.192.82/api/ModificarDatos";
  //const detalleSeleccionado = useSelector((state) => state.licenciasState.detalleSelect);
  //const idSelected = useSelector((state)=> state.licenciasState.idSelected);

  /* const urlCreateDetalleLicencia = `http://54.243.192.82/api/DetalleLicenciasEmpleados?IdDetalleLicenciaEmpleado=0&IdLicenciaEmpleado=${
    idSelected
  }&Desde=${formLicencias?.inputDesdeSolicitaLic}&Hasta=${
    formLicencias?.inputHastaSolicitaLic
  }`; */
  const urlDetalleLicenciaEmpleados =
    "http://54.243.192.82/api/DetalleLicenciasEmpleados";
  const urlDeleteLicencia = "http://54.243.192.82/api/EliminarLicenciaPorId";
  const dispatch = useDispatch();
  const urlLicenciaEmpleados = "http://54.243.192.82/api/MostrarDatosLicencias";
  //const licenciasDelEmpleado = useSelector((state)=> state.licenciasState.licenciasEmpleado);

  
  const urlCreateDetalleLicencia = `http://54.243.192.82/api/DetalleLicenciasEmpleados?IdDetalleLicenciaEmpleado=0&IdLicenciaEmpleado=${
    licenciuaSelected?.idLicenciaEmpleado
  }&Desde=${formLicencias?.inputDesdeSolicitaLic}&Hasta=${
    formLicencias?.inputHastaSolicitaLic
  }`;
  const urlUpdateDetalle = `http://54.243.192.82/api/DetalleLicenciasEmpleados?IdDetalleLicenciaEmpleado=${detalleSelected.idDetalleLicenciaEmpleado}&FechaSuspension=${formLicencias?.inputDateSuspLic}`;
  /* const urlUpdateDetalle = `http://54.243.192.82/api/DetalleLicenciasEmpleados?IdDetalleLicenciaEmpleado=${detalleSeleccionado.idDetalleLicenciaEmpleado}&FechaSuspension=${formLicencias?.inputDateSuspLic}`;
 */

  const [checked, setChecked] = useState(false);

  

 

  let bodyLicencias = {
    idEmpleado: empleadoSeleccionado.iDempleado,
    año: Number(
      formLicencias?.inputCboAñosLicencia && formLicencias?.inputCboAñosLicencia
    ),
    diasDisponiblesTotales: formLicencias?.inputCantDiasDispLicencia,
    fechaVencimiento: formLicencias?.inputVencimientoLicencias,
    desde: null,
    hasta: null,
    fechaProrroga: null,
    nroResolucion: null,
  };
  let bodyLicenciasUpdateSolicita = {
    idLicenciaEmpleado:licenciuaSelected?.idLicenciaEmpleado,
    idEmpleado: licenciuaSelected?.idEmpleado,
    año: Number(
      formLicencias?.inputCboAñosLicencia && formLicencias?.inputCboAñosLicencia
    ),
    diasDisponiblesTotales: formLicencias?.inputCantDiasDispLicencia,
    fechaVencimiento: formLicencias?.inputVencimientoLicencias,
    desde: formLicencias?.inputDesdeSolicitaLic,
    hasta: formLicencias?.inputHastaSolicitaLic,
    fechaProrroga: null,
    nroResolucion: null,
  };
  let bodyLicenciasUpdateProrroga = {
    idLicenciaEmpleado: licenciuaSelected?.idLicenciaEmpleado,
    idEmpleado: empleadoSeleccionado?.iDempleado,
    año: licenciuaSelected?.año,
    diasDisponiblesTotales: licenciuaSelected?.diasDisponiblesTotales,
    fechaVencimiento: licenciuaSelected?.fechaVencimiento,
    diasDisponibles: licenciuaSelected?.diasDisponibles,
    diasTomados: licenciuaSelected?.diasTomados,
    fechaProrroga: formLicencias?.inputNuevaFechaLic,
    nroResolucion: formLicencias?.inputNuevaResolucionLic,
  };
  //const arrayIds = useSelector((state)=> state.licenciasState.idsLic);



  const bodyDetalleLicencia = {
    IdDetalleLicenciaEmpleado: 0,
    IdLicenciaEmpleado: licenciuaSelected && licenciuaSelected.idLicenciaEmpleado,
    Desde: formLicencias && formLicencias.inputDesdeSolicitaLic,
    Hasta: formLicencias && formLicencias.inputHastaSolicitaLic,
    FechaSuspencion: null,
  };

  let dateOne = new Date(formLicencias?.inputDesdeSolicitaLic).setHours(
    0,
    0,
    0,
    0
  );
  



  let dateTwo = new Date(
    licenciuaSelected?.fechaVencimiento &&
    licenciuaSelected?.fechaVencimiento.substring(
        0,
        licenciuaSelected?.fechaVencimiento.length - 9
      )
  ).setHours(0, 0, 0, 0);

  let dateProrroga = new Date(formLicencias?.inputNuevaFechaLic).setHours(
    0,
    0,
    0,
    0
  );

  let dateHasta = new Date();

    const bodyDeleteSusp = {
      "idDetalleLicenciaEmpleado": detalleSelected.idDetalleLicenciaEmpleado,
      "fechaSuspension": null
    }
    const bodyCreateSusp = {
      "idDetalleLicenciaEmpleado": detalleSelected.idDetalleLicenciaEmpleado,
      "fechaSuspension": formLicencias?.inputDateSuspLic
    }

  async function deleteSuspencion() {
    try {
      axios
        .put(
          `http://54.243.192.82/api/DetalleLicenciasEmpleados`, bodyDeleteSusp
        )
        .then((res) => {
          dispatch(setRefectch(!refetch));
        });
    } catch (err) {
      return swal({
        title: "Error",
        text: `Error al eliminar la fecha de suspensión`,
        icon: "error",
      });
    }
  }
   async function updateDetalle(url) {
    let dateDesde = new Date(detalleSelected.desde).setHours(0, 0, 0, 0);
    let dateHasta = new Date(detalleSelected.hasta).setHours(0, 0, 0, 0);
    let dateSusp = new Date(formLicencias?.inputDateSuspLic).setHours(
      0,
      0,
      0,
      0
    );

    if (detalleSelected) {
      if (
        dateSusp.valueOf() < dateHasta.valueOf() &&
        !formLicencias?.inputQuitaSusp
      ) {
        try {
          await axios.put(`http://54.243.192.82/api/DetalleLicenciasEmpleados`, bodyCreateSusp).then((res) => {
            dispatch(setRefectch(!refetch));
          });
        } catch (err) {
          return swal({
            title: "Error",
            text: `Error al insertar la fecha de suspensión`,
            icon: "error",
          });
        }
      } else if (formLicencias?.inputQuitaSusp) {
        try {
          axios
            .put(
              `http://54.243.192.82/api/DetalleLicenciasEmpleados`, bodyDeleteSusp
            )
            .then((res) => {
              dispatch(setRefectch(!refetch));
            });
        } catch (err) {
          return swal({
            title: "Error",
            text: `Error al eliminar la fecha de suspensión`,
            icon: "error",
          });
        }
      } else {
        return swal({
          title: "Error",
          text: `Error la fecha de Suspensión debe ser menor a la Fecha de finalización`,
          icon: "error",
        });
      }
      return;
    }
    return swal({
      title: "Error",
      text: `Debe seleccionar un Detalle de Licencia`,
      icon: "error",
    });
  } 
  async function updateData(url, bodyPetition, id, isDelete) {
     
    if (dateTwo.valueOf() > dateProrroga) {
      return swal({
        title: "Error",
        text: `La fecha de Prorroga debe ser mayor a la Fecha de Vencimiento`,
        icon: "error",
      });
    }
    if(isDelete){
      try {
        await axios.delete(url, id).then((res) => {
          dispatch(setRefectch(!refetch));
        });
      } catch (err) {
        return swal({
          title: "Error",
          text: `Error al actualizar la Licencia/Detalle de Licencia, error: ${err}`,
          icon: "error",
        });
      }
    }
    if (id && !isDelete) {
      try {
        await axios.put(url, bodyPetition).then((res) => {
        
          dispatch(setRefectch(!refetch));
        });
      } catch (err) {
        return swal({
          title: "Error",
          text: `Error al actualizar la Licencia/Detalle de Licencia, error: ${err}`,
          icon: "error",
        });
      }    
    }else{
      return swal({
        title: "Error",
        text: `Debe seleccionar una Licencia/Detalle de Licencia`,
        icon: "error",
      });
    }
      
  }
  function deleteLicenciaAxios(id) {
      dispatch(deleteLicencia(id))     
      dispatch(saveIdsLic(id))
  } 

  function deleteDetalleLicencia(urlDetalleLicenciaEmpleados, id) {
    swal({
        title: "¿Desea eliminar el Detalle de Licencia?",
        text: "Si acepta, el detalle se eliminará de la Base de Datos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`${urlDetalleLicenciaEmpleados}/${id}`).then((res) => {
        
            dispatch(setRefectch(!refetch));
            return swal("Detalle eliminado con éxito", {
                    icon: "success",
                  });
            
          });
          
        } else {
          return swal("Cancelado, puede seguir operando");
        }
      });
    
  }
 

  function deleteWithOptions() {
    switch (selectedOption) {
      case 

        "1 - Disponibles por Periodo" ||
        "3 - Prorroga Vencimiento" ||
        "2 - Solicita Nueva Licencia":
        deleteLicenciaAxios(licenciuaSelected?.idLicenciaEmpleado);
        break;
      case "4 - Suspende Licencia":
        deleteLicenciaAxios(licenciuaSelected?.idLicenciaEmpleado);
        break;

      default:
        return swal({
          title: "Error",
          text: `Debe seleccionar "1 - Disponibles por Periodo" para eliminar Licencia`,
          icon: "error",
        });
    }
  }
   function fetchApiWithOptions() {
    switch (selectedOption) {
      case "1 - Disponibles por Periodo":
        sendData(urlCreateLicencia, addNewLicencia);
        break;
      case "2 - Solicita Nueva Licencia":
        solicitanuevaLic(bodyDetalleLicencia);
        break;
      case "3 - Prorroga Vencimiento":
        updateData(
          urlLicencias,
          bodyLicenciasUpdateProrroga,
          licenciuaSelected?.idLicenciaEmpleado
        );
        break;
      case "4 - Suspende Licencia":
        updateDetalle(urlUpdateDetalle);
        break;
      default:
        return null;
    }
  } 

  //console.log(licenciuaSelected)
   async function solicitanuevaLic(bodyDetalleLicencia) {
    
    if (licenciuaSelected.fechaProrroga && licenciuaSelected.fechaProrroga) {
      let dateProrroga = new Date(licenciuaSelected.fechaProrroga).setHours(
        0,
        0,
        0,
        0
      );
      
      if (dateOne.valueOf() < dateProrroga.valueOf()) {
        await axios.post(urlCreateDetalleLicencia).then((res) => {
    
          dispatch(setRefectch(!refetch));
        });
      } else {
        return swal({
          title: "Error",
          text: `La fecha de nueva Licencia no puede ser superior a la Fecha de Prórroga`,
          icon: "error",
        });
      }
      return;
    }
    if (dateOne.valueOf() < dateTwo.valueOf()) {
      await axios.post(urlCreateDetalleLicencia).then((res) => {
    
        dispatch(setRefectch(!refetch));
      });
    } else
      return swal({
        title: "Error",
        text: `La fecha de nueva Licencia no puede ser superior a la Fecha de Vencimiento`,
        icon: "error",
      });
  } 

  return (
    <>
      <div className="contenedorFieldSet">
        <fieldset className="border p-2">
          <legend className="float-none w-auto p-2 contenedorFieldSet">
            {selectedOption &&
              selectedOption === "1 - Disponibles por Periodo" &&
              "Cargar disponibles por periodo"}
            {selectedOption &&
              selectedOption === "2 - Solicita Nueva Licencia" &&
              "Solicita Nueva Licencia"}
            {selectedOption &&
              selectedOption === "3 - Prorroga Vencimiento" &&
              "Prorroga Vencimiento"}
            {selectedOption &&
              selectedOption === "4 - Suspende Licencia" &&
              "Suspende Licencia"}
          </legend>
          <div className="row">
            <div className="col-xl-4"></div>
            {selectedOption &&
              selectedOption === "1 - Disponibles por Periodo" && (
                <PorPeriodo
                  setChecked={setChecked}
                  checked={checked}
                  sendData={sendData}
                  valueForm={valueForm}
                  onChange={onChange}
                  valueId={valueId}
                  array={array}
                  propArrayOpFem={propArrayOpFem}
                />
              )}
            {selectedOption &&
              selectedOption === "2 - Solicita Nueva Licencia" && (
                <NuevaLicencia
                  setChecked={setChecked}
                  checked={checked}
                  valueForm={valueForm}
                  onChange={onChange}
                  valueId={valueId}
                  array={array}
                  propArrayOpFem={propArrayOpFem}
                />
              )}
            {selectedOption &&
              selectedOption === "3 - Prorroga Vencimiento" && (
                <Prorroga
                  setChecked={setChecked}
                  checked={checked}
                  valueForm={valueForm}
                  onChange={onChange}
                />
              )}
            {selectedOption && selectedOption === "4 - Suspende Licencia" && (
              <FechaSuspencion
                setCheckeds={setChecked}
                checked={checked}
                valueForm={valueForm}
                onChange={onChange}
              />
            )}
          </div>
        </fieldset>
        <div className="col-xl-12 d-flex flex-row-reverse mt-2">
          <button
            className="btn btn-outline-danger btnAgregar"
            onClick={deleteWithOptions}
            disabled={disabled}
          >
            -
          </button>
          <button
            className="btn btn-outline-success btnAgregar"
            onClick={fetchApiWithOptions}
            disabled={disabled}
          >
            +
          </button>
        </div>
        <TableLicencias
          refetch={refetch}
          setRefectch={setRefectch}
          setChecked={setChecked}
          checked={checked}
          licenciaDelEmpleado={licenciaDelEmpleado}
          columns={columns1}
          value={[]}
        />
        <div className="col-xl-12 d-flex flex-row-reverse mt-2">
          <button
            className="btn btn-outline-danger btnAgregar"
            disabled={disabled}
            onClick={() =>
              deleteDetalleLicencia(
                urlDetalleLicenciaEmpleados,
                detalleSelected.idDetalleLicenciaEmpleado
              )
            } 
          >
            -
          </button>
        </div>
        <TableSuspenLicencia
          detalleSeleccionado={detalleSelected}
          licenciaDelEmpleado={licenciaDelEmpleado}
          detalleLicencia={detalleLicencia}
          columns={columns2}
          value={[]}
        />
      </div>
    </>
  );
};

export default FieldSet;
