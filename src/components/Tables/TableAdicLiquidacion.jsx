import React from 'react'

const TableAdicLiquidacion = ({conceptos}) => {
  return (
    <>
    <div>    
        <table class="table ">
            <thead>
                <tr>
                <th scope="col" colspan="3">Concepto</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Fecha Vto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td colspan="5">Concepto 1</td>
                <td>Fecha 1</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td colspan="5">Concepto 2</td>
                <td>Fecha 2</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="5">Concepto 3</td>
                <td>Fecha 3</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className='col-xl-3'>
        <button className="btn btn-danger btn-sm ">
            Modificar Datos
        </button>
    </div>
    </>
  )
}

export default TableAdicLiquidacion