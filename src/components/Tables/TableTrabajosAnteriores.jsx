import React from 'react'
import { useDispatch } from 'react-redux'

const TableTrabajosAnteriores = ({nameLabel, columns, array, setTrabajoSeleccionado, setModificar}) => {
    const dispatch = useDispatch();

  return (
    <>
        <label htmlFor="">{nameLabel}</label>   

    <div className='d-flex flex-row justify-content-start align-items-start'> 
        <table class="table table-danger ml-2">
            <thead>
                {
                    columns && columns.map((col,i)=>{
                        return(
                                <th key={i} scope="col">{col}</th>
                        )
                    })
                }
                
            </thead>
            <tbody>
                {
                    array && array.map((item)=>{
                        console.log(item.desde.length)
                        return( 
                            <tr>
                                <th scope="row"> 
                                    <input type="radio" name="selectTrabajoAnt" onClick={()=> setTrabajoSeleccionado(item)} id="selectTrabajoAnt" value={item.idTrabajoAnterior}  /> 
                                </th>
                                <td>{item?.desde.length === 19 ? (item.desde && item.desde.substring(
                                                0,
                                                item.desde.length - 9
                                                )) : item.desde}
                                </td>
                                <td>{item.hasta?.length === 19 ? (item?.hasta && item.hasta ? item.hasta.substring(0, item.hasta.length -9) : "Actualidad") : (item?.hasta && item?.hasta ? item.hasta : "Actualidad")}</td>
                                <td>{item.descripcion}</td>
                            </tr>
                        )
                    })
                }                
            </tbody>
        </table>
    </div>
    <div className='col-xl-3'>
        <button className="btn btn-danger btn-sm " onClick={()=> setModificar(true)}>
            Modificar Datos
        </button>
    </div>
    </>
  )
}

export default TableTrabajosAnteriores