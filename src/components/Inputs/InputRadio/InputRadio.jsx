import React, { useEffect, useState } from 'react'
import "./InputRadio.css";



const InputRadio = ({  nameFirst, nameSecond, value,disabled, onChange,idInput,nameLabel ,datosPersonalesValue, action, classes, asidePagos, obligatorio, nameThird}) => {

    const [valor, setValor] = useState("");
    const [valorRadioM, setValorRadioM] = useState(false);
    const [valorRadioF, setValorRadioF] = useState(false);
    const [valorRadioX, setValorRadioX] = useState(false);

    useEffect(() => {
      valueInput();
    }, [valorRadioM, valorRadioF, valor]);

    useEffect(()=>{
      setValor(datosPersonalesValue)
    },[datosPersonalesValue])

    useEffect(()=>{
      setValor(value);
    },[value])


  const valueInput = () => {
    if (valor === "M" || valor == 1) {
      setValorRadioM(true);
      setValorRadioF(false);
      setValorRadioX(false);
    }
    if (valor === "F" || valor == 2) {
      setValorRadioF(true);
      setValorRadioM(false);
      setValorRadioX(false);
    }
    if (valor === "X" || valor == 3) {
      setValorRadioF(false);
      setValorRadioM(false);
      setValorRadioX(true);
    }
  };
 
  return (
    classes && classes ? <div className={classes.classOne}>
        <div className={classes.classNine}>
            <label className={classes.classTwo}  htmlFor="legajo">{nameLabel}</label>
        </div>
        <div className={classes.classThree}>
          <input className={classes.classFour}
                 type="radio" 
                 id={idInput} 
                 name={idInput} 
                 checked={valorRadioM} 
                 onChange={(e)=> onChange(e.target.value, idInput)} 
                 value={asidePagos ? 1 : "M"} 
                 disabled={disabled}/>
          <label className={classes.classFive} htmlFor="inlineCheckbox1">{nameFirst}</label>
        </div>
        <div className={classes.classSix}>
          <input 
                className={classes.classSeven} 
                type="radio" 
                id={idInput} 
                name={idInput}                  
                checked={valorRadioF} 
                onChange={(e)=> onChange(e.target.value, idInput)} 
                value={asidePagos ? 2 : "F"} 
                disabled={disabled}/>
        <label className={classes.classEigth} htmlFor="inlineCheckbox2">{nameSecond}</label>
        </div>
    </div> 
    : 
    <div className="d-flex flex-row justify-content-start align-items-center heigthClass">
        <div className="d-flex flex-row justify-content-start align-items-center">
            <label className="formulario-label-Sexo"  htmlFor="legajo">{nameLabel}</label>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
              <input className={obligatorio ? "form-check-input obligatorio" : "form-check-input"} 
                    type="radio" 
                    id={idInput} 
                    name={idInput}                   
                    checked={valorRadioM} 
                    onChange={(e)=> onChange(e.target.value, idInput)} 
                    value="M" 
                    disabled={disabled}/>
            <label className="form-check-label" htmlFor="inlineCheckbox1">{nameFirst}</label>
              <input 
                    className={obligatorio ? "form-check-input obligatorio" : "form-check-input"} 
                    type="radio" 
                    id={idInput} 
                    name={idInput}                  
                    checked={valorRadioF} 
                    onChange={(e)=> onChange(e.target.value, idInput)} 
                    value="F" 
                    disabled={disabled}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">{nameSecond}</label>
              <input 
                    className={obligatorio ? "form-check-input obligatorio" : "form-check-input"} 
                    type="radio" 
                    id="inputSexoX" 
                    name="inputSexoX"                  
                    checked={valorRadioX} 
                    onChange={(e)=> onChange(e.target.value, idInput)} 
                    value="X" 
                    disabled={disabled}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">{nameThird}</label>
        </div>
    </div>
  );
};

export default InputRadio;
