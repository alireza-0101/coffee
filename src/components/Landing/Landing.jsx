import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

export default function Landing() {

    const [userDefaultName, setUserDefaultName] = useState('')
    const [isValidUserDefaultName, setIsValidUserDefaultName] = useState(null)
    const navigate = useNavigate()
    const notValidUsername = ['user', 'admin', 'login', 'register', 'home']

    const changeHandler = ev => {
        let value = ev.target.value.toLowerCase().trim()

        if (value) {
            setIsValidUserDefaultName((!(notValidUsername.includes(value.toLowerCase())) && (value.toLowerCase().length > 3) && (value.toLowerCase().length < 20)))
        } else {
            setIsValidUserDefaultName(null)
        }

        setUserDefaultName(value)
    }

    const submit = () => isValidUserDefaultName && navigate(`/auth?defualt-value=${userDefaultName}`)

    return (
        <Container className='mt-md-5 mt-2 pt-md-3 pt-4 pb-4'>
            <Row className='landing'>
                <Col xs={12} md={6}>
                    <h1 className='landing-title'>حمایت توسعه دهنده با قهوه داغ!</h1>
                    <p className='landing-sub-title'>
                        حمایت هدفمند، عقلانه محور و جامع برنامه همیشگی همراه با پشتیبانی دائمی جزو استاندارد های حمایتی شرکت ما است که بدون شک باعث ورود شما به دنیای حمایت خواهد شد. دوست داری تو هم حساب داشته باشی؟
                    </p>
                    <div className={`landing-start-to-create-account border border-2 ${isValidUserDefaultName === null ? 'border-white' : (isValidUserDefaultName ? 'border-success' : 'border-danger')}`}>

                        <span>buymeacoffee.com/</span>

                        <input
                            type="text"
                            placeholder='username'
                            value={userDefaultName}
                            onChange={changeHandler}
                        />

                        <button
                            className={isValidUserDefaultName === null ? 'bg-theme' : (isValidUserDefaultName ? 'bg-success text-white' : 'bg-danger text-white')}
                            onClick={submit}
                        >
                            شروع ساخت
                        </button>
                    </div>
                    <span className='landing-no-pay-text'>این فرایند کاملا <b className='mx-1'>رایگان</b> است و مشمول هزینه نمیشود.</span>
                </Col>
                <Col className='d-flex justify-content-center align-items-center position-relative' xs={12} md={6}>
                    <img
                        className='landing-image'
                        src="/images/coffe.png"
                        alt="landing-banner-img"
                    />
                </Col>
            </Row>
        </Container>
    )
}
