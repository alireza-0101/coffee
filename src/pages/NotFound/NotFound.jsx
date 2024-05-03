import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiInfo } from 'react-icons/fi';


export default function NotFound() {
    return (
        <Container className='d-flex flex-column py-3 gap-3 justify-content-center align-items-center text-center vh-100 vw-100'>
            <FiInfo className='text-theme' style={{ fontSize: '100px' }} />
            <h1 className='h3 fw-bold m-0'>صفحه پیدا نشد!</h1>
            <span className='px-1' style={{ maxWidth: '370px' }}>
                صفحه مورد نظر شما پیدا نشد، لطفا آدرس سایت رو تصحیح کنید
                سپس دوباره امتحان کنید یا به صفحه اصلی برید
            </span>
            <Link to='/' className='text-block go-to-make-account py-2 px-5 border-0 fw-bold'>بریم به صفحه اصلی</Link>
        </Container>
    )
}