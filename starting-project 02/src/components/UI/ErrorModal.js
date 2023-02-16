import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

const ErrorModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(props.error.title)

    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        if (props.error.message !== undefined) {
            setIsModalOpen(true);
        }
    }, [props.error.title])



    const handleOk = () => {
        setIsModalOpen(false);
        // props.error.title.value = 
    };


    return (
        <>
            <Modal title={props.error.title} open={isModalOpen} onOk={handleOk} >
                <p>{props.error.messsage}</p>

            </Modal>
        </>
    );
};

export default ErrorModal;