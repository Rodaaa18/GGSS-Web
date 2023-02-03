import './InputModal.css'

const InputModal = ({
    nameLabel,
    placeholder,
    idInput,
    value,
    action,
    onChangeValues,
    disableModal
}) => {

    
    return (

        <div className="inputModalContainer">

            <div className="row mb-3 inputLabelContainer">
                <label for="inputPassword3" className="col-sm-4 col-form-label">{nameLabel}:</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="inputModal"
                        id={idInput}
                        name={idInput}
                        placeholder={placeholder}
                        value={value}
                        // onChange={(e) => onChange(e.target.value, inputId)} // ON CHANGE NUEVO PARA LA NUEVA FUNCION (NO ANDA)
                        onChange={(e) => onChangeValues(e.target.value, idInput)}
                        disabled={disableModal}
                    />
                </div>
            </div>

        </div>
    )
}

export default InputModal