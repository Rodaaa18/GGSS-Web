import React, { useState } from 'react'

import "./SindicatoLiquidacion.css";

const SindicatoLiquidacion = ({idInput,nameLabel, array, nameInput, porpArrayOp, propArrayId, action, onChange, value, disabled,clasess,obligatorio}) => {


    const [ checked, setChecked] = useState(new Array(array && array.length).fill(false));


    function onChangeInput(e, action, position){
        const updateChecked = checked.map((item, index)=> index === position ? !item : item);

        setChecked(updateChecked);
      
    }
   
return (
    clasess && <div className={`${clasess.classOne}`}>      
        <div className={`${clasess.classTwo}`}>
            <label className={`${clasess.classThree}`} htmlFor={nameInput}>{nameLabel}</label>
            <div className='selectMenuSindicatos border border-1 w-100' >
                {
                    array && array.map((op, i)=>{
                        return(
                            <aside key={i}>    
                                
                                <div class="d-flex flex-row justify-context-center align-items-center w-100"  >
                                    <input disabled={disabled} type="checkbox" name={idInput} id={`${idInput}${i}`} checked={checked[i]} onChange={(e)=> {onChange(e.target.value, idInput);const updateChecked = checked.map((item, index)=> index === i ? !item : item);
                                    setChecked(updateChecked); }} value={op[propArrayId]} className='form-check-input checkList'/>
                                    <label className="form-check-label " htmlFor="checkOption">{op[porpArrayOp]}</label>
                                </div>
                            </aside>                          
                        )
                    })
                }
            </div>
            </div>
            </div>
        
    

           
)
            }

export default SindicatoLiquidacion