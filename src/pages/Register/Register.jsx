import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function Register() {

    const location = useLocation()
    const phoneRegex = /^0?9\d{9}$/g
    const notValidUsername = ['user', 'admin', 'login', 'register', 'home']
    const defualtUsername = location.search.slice(15).toLowerCase() || ''

    const reducerHandler = (state, action) => {
        switch (action.type) {

            case 'USER_NAME': {
                return {
                    phone: state.phone,
                    isValidPhone: state.isValidPhone,
                    sendedCode: state.sendedCode,
                    code: state.code,
                    isValidCode: state.isValidCode,
                    isShowCodeInput: state.isShowCodeInput,

                    username: action.value.toLowerCase(),
                    isValidUserName: (!(notValidUsername.includes(action.value.toLowerCase())) && (action.value.toLowerCase().length > 3) && (action.value.toLowerCase().length < 20)),
                }
            }

            case 'PHONE_NUMBER': {
                return {
                    username: state.username,
                    isValidUserName: state.isValidUserName,
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
                    username: state.username,
                    isValidUserName: state.isValidUserName,
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
                    username: state.username,
                    isValidUserName: state.isValidUserName,
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

    const [register, dispatch] = useReducer(reducerHandler, {
        username: defualtUsername,
        isValidUserName: null,
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
        if (register.isValidCode && register.isValidPhone && register.isValidUserName) {
            alert('حساب کاربری با موفقیت ساخته شد.')
        } else {
            (register.isValidPhone && register.isValidUserName) && dispatch({ type: 'SUBMIT_PHONE' })
        }
    }

    return (
        <>
            <Header />

            <Container className='d-flex justify-content-center align-items-center'>
                <div style={{ width: '380px', minHeight: '70vh' }} className="d-flex flex-column justify-content-center align-items-center py-5 px-2 gap-4">

                    <h2 className='fw-bold h3'>ساخت حساب جدید</h2>

                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input
                            value={register.username}
                            onChange={changeHandler}
                            id='USER_NAME'
                            type="text"
                            className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-2'
                            placeholder='نام کاربری...'
                            disabled={register.isShowCodeInput}
                        />

                        {
                            (register.isValidUserName !== null ? (
                                !(register.isShowCodeInput)) && (!Boolean(register.isValidUserName) ? (
                                    <span
                                        style={{ fontSize: '0.8rem' }}
                                        className='w-100 pe-3 ps-1 p-0 text-danger fw-bold'>
                                        نام کاربری شما نا معتبر است!
                                    </span>
                                ) : (
                                    <span
                                        style={{ fontSize: '0.8rem' }}
                                        className='w-100 pe-3 ps-1 p-0 text-success fw-bold'>
                                        نام کاربری قابل تایید است.
                                    </span>
                                )
                                ) : (
                                <span style={{ fontSize: '0.8rem' }} className='text-dark text-start w-100 ps-2'>
                                    توجه داشته باشید که نام کاربری فقط درصورت ارتباط با پشتیبانی قابل تغییر است.
                                </span>
                            ))
                        }

                    </div>

                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input
                            value={register.phone}
                            onChange={changeHandler}
                            id='PHONE_NUMBER'
                            type="text"
                            className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-2'
                            placeholder='شماره تلفن...'
                            disabled={register.isShowCodeInput}
                        />

                        {
                            ((register.isValidPhone !== null) ? (
                                !(register.isShowCodeInput)) && (!Boolean(register.isValidPhone) ? (
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
                                )
                                ) : (
                                <span style={{ fontSize: '0.8rem' }} className='text-dark text-start w-100 ps-2'>
                                    توجه داشته باشید که شماره تلفن فقط درصورت ارتباط با پشتیبانی قابل تغییر است.
                                </span>
                            ))
                        }

                    </div>

                    {
                        register.isShowCodeInput && (
                            <div className="w-100 d-flex flex-column justify-content-center align-items-center">

                                <input
                                    value={register.code}
                                    onChange={changeHandler}
                                    id='VERIFY_CODE'
                                    type="text"
                                    className='border-dark border-2 rounded-3 fw-bold px-2 py-2 w-100 mb-3'
                                    placeholder='کد تایید ارسال شده به شما...'
                                />

                                {
                                    (register.isValidCode !== null) ? (!Boolean(register.isValidCode) ? (
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
                            register.isShowCodeInput ? 'ثبت نام با شماره من' : 'ارسال کد تایید'
                        }
                    </button>

                    <span
                        style={{ fontSize: '0.8rem' }}
                        className='text-center w-100 fw-bold'>
                        حساب دارید؟ <Link to='/login' className='text-primary px-1'>ورود به حساب</Link>
                    </span>

                </div>
            </Container>

            <Footer />
        </>
    )
}
