import React from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css'

const Modal = (props) => {
    const Backdrop = () => {
        return <div className={styles.backdrop} onClick={props.onClose}></div>
    };
    const ModalOverlay = () => {
        return (
            <div className={styles.modal}>
                <div className={styles.content}>{props.children}</div>
            </div>
        )
    };
    const portalElement = document.getElementById('overlay');
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>
                {props.children}
            </ModalOverlay>, portalElement)}
        </React.Fragment>
    );
};

export default Modal;
