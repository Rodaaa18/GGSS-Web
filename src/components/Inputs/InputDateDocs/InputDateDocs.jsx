import React, { useEffect, useState } from "react";
import "./InputDateDocs.css";

const InputDateDocs = ({
  nameInput,
  display,
  checked,
  value,
  disabled,
  idInput,
  onChange,
  datosPersonalesValue,
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarComponente2, setMostrarComponente2] = useState(true);
  const [valor, setValor] = useState("");
  const fecha =
    value !== undefined ? value.substring(0, value.length - 9) : null;

  useEffect(() => {
    setValor(datosPersonalesValue);
  }, [datosPersonalesValue]);

  useEffect(() => {
    setValor(fecha);
  }, [fecha]);

  useEffect(() => {
    if (display) {
      if (mostrarComponente2 !== mostrarComponente) {
        setMostrarComponente2(display);
        return;
      }
      setMostrarComponente(!display);
      setMostrarComponente2(display);
      return;
    }
    setMostrarComponente(display);
    setMostrarComponente2(display);
  }, [display]);

  return (
    <div className="formulario__grupo__inputs mt-2">
      <div class="form-check p-0">
        <label class="form-check-label" for="flexCheckDefault">
          {nameInput}:
        </label>
        <input
          className={mostrarComponente ? "form-check-input ml-4" : "none"}
          type="checkbox"
          id="flexCheckChecked"
          checked={checked}
          disabled={disabled}
        />
      </div>
      <div className="d-flex flex-row justify-content-start align-items-center">
        <input
          className={mostrarComponente2 ? "form-check-input " : "none"}
          type="checkbox"
          id="flexCheckChecked"
          checked={checked}
          disabled={disabled}
        />
        <input
          id={idInput}
          className={mostrarComponente2 ? "secondCheck2" : "secondCheckDocs"}
          name={idInput}
          type="date"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value, idInput )}
        />
      </div>
    </div>
  );
};
export default InputDateDocs;