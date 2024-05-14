import { createPortal } from "react-dom";
import React, { useRef } from "react";
import "./Modal.css";

function Modal({ setOpenModal, videoname }) {
    const mdCont = useRef();
    

    const handleCloseModalFromBg = (e) => {
        const mdDiamensions = mdCont.current.getBoundingClientRect()
        if (e.clientX < mdDiamensions.left || e.clientX > mdDiamensions.right || e.clientY < mdDiamensions.top || e.clientY > mdDiamensions.bottom) {
            setOpenModal(false)
        }
    }
    return createPortal(
        <div className="modalBackground" onClick={handleCloseModalFromBg}>
            <div className="modal-cont" ref={mdCont}>
                {
                    videoname ?  <video className="vi" controls autoPlay muted src="/images/showwork.mp4" /> :
                    <div className="no-video">
                    <p>Video Will Be Available Shortly. <br></br>
                    Check Back Letter, Thank You.</p>
                    </div>
                }
                <button className="mod-btn" onClick={
                    () => {
                        setOpenModal(false)
                    }
                }>Close</button>
            </div>


        </div>, document.body
    );
}

export default Modal;