import React from 'react'
import { Modal } from 'react-bootstrap'
import TextBox from '../TextBox/TextBox'

export default function ChatBox({ isShow, showHandler }) {
    return (
        <Modal
            fullscreen
            show={isShow}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={showHandler}
            onEscapeKeyDown
            centered
            className='full-box-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img className='Offcanvas-logo' src="/images/logo.png" alt="brand-logo" />
                    <span className='Offcanvas-title'>یه قهوه برام بخر!</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='answer' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='answer' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='answer' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='answer' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='answer' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                    <TextBox isSms='queastion' name='علی مرادی' desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />


            </Modal.Body>
            <Modal.Footer className='border-0'>
                <input
                    type="text"
                    className='border-0 bg-light rounded p-3 fw-bold w-100 text-start'
                    placeholder='نوشتن پیامی جدید...'
                />

                <button
                    className="w-100 py-2 px-5 bg-theme border-0 rounded-pill fw-bold mt-3"
                >
                    ارسال پیام
                </button>
            </Modal.Footer>
        </Modal>
    )
}
