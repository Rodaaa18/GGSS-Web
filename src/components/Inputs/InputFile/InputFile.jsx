import { useEffect, useState } from "react";
import styled from "styled-components";
import "./InputFile.css";
import imagenAlt from "./cambieImagen.png";
import { useDispatch } from "react-redux";

function InputFile({ disabled, imagen,onChange, idInput,action }) {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const [displayButton, setDisplayButton] = useState("");

  
  
  const changeImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
       
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
        setDisplayButton("none");
      };
    }
  };

  useEffect(() => {
    disableBtn();
  }, [disabled]);

  function disableBtn() {
    if (disabled) {
      setDisplayButton("none");
      return;
    }
    setDisplayButton("");
  }
  function acivatedInput(e) {
    e.preventDefault();
    setImageSelectedPrevious(null);
    setDisplayButton("");
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
              onChange = {(e)=>{ 
                if (e.target.files[0] !== undefined) {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = (e) => {
                  e.preventDefault();
                  onChange(e.target.result, idInput)
                  
                  setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
                  setDisplayButton("none");
                };}}}
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
                    ? imagen : ImageSelectedPrevious
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
