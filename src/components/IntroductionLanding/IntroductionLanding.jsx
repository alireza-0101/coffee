import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './IntroductionLanding.css'

export default function IntroductionLanding() {
    return (
        <Container fluid className='introduction-container py-5 mb-5 px-md-5 px-2 d-flex flex-column align-items-center'>
            <Row>
                <Col xs={12} className="d-flex flex-column align-items-center gap-3 text-black">
                    <span className='fw-bold'>حمایت مالی از شما</span>
                    <h2 className='h1 fw-bold 0 text-center intro-title'>یک راه آسان برای حمایت شدن شما فقط در چند دقیقه کوتاه ولی با ارزش</h2>
                    <p className='intro-desc text-center'>
                        برای من یک قهوه بخر، پشتیبانی را سرگرم کننده و آسان می کند. فقط با چند ضربه، طرفداران شما می توانند پرداخت را انجام دهند (برای شما یک قهوه بخرند) و پیام ارسال کنند. اگر شما هم به این حمایت مالی علاقه دارید میتونید همین الان حساب بسازید آنها حتی نیازی به ایجاد حساب کاربری ندارند!
                    </p>
                </Col>

                <Col className="d-flex flex-column align-items-center gap-3 mt-4" xs={12}>
                    <img className='img-fluid intro-img' src="images/intro.png" alt="Introduction image" />
                </Col>
            </Row>
        </Container>
    )
}
