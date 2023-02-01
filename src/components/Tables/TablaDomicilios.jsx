import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const TablaDomicilios = ({ columns , value, empleadoSelect, departamentos, localidades, provincias, barrios, calles}) => {
  const [checkPredeterminado, setCheckPredeterminado] = useState("");
  const [domicilios, setDomicilios] = useState([]);
  const [valueInitial, setValueInitial ] = useState([]);

   
   useEffect(()=>{
    setValueInitial(value);
   },[value])

   useEffect(()=>{
    setInputValor();
    inputValueDom(valueInitial);
  },[valueInitial])


   const inputValueDom=(valor)=>{
    
    let calleSelect = "";
    let barrioSelect = "";
    let localidadSelect = "";
    let provinciaSelect = "";
    let departamentoSelect = "";

    return valor && valor.map((valor,index)=>{
      
        calleSelect = calles && calles.find((calle) => valor.idCalle === calle.idCalle);

        barrioSelect = barrios && calleSelect && barrios.find((barrio)=> valor.idBarrio === barrio.idBarrio);
      
        localidadSelect = localidades && barrioSelect && localidades.find((localidad)=> barrioSelect.idLocalidad === localidad.idLocalidad);

        departamentoSelect = departamentos && localidadSelect && departamentos.find((dpto)=> localidadSelect.idDepartamento === dpto.idDepartamento);

        provinciaSelect = provincias && departamentoSelect && provincias.find((provincia)=> departamentoSelect.idProvincia === provincia.idProvincia);

        const newDomicilios = {...valor, idCalle : calleSelect, idBarrio : barrioSelect, localidad : localidadSelect, provincia  : provinciaSelect, departamento : departamentoSelect}

        return( newDomicilios)
      })
      

  }
  const valor = valueInitial && valueInitial.map((item)=>{return(item.predeterminado)});
   
 



  const setInputValor = () => {
    valor && valor.map((item)=> {
      return (item === true ? setCheckPredeterminado("checked") : setCheckPredeterminado("")
      )
    });    
  }; 

 
  return (
    <>
      <div className="row mt-5 overflow-scroll">
        <table className="table table-danger">
          <thead>
            <tr>
              <th>Seleccionar</th>
              {columns.map((col, i) => {
                return (
                  <th key={i} scope="col" className="px-2">
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {/* {
              dataTable && dataTable.map((item, i)=>{
                return(
                  <tr>
                    <th>
                      <input type="radio" name="seleccionar" id="seleccionar" value={item.idDomicilio} onClick={(e)=> dispatch(selectedIdDomicilio(e.target.value))} />
                    </th>
                    <th>
                      <input  type="checkbox" disabled="disabled" className="border-0 px-2" id="capitulo"  value={item.predeterminado} checked={item.predeterminado === null ? false : item.predeterminado}/>
                    </th>
                    <td>{item &&  item.calle}</td>
                    <td>{item &&  item.barrio}</td>
                    <td>{item &&  item.localidad}</td>
                    <td>{item &&  item.departamento }</td>
                    <td>{item &&  item.provincia}</td>
                  </tr>                  
                )
              })
             
            }  */}    
          </tbody>
        </table>        
      </div>
    </>
  );
};

export default TablaDomicilios;
