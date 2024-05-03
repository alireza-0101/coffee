import React from 'react'
import { Card } from 'react-bootstrap'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { RiVipCrown2Line } from 'react-icons/ri'

export default function UserCard({ img, href, name, desc, supporter }) {
    return (
        <Card className='border-0 bg-transparent position-relative' style={{ width: '200px', height: '310px' }}>

            <RiVipCrown2Line className='fs-3 position-absolute end-0 top-0 me-2 mt-1 text-theme' title='این حساب VIP است' />

            <Link to="/000000" className='text-black'>

                <Card.Img
                    className='w-100 img-fluid rounded-0'
                    style={{ height: '200px' }}
                    variant="top"
                    src="https://fakeimg.pl/200x200/?text=Coffee"
                />

                <Card.Body className='p-0 pt-3'>

                    <Card.Text>
                        <b>علیرضا مهدی زاده </b> حمایت هدفمند، عقلانه محور و پشتیبانی.
                    </Card.Text>

                    <div className='d-flex justify-content-start align-items-lg-center gap-1'>
                        <FiHeart className='mb-1' />
                        <span>616 حمایت کننده</span>
                    </div>

                </Card.Body>

            </Link>

        </Card>
    )
}
