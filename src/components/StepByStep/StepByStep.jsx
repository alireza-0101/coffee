import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StepBox from '../StepBox/StepBox'
import './StepByStep.css'

export default function StepByStep() {
    return (
        <Container fluid className='py-5 mb-5 px-md-5 px-2 d-flex flex-column align-items-center'>
            <h2 className='h1 fw-bold 0 text-center step-by-step-title'>طراحی <b>صفحه حمایت</b> فقط با چند قدم ساده و رایگان برای شما</h2>
            <Row>
                <Col xs={12}>
                    <StepBox number={1} desc='من سه ماه و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.' />
                </Col>
                <Col xs={12}>
                    <StepBox number={2} desc='من سه ماه و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.' />
                </Col>
                <Col xs={12}>
                    <StepBox number={3} desc='من سه ماه و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.' />
                </Col>
                <Col xs={12}>
                    <StepBox number={4} desc='من سه ماه و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.' />
                </Col>
                <Col className='d-flex flex-column align-items-center mt-5' xs={12}>
                    <button className='go-to-make-account py-2 px-5 border-0 bg-theme'><b>بریم یک حساب بسازیم</b> - رایگان</button>
                    <span className='step-no-pay-text'>این فرایند کاملا <b className='mx-1'>رایگان</b> است و مشمول هزینه نمیشود.</span>
                </Col>
            </Row>
        </Container>
    )
}