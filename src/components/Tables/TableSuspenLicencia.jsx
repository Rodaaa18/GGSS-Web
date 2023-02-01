import { useDispatch, useSelector } from "react-redux";
import "./TableBootstrap.css";

const TableSuspenLicencia = ({ columns }) => {
  const dispatch = useDispatch();

 

  return (
    <>
      <table class="table table-danger">
        <thead>
          <tr>
            {columns &&
              columns.map((col) => {
                return <th scope="col">{col}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {}
        </tbody>
      </table>
    </>
  );
};

export default TableSuspenLicencia;
