import React from 'react'
import { Alert, Container } from 'react-bootstrap'

export default function WeSupportYou({ isFluid }) {
    return (
        <Container fluid={isFluid}>
            <Alert variant='light'>
                <h3 className='fw-bold h3 mb-2'>ما شما را حمایت میکنیم :)</h3>
                <p style={{lineHeight: '2'}}>
                    دوست عزیز خودم، توجه داشته باش که پس ساخت <b>حساب کاربری</b> ما برای حمایت از شما یک اسلایدر از 10 تا از آخرین توسعه دهندگان سایت در تمامی صفحات سایت قرار میدیم تا شما عزیزان بتونید به سادگی <b>حمایت بشید</b> و دنبال کننده جمع کنید. با تشکر از شما
                </p>
            </Alert>
        </Container>
    )
}