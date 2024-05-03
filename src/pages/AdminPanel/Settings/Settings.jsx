import React, { useReducer } from 'react'
import { BiImage, BiUser } from 'react-icons/bi'
import useModal from '../../../hooks/useModal'
import useSolarDate from '../../../hooks/useSolarDate'

export default function Settings() {

    const [solarDate, setDate] = useSolarDate(new Date())
    const [Modal, setModal] = useModal()

    const reducerHandler = (state, action) => {
        switch (action.type) {

            case 'PHONE': {
                return {
                    phone: action.value,
                    name: state.name,
                }
            }

            case 'NAME': {
                return {
                    phone: state.phone,
                    name: action.value,
                }
            }

        }
    }

    const [settings, dispatch] = useReducer(reducerHandler, {
        phone: '',
        name: '',

    })

    const changeHandler = ev => dispatch({
        type: ev.target.id,
        value: ev.target.value,
    })

    const submit = () => {
        if (settings.name && settings.phone) {
            const newMessage = {
                phone: settings.phone,
                name: settings.name,
            }

            setModal({ title: 'اطلاعات با موفقیت ثبت شد.', icon: 'success' })

            console.log(newMessage)
        } else {
            setModal({ title: 'لطفا اطلاعات را کامل وارد کنید!', icon: 'error' })
        }
    }

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-wrap gap-2 align-content-center justify-content-center'>

            <input
                value={settings.name}
                onChange={changeHandler}
                id='NAME'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='نام و نا خوانوادگی شما...'
            />


            <input
                value={settings.phone}
                onChange={changeHandler}
                id='PHONE'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='شماره تلفن شما...'
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