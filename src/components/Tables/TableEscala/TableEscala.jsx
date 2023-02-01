import React from 'react'
import './TableEscala.css'

const TableEscala = () => {
    return (
            <table className="table tableEscala">
                <thead className="tableHeader text-light">
                    <tr>
                        <th scope="col">Ganancia neta imponible acumulada</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Pagarán</th>
                        <th scope="col"></th>
                    </tr>
                    <tr>
                        <th scope="col">De más de</th>
                        <th scope="col">a</th>
                        <th scope="col">$</th>
                        <th scope="col">Más el %</th>
                        <th scope="col">Sobre el exced. de</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default TableEscala
