import { useDispatch, useSelector } from "react-redux";
import { detalleSelected } from "../../redux/actions/licenciasActions";
import "./TableBootstrap.css";

const TableSuspenLicencia = ({ columns , detalleLicencia, idSelected}) => {
  const dispatch = useDispatch();
  const licenciuaSelected =  useSelector((state)=> state.licenciasState.licenciaSelected);
 

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
        {detalleLicencia &&
            detalleLicencia.map((valor) => {
            
              return Number(licenciuaSelected?.idLicenciaEmpleado) ===
                Number(valor?.idLicenciaEmpleado) ? (
                <tr>
                  <th scope="row">
                    {" "}
                    <input
                      type="radio"
                      name="inpurSelectDetalleLiq"
                      id="inpurSelectDetalleLiq"
                      onClick={() => {
                        dispatch(detalleSelected(valor));
                        
                      }}
                    />{" "}
                  </th>
                  <td>
                    {valor && valor.desde
                      ? valor.desde.substring(0, valor.desde.length - 9)
                      : "-"}
                  </td>
                  <td>
                    {valor && valor.hasta
                      ? valor.hasta.substring(0, valor.hasta.length - 9)
                      : "-"}
                  </td>
                  <td>
                    {valor && valor.fechaSuspension
                      ? valor.fechaSuspension.substring(
                          0,
                          valor.fechaSuspension.length - 9
                        )
                      : "-"}
                  </td>
                </tr>
              ) : null;
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableSuspenLicencia;
