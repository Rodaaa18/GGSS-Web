import "./InputForm.css";

const InputForm = ({
  messageError,
  placeHolder,
  inputId,
  value,
  disabled,
  onChange,
  nameLabel,
  validateNumbers,
  validateLetters,
  numbers,
  idInput,
  cancelar,
  obligatorio,
  clasess
}) => {
  return (
    clasess ? <div className={clasess.classOne}>
    <div className={clasess.classTwo}>
      <label className={clasess.classThree} htmlFor={inputId}>
        {nameLabel}
      </label>
      {
        obligatorio ? 
        <input
        type="text"
        className={clasess.classFive}
        id={idInput}
        data-bs-toggle="tooltip" 
        data-bs-placement="top"
        data-bs-title="Campo obligario"
        placeholder={placeHolder}
        value={ cancelar ? null : value  }
        onChange={(e)=>onChange(e.target.value, idInput)}
        disabled={disabled}
        name={idInput}
        onKeyPress={(numbers && validateNumbers) || (!numbers && validateLetters)}
      /> :
      <input
        type="text"
        className={clasess.classSix}
        id={idInput}
        placeholder={placeHolder}
        value={ cancelar ? null : value  }
        onChange={(e)=>onChange(e.target.value, idInput)}
        disabled={disabled}
        name={idInput}
        onKeyPress={(numbers && validateNumbers) || (!numbers && validateLetters)}
      />
      }
    </div>
  </div> 
  
  :


    <div className="formulario__grupo__inputs">
      <div className="formulario__grupo">
        <label className="formulario__label" htmlFor={inputId}>
          {nameLabel}
        </label>
        {
          obligatorio ? 
          <input
          type="text"
          className="legajo__limpia formulario-input-Legajo obligatorio"
          id={idInput}
          data-bs-toggle="tooltip" 
          data-bs-placement="top"
          data-bs-title="Campo obligario"
          placeholder={placeHolder}
          value={ cancelar ? null : value  }
          onChange={(e)=>onChange(e.target.value, idInput)}
          disabled={disabled}
          name={idInput}
          onKeyPress={(numbers && validateNumbers) || (!numbers && validateLetters)}
        /> :
        <input
          type="text"
          className="formulario-input-Legajo"
          id={idInput}
          placeholder={placeHolder}
          value={ cancelar ? null : value  }
          onChange={(e)=>onChange(e.target.value, idInput)}
          disabled={disabled}
          name={idInput}
          onKeyPress={(numbers && validateNumbers) || (!numbers && validateLetters)}
        />
        }
      </div>
    </div>
  );
};
export default InputForm;
