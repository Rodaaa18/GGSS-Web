import React from 'react'
import './TableBootstrap.css'

const TableReduccion = ({column, data}) => {
    return (
        <div className="table-responsive" style={{margin: "0 auto"}}>
            <table className="table" style={{width: "500px", textAlign: "center"}}>
                <thead className="tableHeader text-light">
                    <tr>
                        {column.map((item, index) => <TableHeadItem key={index} item={item}/> )}
                    </tr>
                </thead>
                <tbody>
                    {/* DATOS PROVISORIOS, ACA SE VAN A MAPEAR LOS DATOS */}
                    <tr>      
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>      
                        <td>Cell</td>
                        <td>Cell</td>  
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>

export default TableReduccion

