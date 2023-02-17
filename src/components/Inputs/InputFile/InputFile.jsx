import { useEffect, useState } from "react";
import styled from "styled-components";
import "./InputFile.css";
import imagenAlt from "./cambieImagen.png";
import { useDispatch } from "react-redux";

function InputFile({ disabled, imagen,onChange, idInput,action, ImageSelectedPrevious, setImageSelectedPrevious, setRefectch, refetch }) {
  
  const changeImage = (event) => {
    const imageFile = event.target.files[0];
    const blob = new Blob([imageFile], { type: imageFile.type });
    
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const imageDataURL = reader.result;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = new Image();
      image.src = imageDataURL;
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        const pngImageDataURL = canvas.toDataURL('image/png');
        // Usar pngImageDataURL aquí
        onChange(pngImageDataURL.substring(22), idInput)
        setImageSelectedPrevious(pngImageDataURL);
        
      };
    };
    setRefectch(!refetch)
  };
  
  
  

  useEffect(() => {
    disableBtn();
  }, [disabled]);

  function disableBtn() {
    if (disabled) {
      return;
    }
  }
  function acivatedInput(e) {
    e.preventDefault();
    setImageSelectedPrevious(null);
  }

  return (
    <>
      <div>
        <StyleDragArea>
          <div className="image-upload-wrap">
            <label
              className="formulario__label mt-0 mb-1 w-100"
              htmlFor="legajo"
            >
              Cambiar su imagen
            </label>
            <input
              className="file-upload-input"
              type="file"
              id={idInput}
              name={idInput}
              accept="image/png, image/jpg"
              onChange={(e) => {
                changeImage(e);
              }} 
              multiple
              width="220px"
              height="100px"
              disabled={disabled}
            ></input>
            <div className="imageSelect d-flex justify-content-center align-items-center center ml-1 mr-6 ">
              <img
                className="imagenFile "
                src={
                  ImageSelectedPrevious === null ||
                  ImageSelectedPrevious === undefined
                    ? `data:image/png;base64,${imagen}` : ImageSelectedPrevious
                }
                alt=""
              />
            </div>
          </div>
        </StyleDragArea>
      </div>

      <button
        className="btn btn-outline-danger mt-2 btn-sm"
        onClick={(e) => acivatedInput(e)}
        disabled={disabled}
      >
        Cancelar
      </button>
    </>
  );
}

export default InputFile;

const StyleDragArea = styled.div`
  .none {
    display: none;
  }
  .center {
    display: block;
    width: 230px;
    border: 4px dashed #d0d7de;
  }
  

  .file-upload-input {
    position: absolute;
    margin-right: 0px;
    margin: 0;
    padding: 0;
    width: 225px;
    height: 105px;
    /* opacity: 0; */
    /* border: 4px dashed #d0d7de; */
    cursor: pointer;
  }

  .image-upload-wrap {
    /* background-color: red; */
    .h5 {
      font-weight: 395;
      /* color: #64686d; */
      color: black;
    }
  }
  .image-upload-wrap:hover {
    /* background-color: transparent; */
  }
`;
