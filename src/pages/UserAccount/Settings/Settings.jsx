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
                    shaba: state.shaba,
                    phone: action.value,
                    username: state.username,
                    name: state.name,
                    job: state.job,
                    profile: state.profile,
                    banner: state.banner,
                    desc: state.desc
                }
            }

            case 'USERNAME': {
                return {
                    shaba: state.shaba,
                    phone: state.phone,
                    username: action.value,
                    name: state.name,
                    job: state.job,
                    profile: state.profile,
                    banner: state.banner,
                    desc: state.desc
                }
            }

            case 'NAME': {
                return {
                    shaba: state.shaba,
                    phone: state.phone,
                    username: state.username,
                    name: action.value,
                    job: state.job,
                    profile: state.profile,
                    banner: state.banner,
                    desc: state.desc
                }
            }

            case 'JOB': {
                return {
                    shaba: state.shaba,
                    phone: state.phone,
                    username: state.username,
                    name: state.name,
                    job: action.value,
                    profile: state.profile,
                    banner: state.banner,
                    desc: state.desc
                }
            }

            case 'DESC': {
                return {
                    shaba: state.shaba,
                    phone: state.phone,
                    username: state.username,
                    name: state.name,
                    job: state.job,
                    profile: state.profile,
                    banner: state.banner,
                    desc: action.value
                }
            }

            case 'SHABA': {
                return {
                    shaba: action.value,
                    phone: state.phone,
                    username: state.username,
                    name: state.name,
                    job: state.job,
                    profile: state.profile,
                    banner: state.banner,
                    desc: state.desc
                }
            }

            case 'PROFILE': {
                return {
                    shaba: state.shaba,
                    phone: state.phone,
                    username: state.username,
                    name: state.name,
                    job: state.job,
                    profile: action.value,
                    banner: state.banner,
                    desc: state.desc
                }
            }

            case 'BANNER': {
                return {
                    shaba: state.shaba,
                    phone: state.phone,
                    username: state.username,
                    name: state.name,
                    job: state.job,
                    profile: state.profile,
                    banner: action.value,
                    desc: state.desc
                }
            }

        }
    }

    const [settings, dispatch] = useReducer(reducerHandler, {
        phone: '09115697829',
        username: 'alireza-mh',
        name: '',
        job: '',
        desc: '',
        shaba: '',
        profile: {},
        banner: {},

    })

    const changeHandler = ev => dispatch({
        type: ev.target.id,
        value: ev.target.value,
    })

    const fileChangeHandler = ev => dispatch({
        type: ev.target.id,
        value: ev.target.files[0],
    })

    const submit = () => {
        if (settings.name && settings.job && settings.desc && settings.profile.name && settings.banner.name) {
            const newMessage = {
                phone: settings.phone,
                username: settings.username,
                name: settings.name,
                job: settings.job,
                desc: settings.desc,
                profile: settings.profile,
                banner: settings.banner,
                created_At: solarDate,
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
                value={settings.username}
                onChange={() => { }}
                id='USERNAME'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100 opacity-50'
                placeholder='نام کاربری شما...'
                disabled // Don't change by user!
            />

            <span className='text-dark fs-6 text-start w-100 ps-2 mb-2'>
                برای تغییر نام کاربری با پشتیبانی در ارتباط باشید.
            </span>

            <input
                value={settings.phone}
                onChange={() => { }}
                id='PHONE'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100 opacity-50'
                placeholder='شماره تلفن شما...'
                disabled // Don't change by user!
            />

            <span className='text-dark fs-6 text-start w-100 ps-2 mb-2'>
                برای تغییر شماره تلفن با پشتیبانی در ارتباط باشید.
            </span>


            <input
                value={settings.name}
                onChange={changeHandler}
                id='NAME'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='نام و نا خوانوادگی شما...'
            />

            <input
                value={settings.job}
                onChange={changeHandler}
                id='JOB'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='عنوان شغلی شما...'
            />

            <input
                value={settings.desc}
                onChange={changeHandler}
                id='DESC'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='معرفی کوتاه شغلی...'
            />

            <input
                value={settings.shaba}
                onChange={changeHandler}
                id='SHABA'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='کد شباء بانکی شما...'
            />

            <div className="w-100 d-flex flex-wrap justify-content-evenly align-items-center gap-2 px-1 mt-5">

                <label style={{ cursor: 'pointer', minWidth: '180px', maxWidth: '300px' }} htmlFor="PROFILE" className='w-50 d-flex justify-content-center align-items-center flex-column rounded-2 border border-2 border-dark fw-bold bg-white p-3'>
                    <BiUser className='fs-1' />
                    <span>پروفایل کاربری</span>
                </label>
                <input onChange={fileChangeHandler} id='PROFILE' type="file" className='d-none' accept='.jpg, .png, .jpeg, .gif' />

                <label style={{ cursor: 'pointer', minWidth: '180px', maxWidth: '300px' }} htmlFor="BANNER" className='w-50 d-flex justify-content-center align-items-center flex-column rounded-2 border border-2 border-dark fw-bold bg-white p-3'>
                    <BiImage className='fs-1' />
                    <span>کاور صفحه</span>
                </label>
                <input onChange={fileChangeHandler} id='BANNER' type="file" className='d-none' accept='.jpg, .png, .jpeg, .gif' />

            </div>

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