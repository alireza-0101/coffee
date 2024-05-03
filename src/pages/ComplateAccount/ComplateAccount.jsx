import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap';
import { BiImage, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function ComplateAccount() {

    const reducerHandler = (state, action) => {
        switch (action.type) {

            case 'NAME': {
                return {
                    shaba: state.shaba,
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
                    name: state.name,
                    job: state.job,
                    profile: state.profile,
                    banner: action.value,
                    desc: state.desc
                }
            }

        }
    }

    const [complateAccount, dispatch] = useReducer(reducerHandler, {
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
        value: ev.target.files,
    })

    const submit = () => {

    }

    return (
        <>
            <Header />

            <Container className='d-flex justify-content-center align-items-center'>
                <div style={{ width: '380px', minHeight: '70vh' }} className="d-flex flex-column justify-content-center align-items-center py-5 px-2 gap-4">

                    <h2 className='fw-bold h3'>اتمام ساخت حساب</h2>

                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input
                            value={complateAccount.name}
                            onChange={changeHandler}
                            id='NAME'
                            type="text"
                            className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-2'
                            placeholder='نام و نا خوانوادگی شما...'
                        />
                    </div>

                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input
                            value={complateAccount.job}
                            onChange={changeHandler}
                            id='JOB'
                            type="text"
                            className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-2'
                            placeholder='عنوان شغلی شما...'
                        />
                    </div>

                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input
                            value={complateAccount.desc}
                            onChange={changeHandler}
                            id='DESC'
                            type="text"
                            className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-2'
                            placeholder='معرفی کوتاه شغلی...'
                        />
                    </div>

                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input
                            value={complateAccount.shaba}
                            onChange={changeHandler}
                            id='SHABA'
                            type="text"
                            className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-2'
                            placeholder='کد شباء بانکی شما...'
                        />
                    </div>

                    <div className="w-100 d-flex justify-content-center align-items-center gap-2 px-1">

                        <label style={{ cursor: 'pointer' }} htmlFor="PROFILE" className='w-50 d-flex justify-content-center align-items-center flex-column rounded-2 border border-2 border-dark fw-bold bg-white p-3'>
                            <BiUser className='fs-1' />
                            <span>پروفایل کاربری</span>
                        </label>
                        <input onChange={fileChangeHandler} id='PROFILE' type="file" className='d-none' accept='.jpg, .png, .jpeg, .gif' />

                        <label style={{ cursor: 'pointer' }} htmlFor="BANNER" className='w-50 d-flex justify-content-center align-items-center flex-column rounded-2 border border-2 border-dark fw-bold bg-white p-3'>
                            <BiImage className='fs-1' />
                            <span>کاور صفحه</span>
                        </label>
                        <input onChange={fileChangeHandler} id='BANNER' type="file" className='d-none' accept='.jpg, .png, .jpeg, .gif' />

                    </div>

                    <button className='bg-theme w-100 p-2 fw-bold rounded-pill border-0' onClick={submit}>اتمام ساخت حساب</button>

                    {/* <div className="w-100 d-flex justify-content-center align-items-center gap-3 px-3">

                        <label style={{ cursor: 'pointer' }} htmlFor="PROFILE" className='w-50 d-flex justify-content-center align-items-center flex-column rounded-2 border border-2 border-dark fw-bold bg-white p-3'>
                            <BiUser className='fs-1' />
                            <span>پروفایل کاربری</span>
                        </label>
                        <input id='PROFILE' type="file" className='d-none' accept='.jpg, .png, .jpeg, .gif' />

                        <label style={{ cursor: 'pointer' }} htmlFor="PROFILE" className='w-50 d-flex justify-content-center align-items-center flex-column rounded-2 border border-2 border-dark fw-bold bg-white p-3'>
                            <BiImage className='fs-1' />
                            <span>کاور صفحه</span>
                        </label>
                        <input id='BANNER' type="file" className='d-none' accept='.jpg, .png, .jpeg, .gif' />

                    </div> */}

                </div>

            </Container>

            <Footer />
        </>
    )
}