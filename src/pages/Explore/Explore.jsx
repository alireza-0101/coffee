import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/ContactUs/ContactUs';
import LastUserSlider from '../../components/LastUserSlider/LastUserSlider';
import UserCard from '../../components/UserCard/UserCard';
import { IoIosArrowDown } from 'react-icons/io';
import { Container } from 'react-bootstrap';

export default function Explore() {
    return (
        <>
            <Header />

            <Container className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-5">

                <div className="explore-filter flex-wrap w-100 p-2 bg-white d-flex gap-3 fs-6 justify-content-center align-items-center">
                    <input style={{ width: '300px' }} type="text" className='bg-theme border-0 px-3 py-2 fw-bold fs-6' placeholder='نام توسعه دهنده را جستجو کنید...' />

                    <button className='fw-bold d-flex justify-content-center align-items-center gap-2 bg-light border-0 px-4 pt-2 pb-1'>
                        بر اساس برترین
                    </button>

                    <button className='bg-theme fw-bold d-flex justify-content-center align-items-center gap-2 bg-light border-0 px-4 pt-2 pb-1'>
                        بر اساس کمترین
                    </button>

                    <button className='fw-bold d-flex justify-content-center align-items-center gap-2 bg-light border-0 px-4 pt-2 pb-1'>
                        بر اساس برترین
                    </button>

                    <button className='fw-bold d-flex justify-content-center align-items-center gap-2 bg-light border-0 px-4 pt-2 pb-1'>
                        بر اساس برترین
                    </button>
                </div>

                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />

                <div className="show-more-btn alert bg-white mt-4 w-100 d-flex justify-content-center align-items-center gap-2 fw-bold">دیدن کاربران بیشتر<IoIosArrowDown className='mb-1' /></div>

            </Container>

            <LastUserSlider />
            <ContactUs />
            <Footer />
        </>
    )
}