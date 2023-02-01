import React from 'react'
import { useDispatch } from 'react-redux'

const TableTrabajosAnteriores = ({nameLabel, columns, array, propItemOp, setModificar}) => {
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
                        return( 
                            <tr>
                                <th scope="row"> <input type="radio" name="selectTrabajoAnt" id="selectTrabajoAnt" value={item.idTrabajoAnterior}  /> </th>
                                <td>{item.desde && item.desde.substring(
                                                0,
                                                item.desde.length - 9
                                                )}
                                </td>
                                <td>{item.hasta && item.hasta ? item.hasta.substring(0, item.hasta.length -9) : "Actualidad"}</td>
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