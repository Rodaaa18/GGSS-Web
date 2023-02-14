import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { familiarSelected } from "../../redux/actions/familiaActions";

const TableBasic = ({
  columns,
  array,
  onSelect,
  seleccionado,
}) => {
  const [inputCheck, setInputCheck] = useState({});
  const [familiares, setFamiliares ] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setInputCheck({});
  }, [array]);






  return (
    <>
      <div className="overflow-scroll ">
        <table className="table table-danger table-fit ">
          <thead>
            <tr>
              <th>Sel.</th>
              {columns.map((col, i) => {
                return (
                  <>
                    <td key={i} scope="col-12" className="px-5">
                      {col}
                    </td>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody className="table-group-divider" id="cuerpodetabla">
            { array && array.map((item,i)=>{
                  return(
                    <tr className="px-5" key={i}>
                      <th scope="row">
                        {" "}
                        <input
                          type="radio"
                          checked={inputCheck[`selected${i}`]}
                          name="imputRadio"
                          value={item.idFamiliares}
                          id={`selected${i}`}
                          onClick={(e) => dispatch(familiarSelected(item))}
                        />
                      </th>
                      <td
                      className=""
                      key={item.iDfamiliares}>{item.apellidoyNombres}
                      </td>
                      <td>{item.tipoDocumento && item.tipoDocumento}</td>
                      <td>{item && item.nroDocumento}</td>
                      <td>{item && item.sexo}</td>
                      <td>{item.nombreParentesco && item.nombreParentesco}</td>
                      <td>
                        {item.fechaNacimiento && item.fechaNacimiento.substring(0, item.fechaNacimiento.length - 9)}
                      </td>
                      <td>{item.paisOrigen && item.paisOrigen}</td>
                      <td>{item.nacionalidad && item.nacionalidad}</td>
                      <td>{item.estudiosNivel && item.estudiosNivel}</td>
                      <td>{item?.f_Baja && item.f_Baja?.substring(
                          0,
                          item?.fBaja?.length - 9
                        )}</td>
                      <td>{item.noDeducirGanancias === false ? "No deduce" : "Si deduce"}</td>
                      <td>{item.inlcuirCuotaAlimentaria === false ? "No incluye" : "Incluye"}</td>
                      <td>{item.obs}</td>
                    </tr>
                  )
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableBasic;
