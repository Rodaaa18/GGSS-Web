import React from 'react'
import BasicModal from '../Modals/BasicModal'

const ButtonCallModal = ({openModal, isOpened, closeModal, nameButton, children, setTransition}) => {
  return (
    <div>
        <button onClick={()=>{openModal(); setTransition(true);}} className="dropdown-item colorFont">
            {nameButton}
        </button>
        <BasicModal title="Modal Prueba" isOpen={isOpened} onClose={closeModal} setTransition={setTransition}>
            {children}
        </BasicModal>
    </div>
  )
}

export default ButtonCallModal