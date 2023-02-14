import React from 'react'
import { useDispatch } from 'react-redux'
import { getDatoExtraSelected } from '../../redux/actions/datosExtrasActions';

const TableExtras = ({columns, datosExtraEmpleado}) => {
    const dispatch = useDispatch();
    console.log(datosExtraEmpleado)
  return (
    <table class="table table-danger">
        <thead>
            <tr >
                {
                    columns.map((col, i)=>{
                        return(
                            
                                <th key={i} scope="col">{col}</th>
                            
                        )
                    })
                }   
            </tr>         
        </thead>
        <tbody>
            {
                datosExtraEmpleado && datosExtraEmpleado.map((item, i)=>{
                    return(
                            <tr>
                                <th scope="row"> <input type="radio" name="selectExtra" id="selectExtra" onClick={()=> {dispatch(getDatoExtraSelected(item))}}  /> </th>
                                <td>{item?.fecha}</td>
                                <td>{item?.descripcion}</td>
                                <td>{item?.obs}</td>
                            </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default TableExtras