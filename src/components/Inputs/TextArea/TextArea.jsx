import React, { useState } from 'react'
import './TextArea.css'


const TextArea = ({ characterLimit = 255, onChange,idInput, value }) => {
    const [input, setInput] = useState('');

    function handleChange(event) {
        const newInput = event.target.value;
        setInput(newInput);
        onChange(event.target.value,idInput )
      }
    
      const charactersLeft = characterLimit - input.length;

   
return (
    <>

<div class="count-container">
        <form>
          <div class="input-group contTxtArea">
            <div className="form__grupo__label pl-1 mt-3">
              <label
                className="form__grupo__label__label m-0"
                htmlFor="legajo"
              >
                Observaciones
              </label>
              <div class="input-group">
                <textarea
                  placeholder="Ingrese Observaciones "
                  maxLength={characterLimit}
                  id={idInput}
                  name={idInput}
                  class="formulario-input-TextArea"
                  onChange={handleChange}
                  value={value}
                  cols="51" 
                  rows="6"
                />
               {/* (caracteres_restantes < 10) ? "Contador de caracteres: " + caracteres_restantes : "" */}
               
               
                <div class="input-msg text-black">
                  {/* Character Count: {input.length} */}
                  {/* Characters left: {charactersLeft} */}
                  </div>
                {charactersLeft < 15 && (
                  <p className="text-red">Sólo quedan {charactersLeft} caracteres</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
)
}

export default TextArea





