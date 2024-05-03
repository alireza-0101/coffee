import React, { useEffect, useState } from 'react'
import ModalBox from '../components/ModalBox/ModalBox'
import { BiCheckCircle, BiErrorCircle, BiInfoCircle } from 'react-icons/bi'

export default function useModal() {

    const [modal, setModal] = useState({})

    const [isShowModal, setIsShowModal] = useState(false)

    const showModalHandler = () => setIsShowModal(prev => !prev)

    useEffect(() => {
        if (modal.title && modal.icon) {
            showModalHandler()
        }
    }, [modal])

    const Modal = () => (
        <ModalBox isShow={isShowModal} onClose={showModalHandler} button='دمت گرم' >
            <div className="d-flex justify-content-center align-items-center gap-3 flex-column">
                {modal.icon === 'error' && <BiErrorCircle className='text-danger' style={{ fontSize: '7rem' }} />}
                {modal.icon === 'info' && <BiInfoCircle className='text-info' style={{ fontSize: '7rem' }} />}
                {modal.icon === 'success' && <BiCheckCircle className='text-success' style={{ fontSize: '7rem' }} />}

                <h3 className='fw-bold h4'>{modal.title}</h3>
            </div>
        </ModalBox>
    )

    return [Modal, setModal]
}
