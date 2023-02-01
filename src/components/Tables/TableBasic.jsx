import React, { useEffect, useState } from "react";

const TableBasic = ({
  columns,
  array,
  onSelect,
  seleccionado,
}) => {
  const [inputCheck, setInputCheck] = useState({});
  const [familiares, setFamiliares ] = useState([]);
  
  
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
            { familiares && familiares.map((col, i) => {
              
              return (
                <tr className="px-5" key={i}>
                  <th scope="row">
                    {" "}
                    <input
                      type="radio"
                      checked={inputCheck[`selected${i}`]}
                      name="imputRadio"
                      value={col.iDfamiliares}
                      id={`selected${i}`}
                    />
                  </th>
                  <td
                  className=""
                  key={col.iDfamiliares}>{col.apellidoyNombres}
                  </td>
                  <td>{col.iDtipoDocumento && col.iDtipoDocumento.tipoDocumento}</td>
                  <td>{col && col.nroDocumento}</td>
                  <td>{col && col.sexo}</td>
                  <td>{col.iDparentesco && col.iDparentesco.nombreParentesco}</td>
                  <td>
                    {col.fechaNacimiento && col.fechaNacimiento.substring(0, col.fechaNacimiento.length - 9)}
                  </td>
                  <td>{col.iDpaisOrigen && col.iDpaisOrigen.nombrePais}</td>
                  <td>{col.iDnacionalidad && col.iDnacionalidad.nacionalidad}</td>
                  <td>{col.iDestudios && col.iDestudios.estudiosNivel}</td>
                  <td>{col.fBaja && col.fBaja.substring(
                      0,
                      col.fBaja.length - 9
                    )}</td>
                  <td>{col.noDeducirGanancias === false ? "No deduce" : "Si deduce"}</td>
                  <td>{col.inlcuirCuotaAlimentaria === false ? "No incluye" : "Incluye"}</td>
                  <td>{col.obs}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableBasic;
