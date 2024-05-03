import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { IoIosArrowDown } from 'react-icons/io';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/ContactUs/ContactUs';
import LastUserSlider from '../../components/LastUserSlider/LastUserSlider';
import PostCard from '../../components/PostCard/PostCard';
import TextBox from '../../components/TextBox/TextBox';
import UserProfile from '../../components/UserProfile/UserProfile';

export default function User() {
    return (
        <>
            <Header />
            <Container className='mt-4 pt-2'>

                <UserProfile />

                <Row>
                    <Col xs={12} md={7} className="p-3">

                        <PostCard
                            title='میدونی این عکس چیه؟'
                            desc='من میدونم این عکس چیه و شما هم خوب میدونید که چیه. نظرتون؟'
                            link='#'
                            linkText='لینک ضمیمه عکس'
                            img='https://fakeimg.pl/620x390/?text=Coffee'
                            voice=''
                            video=''
                        />

                        <PostCard
                            title='ویدیو خرگوش زیبا'
                            desc='علیرضا مهدی زاده حمایت هدفمند، عقلانه محور و پشتیبانی.'
                            link='#'
                            linkText='لینک ضمیمه ویدیو'
                            img='https://fakeimg.pl/620x390/?text=Coffee'
                            voice=''
                            video='https://www.w3schools.com/html/mov_bbb.mp4'
                        />

                        <PostCard
                            title='موزیک جدید و زیبای بهنام بانی'
                            desc='نمیدونم چرا وقتی به این موزیک گوش میکنم انگار قند توی دلم آب میشه...'
                            link='#'
                            linkText='لینک ضمیمه موزیک'
                            img=''
                            voice='https://dl1.upahang.com/music/2021/11/19/CQACAgQAAxkBAAJBmmA4a6aoMQYT9_Tcr6BW7l-qsDuqAAKxCAACI7zBUQXuTpuBWLAGHgQ.mp3'
                            video=''
                        />

                        <PostCard
                            title='موزیک جدید و زیبای بهنام بانی'
                            desc='نمیدونم چرا وقتی به این موزیک گوش میکنم انگار قند توی دلم آب میشه...'
                            link='#'
                            linkText='لینک ضمیمه موزیک'
                            img='https://fakeimg.pl/620x390/?text=Coffee'
                            voice='https://dl1.upahang.com/music/2021/11/19/CQACAgQAAxkBAAJBmmA4a6aoMQYT9_Tcr6BW7l-qsDuqAAKxCAACI7zBUQXuTpuBWLAGHgQ.mp3'
                            video=''
                        />

                        <PostCard
                            title='متنی زیبا از مولانا'
                            desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!

                            برای فالوورها، یک روز پس از انتشار ویدیو، این الگو یک بار برای همه ایمیل می شود، لطفاً صبور باشید. این فقط برای ویدیویی که بلافاصله پس از فالوور شدن شما منتشر شد موجود است، الگوی ویدیوی قبلی دیگر ایمیل نخواهد شد.'
                            link='#'
                            linkText='لینک ضمیمه متن'
                            img=''
                            voice=''
                            video=''
                        />

                        <div className="show-more-btn alert bg-white mt-4 w-100 d-flex justify-content-center align-items-center gap-2 fw-bold">دیدن ادامه حمایت ها <IoIosArrowDown className='mb-1' /></div>

                    </Col>
                    <Col xs={12} md={5} className="p-3">

                        <div className="pay-box bg-white w-100 p-4 rounded-2 mt-4 rounded-2">
                            <h3 className='h5 fw-bold'>خرید قهوه برای <b className='text-theme'>علیرضا مهدی زاده</b></h3>
                            <div className="count-box w-100 p-3 bg-light mt-3 fs-3 d-flex justify-content-center align-content-center gap-3 fw-bold">
                                <input value={1} onChange={() => { }} type="text" className='coffee-count-input border-0 rounded fs-5 text-center pt-1 fw-bold' />

                                <span className='set-number-to-coffe-count border-theme fs-5 rounded-circle d-none justify-content-center align-items-center pt-1 d-md-flex'>
                                    5
                                </span>

                                <span className='set-number-to-coffe-count border-theme fs-5 rounded-circle d-flex justify-content-center align-items-center pt-1'>
                                    3
                                </span>

                                <span className='set-number-to-coffe-count border-theme bg-theme fs-5 rounded-circle d-flex justify-content-center align-items-center pt-1'>
                                    1
                                </span>

                                <span>x</span>
                                <span>☕</span>
                            </div>
                            <input className='w-100 p-3 fw-bold mt-3 border-0 bg-light' type="text" placeholder='نام خود را وارد کنید (دلخواه)' />
                            <textarea className='w-100 p-3 fw-bold mt-3 border-0 bg-light' type="text" rows={5} placeholder='متنی زیبا بنویسید (دلخواه)' ></textarea>
                            <Form.Group className="mb-1 mt-2 show-for-developer-check-box" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="نمایش حمایت فقط برای توسعه دهنده" />
                            </Form.Group>
                            <button className='w-100 p-3 fw-bold mt-3 border-0 bg-theme rounded-pill'>پرداخت - 15,000 تومان</button>
                        </div>

                        <TextBox name='' count={1} desc='' />

                        <TextBox name='علی مرادی' count={8} desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                        <TextBox name='علی مرادی' count={8} desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                        <TextBox name='علی مرادی' count={8} desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                        <TextBox name='' count={1} desc='' />

                        <TextBox name='' count={1} desc='' />

                        <TextBox name='علی مرادی' count={8} desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                        <TextBox name='علی مرادی' count={8} desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                        <TextBox name='علی مرادی' count={8} desc='علیرضا الگوی صنایع دستی را که در ویدیو نشان داده شده است از این پس در این پلتفرم آپلود خواهد کرد!' />

                        <TextBox name='' count={1} desc='' />

                        <div className="show-more-btn alert bg-white mt-4 w-100 d-flex justify-content-center align-items-center gap-2 fw-bold">دیدن ادامه حمایت ها <IoIosArrowDown className='mb-1' /></div>

                    </Col>
                </Row>

            </Container>
            <LastUserSlider />
            <ContactUs />
            <Footer />
        </>
    )
}