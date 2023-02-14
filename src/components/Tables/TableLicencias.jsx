import { useDispatch } from "react-redux";
import { licenciaSelected } from "../../redux/actions/licenciasActions";

import "./TableBootstrap.css";

const TableLicencias = ({
  columns,
  value,
  documentaciones,
  licenciaDelEmpleado,
  checked,
  setChecked,
  setRefectch,
  refetch,
}) => {
  const dispatch = useDispatch();

  const date = new Date("2022-12-31T00:00:00");

  return (
    <>
      <table class="table table-danger">
        <thead>
          <tr>
            {columns &&
              columns.map((col) => {
                return <th scope="col">{col}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {licenciaDelEmpleado &&
            licenciaDelEmpleado.map((valor, i) => {
          
              return (
                <tr key={i}>
                  <th scope="row">
                    {" "}
                    <input
                      defaultChecked={false}
                      type="radio"
                      name="seleccionar"
                      id="seleccionar"
                      onClick={() => {
                        setChecked(true);                 
                        dispatch(licenciaSelected(valor))
                      }}
                        
                    />{" "}
                  </th>
                  <td>{valor.año ? valor.año : "-"}</td>
                  <td>
                    {valor?.diasDisponiblesTotales
                      ? valor?.diasDisponiblesTotales
                      : "-"}
                  </td>
                  <td>{valor?.diasTomados}</td>
                  <td>
                    {Number(valor?.diasDisponiblesTotales) -
                      Number(valor?.diasTomados)}
                  </td>
                  <td>
                    {valor.fechaVencimiento && valor.fechaVencimiento
                      ? valor.fechaVencimiento.substring(
                          0,
                          valor.fechaVencimiento.length - 9
                        )
                      : "-"}
                  </td>
                  <td>
                    {valor.fechaProrroga && valor.fechaProrroga
                      ? valor.fechaProrroga.substring(
                          0,
                          valor.fechaProrroga.length - 9
                        )
                      : "-"}
                  </td>
                  <td>{valor?.nroResolucion}</td>
                  <td>{valor?.diasDisponibles}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableLicencias;
