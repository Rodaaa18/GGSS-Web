import React from 'react'
// import styled from 'styled-components';
import './TextArea.css'

const TextArea = ({inputName, maxLength, value, disabled, action, onChange, idInput, clasess, characterLimit, obligatorio, handleChange, innerHTML, nameInput, nameLabel, input}) => {


  (function(){
    document.addEventListener("keyup", function(event){
        if(event.target.matches(".count-chars")){
            // get input value and length
            const value = event.target.value;
            const valueLength = event.target.value.length;
            // get data value
            const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
            const remainingChars = maxChars - valueLength;
            if(valueLength > maxChars){
                // limit chars to maxChars
                // event.target.value = value.substr(0, maxChars)
                return;  //end function execution
            }
            event.target.nextElementSibling.innerHTML = remainingChars + " caracteres restantes";
        }
    })
      })();

 

  return (
    clasess && <div className={`${clasess.classOne}`}>      
    <div className={`${clasess.classTwo}`}>
        <label className={`${clasess.classThree}`} htmlFor={nameInput}>{nameLabel}</label>

        <textarea
          placeholder="Ingrese Observaciones "
          maxLength={characterLimit}
          id={idInput}
          name={idInput}
          className={obligatorio ? `${clasess.classFour}` : `${clasess.classFour}`} 
          onChange={handleChange}
          value={input}
          cols="51" 
          rows="6"
        />       
        {/* <button type="button" onClick={()=>funcionCuil(nroDocumento,genre, swal)}
              className={`${clasess.classFive}`} disabled={disabled}>
              {nameButton}
        </button> */}
    </div>
    
</div>
  )
}

export default TextArea


