import { useDispatch } from "react-redux";
import "./TableBootstrap.css";

const TableBasic1 = ({columns, value,documentaciones, setRefetch, setDocumentacionSeleccionada}) => {
  
  
  const dispatch = useDispatch();
  
  function getDocumentacion(documentaciones,id){
    let document = documentaciones && documentaciones.filter((item)=>{
      return item.idDocumentacion === id
    })
    return document[0]
  }
 
  return (
    <>
    <table class="table table-danger">
      <thead>
        <tr>
          {
            columns && columns.map((col, i)=>{
              return(
                <th key={i} scope="col">{col}</th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          value && value.map((valor, i)=>{
            return(
              <tr key={i}>
                <th scope="row"> <input type="radio" name="seleccionar" id="seleccionar" onClick={()=> setDocumentacionSeleccionada(valor)}/> </th>
                <td>{valor.fecha ? valor.fecha.substring(0, valor.fecha.length -9) : "-"}</td>
                <td>{valor.fechaVencimiento ? valor.fechaVencimiento : "-"}</td>
                <td>{getDocumentacion(documentaciones, valor.idDocumentacion).documentacion1}</td>
                <td>{valor.generaLiquidacion === true ? "Genera" : "No genera"}</td>
                <td>{valor.obs ?valor.obs : "-"}</td>
                <td>{valor.incluirCuotaAlimentaria === true ? "Incluye" : "No incluye"}</td>
              </tr>
            )
          })
        }        
      </tbody>
    </table>
    </>
  );
};

export default TableBasic1;
