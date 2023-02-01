import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./InputDate.css";

const InputDate = ({ nameInput,display, value, disabled,idInput, onChange, action, setDisable, disable, idInputCheck, valueCheck, classes }) => {
  
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarComponente2, setMostrarComponente2] = useState(true);
  const [checked, setChecked] = useState(false);

  const [valor, setValor] = useState("");


  const fecha = value && value  ? value.substring(0, value.length -9) : null;
  const dispatch = useDispatch();


  useEffect(()=>{
    setValor(fecha);
  },[fecha])

  useEffect(()=>{
    if(display){
      if(mostrarComponente2 !== mostrarComponente){
        setMostrarComponente2(display)
        return;
      }
      setMostrarComponente(!display)
      setMostrarComponente2(display)
      return;
    }
    setMostrarComponente(display)
    setMostrarComponente2(display)
  },[display])

  function getValue(disable){
    if(disable){
      return dispatch(
        {
          type: action,
          payload : {name : idInput, value : ""}
        })
    }
  }
  useEffect(()=>{
    getValue(disable);
  },[disable])
  

  return (
    classes && <div className={classes.classOne}>
                  <div className={classes.classTwo}>
                    <label className={classes.classThree} htmlFor="flexCheckDefault">
                      {nameInput}

                    </label>
                    <input className={mostrarComponente ? classes.classFour : "none"} type="checkbox"  id="flexCheckChecked"  checked={checked} disabled={disabled} />
                  </div>
                  <div className={classes.classFive}>
                      <input className={mostrarComponente2 ? classes.classSix : "none"}type="checkbox" id={idInputCheck} name={idInputCheck} onChange={(e)=>{setDisable(!disable); setChecked(!checked); onChange(e.target.checked, idInputCheck)}}  checked={checked} disabled={disabled} />
                      <input id={idInput} className={mostrarComponente2 ? classes.classSeven : "secondCheck"} name={idInput} type="date" value={valueCheck ? value : "" } disabled={disabled ? disabled : disable} onChange={(e)=>onChange(e.target.value, idInput)} />
                      
                  </div>
              </div>
  )
}

export default InputDate