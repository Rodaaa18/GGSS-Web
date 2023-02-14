import { useDispatch } from "react-redux";
import { domicilioSelected } from "../../redux/actions/domicilioActions";

const TablaDomicilios = ({ columns , value }) => {
  
  const dispatch = useDispatch();

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
            {
              value && value.map((item, i)=>{
                return(
                  <tr>
                    <th>
                      <input type="radio" name="seleccionar" id="seleccionar" value={item} 
                      onClick={()=> dispatch(domicilioSelected(item))} 
                      />
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
            }     
          </tbody>
        </table>        
      </div>
    </>
  );
};

export default TablaDomicilios;
