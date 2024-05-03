import React, { useReducer } from 'react'
import useModal from '../../../hooks/useModal'
import useSolarDate from '../../../hooks/useSolarDate'

export default function SiteDetailes() {

    const [solarDate, setDate] = useSolarDate(new Date())
    const [Modal, setModal] = useModal()

    const reducerHandler = (state, action) => {
        switch (action.type) {

            case 'ELECTRONIC_POST': {
                return {
                    electronicPost: action.value,
                    telegram: state.telegram,
                    tell: state.tell,
                }
            }

            case 'TELEGRAM': {
                return {
                    electronicPost: state.electronicPost,
                    telegram: action.value,
                    tell: state.tell,
                }
            }

            case 'TELL': {
                return {
                    electronicPost: state.electronicPost,
                    telegram: state.telegram,
                    tell: action.value,
                }
            }

        }
    }

    const [ads, dispatch] = useReducer(reducerHandler, {
        electronicPost: '',
        telegram: '',
        tell: '',

    })

    const changeHandler = ev => dispatch({
        type: ev.target.id,
        value: ev.target.value,
    })

    const submit = () => {
        if (ads.telegram && ads.electronicPost && ads.tell) {
            const newMessage = {
                electronicPost: ads.electronicPost,
                telegram: ads.telegram,
                tell: ads.tell,
            }

            setModal({ telegram: 'تبلیغ با موفقیت ثبت شد.', icon: 'success' })

            console.log(newMessage)
        } else {
            setModal({ telegram: 'لطفا اطلاعات را کامل وارد کنید!', icon: 'error' })
        }
    }

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-wrap gap-2 align-content-center justify-content-center'>

            <input
                value={ads.telegram}
                onChange={changeHandler}
                id='TELEGRAM'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='آدرس تلگرام سایت...'
            />


            <input
                value={ads.electronicPost}
                onChange={changeHandler}
                id='ELECTRONIC_POST'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='پست الکترونیکی سایت...'
            />

            <input
                value={ads.tell}
                onChange={changeHandler}
                id='TELL'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='شماره تلفن سایت...'
            />


            <button
                className="w-100 py-2 px-5 bg-theme border-0 rounded-pill fw-bold mt-3"
                onClick={submit}
            >
                بروزرسانی
            </button>

            <Modal />

        </div>
    )
}