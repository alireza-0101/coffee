import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StepBox from '../../../components/StepBox/StepBox'
import './Premium.css'

export default function Premium() {
    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>
            <Container fluid className='py-5 mb-5 px-md-5 px-2 d-flex flex-column align-items-center'>
                <h2 className='h1 fw-bold 0 text-center step-by-step-title'>قابلیت های جذاب بعد از <b>خرید اشتراک</b> و روش خرید</h2>
                <Row>
                    <Col xs={12}>
                        <StepBox
                            number={1}
                            desc='شما با استفاده از دکمه آخر همین صفحه وارد صفحه پرداخت میشوید تا با پرداخت فقط 50,000 تومن اشتراک یک ماهه مارو خریداری کنید'
                        />
                    </Col>
                    <Col xs={12}>
                        <StepBox
                            number={2}
                            desc='پس از خرید اشتراک خودکار بعد از ورود به پنل قابلیت های ما برای شما فعال میشود و میتوانید لذت ببرید'
                        />
                    </Col>
                    <Col xs={12}>
                        <StepBox
                            number={3}
                            desc='اولین قابلیتی که فعال میشود ارسال پیام به دنبال کننده ها و اطلاع رسانی اتفاقات مهم زندگی شماست'
                        />
                    </Col>
                    <Col xs={12}>
                        <StepBox
                            number={4}
                            desc='دومین قابلیت ما برای شما پست هایی در صفحه کاربریتان هست که میتواند بدون تصویر، با تصویر و یا ویدیو و یا موسیقی باشد'
                        />
                    </Col>
                    <Col className='d-flex flex-column align-items-center mt-5' xs={12}>
                        <button className='go-to-make-account py-2 px-5 border-0'><b>بریم اشتراک بخریم</b> - 50,000</button>
                        <span className='step-no-pay-text'>این فرایند <b className='mx-1'>50,000</b> تومن هزینه دارد و مشمول هزینه میشود.</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
