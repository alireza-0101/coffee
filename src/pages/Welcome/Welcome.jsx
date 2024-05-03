import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <Container className='d-flex justify-content-center align-items-center vh-100 vw-100'>
            <div style={{ width: '380px' }} className="d-flex flex-column justify-content-center align-items-center px-2 gap-4">

                <h2 className='fw-bold h3'>به مدیریت محتوا خوش آمدی</h2>

                <p className='text-center fw-bold'>
                    دوست عزیزم، حساب کاربری مبارکت باشه، بزار قبل شروع بهت چنتا نکته رو رفاقتی بگم
                </p>

                <ul style={{ fontSize: '0.8rem' }} className='d-flex flex-column gap-3'>
                    <li>یادت باشه پست هایی که با شئونات کشورمون همخوانی نداره نزاری</li>
                    <li>سعی کن که حتما هفته ای حداقل دوتا پست بزاری</li>
                    <li>برای زیاد شدن حمایت هات بهت پیشنهاد میکنم لینک ضفحت رو توی شبکه های اجتماعی به اشتراک بزاری</li>
                    <li>توجه داشته باش که پس ساخت حساب کاربری ما برای حمایت از شما یک اسلایدر از 10 تا از آخرین توسعه دهندگان سایت در تمامی صفحات سایت قرار میدیم تا شما عزیزان بتونید به سادگی حمایت بشید و دنبال کننده جمع کنید</li>
                </ul>

                <Link
                    to='/account'
                    className='bg-theme w-100 p-2 fw-bold rounded-pill border-0 text-center text-black'
                >
                    برو به مدیریت محتوا
                </Link>

            </div>

        </Container>
    )
}
