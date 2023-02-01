import { useEffect, useState } from "react";
import "./InputForm.css";

const InputFormPiso = ({
  nameInput,
  messageError,
  placeHolder,
  idInput,
  value,
  disabled,
  onChange,
  nameLabel,
  datosPersonalesValue,
  generalState,
  action,
  validateNumbers,
  validateLetters,
  validateEmails,
  numbers,
  email
}) => {
  const [valor, setValor] = useState("");

  useEffect(() => {
    setValor(datosPersonalesValue);
  }, [datosPersonalesValue]);

  useEffect(() => {
    setValor(value);
  }, [value]);

  return (
    <div className="formulario__grupo__inputs">
      <div className="formulario__grupo">
        <label className="formulario__label" htmlFor={idInput}>
          {nameLabel}
        </label>
      </div>
      <div className="form__grupo-input">
        <input
          type="text"
          className="form-input-Piso"
          id={idInput}
          placeholder={placeHolder}
          value={ valor  }
          onChange={(e) => onChange(e.target.value,idInput)}
          disabled={disabled}
          name={nameInput}
          onKeyPress={(numbers && validateNumbers) || (!numbers && validateLetters)}
        />
      </div>
      <div className="form__grupo__icons">
        <i className="fas fa-times-circle form__grupo__icon"></i>
      </div>
      <div className="form__grupo__errors">
        <p className="form__grupo__error">{messageError}</p>
      </div>
    </div>
  );
};
export default InputFormPiso;
