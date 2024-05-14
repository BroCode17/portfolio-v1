import React, { useRef } from 'react'

function ModalTwo() {
    const modalRef = useRef();
    
    const handleModal = (e) =>{
        console.log(modalRef)
    }
    return (
        <>
        <button onClick={(e) => handleModal(e)}>Show Modal</button>
        <dialog ref={modalRef}>
        ModalTwo
        </dialog>
        </>

    )
}

export default ModalTwo