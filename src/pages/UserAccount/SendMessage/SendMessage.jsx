import React, { useReducer } from 'react'
import useModal from '../../../hooks/useModal'
import useSolarDate from '../../../hooks/useSolarDate'

export default function SendMessage() {

    const [solarDate, setDate] = useSolarDate(new Date())
    const [Modal, setModal] = useModal()

    const reducerHandler = (state, action) => {
        switch (action.type) {

            case 'MESSAGE_TITLE': {
                return {
                    messageTitle: action.value,
                    messageIsValidTitle: (action.value.length > 5 && action.value.length < 20),
                    messageBody: state.messageBody,
                    messageIsValidBody: state.messageIsValidBody,
                }
            }

            case 'MESSAGE_BODY': {
                return {
                    messageTitle: state.messageTitle,
                    messageIsValidTitle: state.messageIsValidTitle,
                    messageBody: action.value,
                    messageIsValidBody: (action.value.length > 15 && action.value.length < 60),
                }
            }

        }
    }

    const [addMessage, dispatch] = useReducer(reducerHandler, {
        messageTitle: '',
        messageIsValidTitle: null,
        messageBody: '',
        messageIsValidBody: null,

    })

    const changeHandler = ev => dispatch({
        type: ev.target.id,
        value: ev.target.value,
    })

    const submit = () => {
        if (addMessage.messageIsValidTitle && addMessage.messageIsValidBody) {
            const newMessage = {
                title: addMessage.messageTitle,
                body: addMessage.messageBody,
                created_At: solarDate,
            }

            setModal({ title: 'پیام با موفقیت ارسال شد.', icon: 'success' })

            console.log(newMessage)
        } else {
            setModal({ title: 'لطفا اطلاعات را به درستی وارد کنید!', icon: 'error' })
        }
    }

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-wrap gap-2 align-content-center justify-content-center'>
            <input
                type="text"
                onChange={changeHandler}
                value={SendMessage.messageTitle}
                id='MESSAGE_TITLE'
                placeholder='عنوان پیام خود را وارد کنید...'
                className='border-0 bg-light rounded p-3 fw-bold w-100'
            />

            {addMessage.messageIsValidTitle === null ? '' : (
                addMessage.messageIsValidTitle ? '' : (
                    <span className='text-danger fs-6 text-start w-100 ps-2'>
                        مقدار وارد شده باید حداقل 5 حرف و حداکثر 20 حرف باشد!
                    </span>
                )
            )}

            <textarea
                type="text"
                onChange={changeHandler}
                value={SendMessage.messageBody}
                id='MESSAGE_BODY'
                placeholder='متن پیام خود را وارد کنید...'
                rows={5}
                className='border-0 bg-light rounded p-3 fw-bold w-100 mt-3'
            >

            </textarea>

            {addMessage.messageIsValidBody === null ? '' : (
                addMessage.messageIsValidBody ? '' : (
                    <span className='text-danger fs-6 text-start w-100 ps-2'>
                        مقدار وارد شده باید حداقل 15 حرف و حداکثر 60 حرف باشد!
                    </span>
                )
            )}

            <button
                className="w-100 py-2 px-5 bg-theme border-0 rounded-pill fw-bold mt-3"
                onClick={submit}
            >
                ارسال پیام
            </button>

            <Modal />

        </div>
    )
}