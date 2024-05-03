import React, { useState } from 'react'
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FaQuestionCircle } from 'react-icons/fa'
import ChatBox from '../ChatBox/ChatBox'
import ModalBox from '../ModalBox/ModalBox'
import TextBox from '../TextBox/TextBox'

export default function Support() {

    const [showChatBox, setShowChatBox] = useState(false)

    const showChatBoxHandler = () => setShowChatBox(prev => !prev)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            ارتباط با پشتیبانی برای حل مشکل یا گزارش کارکر سایت
        </Tooltip>
    )

    return (
        <>

            <div
                className='support-btn d-flex justify-content-center align-items-center bg-theme position-fixed bottom-0 start-0 rounded-circle mb-4 ms-4'
                onClick={showChatBoxHandler}
            >
                <Badge
                    bg="dark"
                    style={{ width: '20px', height: '20px' }}
                    className='position-absolute rounded-circle top-0 start-0 d-flex justify-content-center align-items-center'
                >
                    N
                </Badge>
                <OverlayTrigger
                    placement="left"
                    overlay={renderTooltip}
                >
                    <b>
                        <FaQuestionCircle className='icon fs-2 text-dark' />
                    </b>
                </OverlayTrigger>
            </div>

            <ChatBox isShow={showChatBox} showHandler={showChatBoxHandler} />

        </>
    )
}