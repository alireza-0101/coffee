import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function Login() {

    const phoneRegex = /^0?9\d{9}$/g

    const reducerHandler = (state, action) => {
        switch (action.type) {

            case 'PHONE_NUMBER': {
                return {
                    sendedCode: state.sendedCode,
                    code: state.code,
                    isValidCode: state.isValidCode,
                    isShowCodeInput: state.isShowCodeInput,

                    phone: action.value,
                    isValidPhone: phoneRegex.test(action.value),
                }
            }

            case 'VERIFY_CODE': {
                return {
                    phone: state.phone,
                    isValidPhone: state.isValidPhone,
                    sendedCode: state.sendedCode,
                    isShowCodeInput: state.isShowCodeInput,

                    code: action.value,
                    isValidCode: state.sendedCode === action.value,
                }
            }

            case 'SUBMIT_PHONE': {
                return {
                    phone: state.phone,
                    isValidPhone: state.isValidPhone,
                    sendedCode: state.sendedCode,
                    code: state.code,
                    isValidCode: state.isValidCode,

                    isShowCodeInput: true,
                }
            }

        }
    }

    const [login, dispatch] = useReducer(reducerHandler, {
        phone: '',
        isValidPhone: null,
        sendedCode: '123456',
        code: '',
        isValidCode: null,
        isShowCodeInput: false,
    })

    const changeHandler = ev => dispatch({
        type: ev.target.id,
        value: ev.target.value,
    })

    const submit = () => {
        if (login.isValidCode && login.isValidPhone) {
            alert('شما وارد حساب کاربری شدید.')
        } else {
            login.isValidPhone && dispatch({ type: 'SUBMIT_PHONE' })
        }
    }

    return (
        <>
            <Header />

            <Container className='d-flex justify-content-center align-items-center'>
                <div style={{ width: '380px', minHeight: '70vh' }} className="d-flex flex-column justify-content-center align-items-center py-5 px-2 gap-4">

                    <h2 className='fw-bold h3'>برگشت شما مبارک</h2>

                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input
                            value={login.phone}
                            onChange={changeHandler}
                            id='PHONE_NUMBER'
                            type="text"
                            className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-2'
                            placeholder='شماره تلفن...'
                            disabled={login.isShowCodeInput}
                        />

                        {
                            (login.isValidPhone !== null && !(login.isShowCodeInput)) && (!Boolean(login.isValidPhone) ? (
                                <span
                                    style={{ fontSize: '0.8rem' }}
                                    className='w-100 pe-3 ps-1 p-0 text-danger fw-bold'>
                                    شماره تلفن شما نا معتبر است!
                                </span>
                            ) : (
                                <span
                                    style={{ fontSize: '0.8rem' }}
                                    className='w-100 pe-3 ps-1 p-0 text-success fw-bold'>
                                    شماره تلفن قابل تایید است.
                                </span>
                            ))
                        }

                    </div>

                    {
                        login.isShowCodeInput && (
                            <div className="w-100 d-flex flex-column justify-content-center align-items-center">

                                <input
                                    value={login.code}
                                    onChange={changeHandler}
                                    id='VERIFY_CODE'
                                    type="text"
                                    className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-3'
                                    placeholder='کد تایید ارسال شده به شما...'
                                />

                                {
                                    (login.isValidCode !== null) ? (!Boolean(login.isValidCode) ? (
                                        <span
                                            style={{ fontSize: '0.8rem' }}
                                            className='w-100 pe-3 ps-1 p-0 text-danger fw-bold'>
                                            کد وارد شده درست نمیباشد!
                                        </span>
                                    ) : (
                                        <span
                                            style={{ fontSize: '0.8rem' }}
                                            className='w-100 pe-3 ps-1 p-0 text-success fw-bold'>
                                            کد وارد شده قابل تایید است.
                                        </span>
                                    )) : (
                                        <span
                                            style={{ fontSize: '0.8rem' }}
                                            className='w-100 pe-3 ps-1 p-0'>
                                            ما فقط یک کد ورود موقت برای شما ارسال کردیم. لطفا صندوق ورودی خود را بررسی کنید
                                        </span>
                                    )
                                }

                            </div>
                        )
                    }

                    <button className='bg-theme w-100 p-2 fw-bold rounded-pill border-0' onClick={submit}>
                        {
                            login.isShowCodeInput ? 'ورود با شماره من' : 'ارسال کد تایید'
                        }
                    </button>

                    <span
                        style={{ fontSize: '0.8rem' }}
                        className='text-center w-100 fw-bold'>
                        حساب ندارید؟ <Link to='/register' className='text-primary px-1'>ساخت حساب</Link>
                    </span>

                </div>
            </Container>

            <Footer />
        </>
    )
}
