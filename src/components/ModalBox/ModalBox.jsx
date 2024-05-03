import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function ModalBox({ isShow, onClose, children, button, isFullScreen }) {
    return (
        <Modal
            fullscreen={isFullScreen}
            show={isShow}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={onClose}
            onEscapeKeyDown
            centered
            className={isFullScreen && 'full-box-modal'}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img className='Offcanvas-logo' src="/images/logo.png" alt="brand-logo" />
                    <span className='Offcanvas-title'>یه قهوه برام بخر!</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            {button && (<Modal.Footer>
                <Button className='modal-btn' onClick={onClose}>{button}</Button>
            </Modal.Footer>)}
        </Modal>
    )
}