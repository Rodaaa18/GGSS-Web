import React from "react";
import './InputEmpData.css';

const InputEmpData = ({ idInput, inputValue, nameLabel,disabled }) => {
  return (
    <div className="row d-flex flex-row justify-content-start align-items-center w-100">
      <div className="col-xl-4 d-flex flex-row justify-content-start align-items-center p-0 m-0">
        <label 
          className="form__label-Cabecera " 
          htmlFor={idInput}>
          {nameLabel}
        </label>
      </div>      
      <div class="col-xl-8 d-flex flex-row justify-content-start align-items-center p-0 m-0">
        <input
          readonly="readonly"
          className="form-input-FliaCabecera"
          type="text"
          id={idInput}
          name={idInput}
          value={inputValue}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputEmpData;
