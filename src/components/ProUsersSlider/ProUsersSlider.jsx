import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { Container } from 'react-bootstrap';
import UserCard from '../UserCard/UserCard';

export default function ProUsersSlider() {
    return (
        <Container className='my-5 px-3 px-md-5'>
            <Swiper
                slidesPerView={4}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                        centeredSlides: true,
                    },
                    800: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 80,
                        centeredSlides: false,
                    },
                }}
                className="pro-users-slider"
            >
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}