import React from 'react'
import { FiEdit, FiShare2 } from 'react-icons/fi'
import { RiUserFollowLine } from 'react-icons/ri'
import { RiVipCrown2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function UserProfile({ edit }) {
    return (
        <div className="profile w-100 position-relative d-flex justify-content-center align-items-center flex-column border-bottom">

            <div className="d-md-none d-block mt-3 ms-3 position-absolute top-0 start-0 d-flex gap-2">
                <span className='border-0 px-3 py-2 pt-2 rounded-1 fw-bold bg-light opacity-75'>537</span>
            </div>

            <div className="d-md-block d-none mt-3 ms-3 position-absolute top-0 start-0 d-flex gap-2">
                <span className='border-0 px-5 py-2 rounded-1 fw-bold bg-light opacity-75'>537 حمایت کننده</span>
            </div>

            <div className="mt-3 me-3 position-absolute top-0 end-0 d-flex gap-2">
                <button className='share-user-btn border-0 rounded-circle fw-bold bg-light opacity-75'>
                    <FiShare2 />
                </button>
                {
                    edit ? (
                        <>
                            <button className='user-follow-icon-btn d-md-none d-block border-0 rounded-circle fw-bold bg-theme opacity-75'>
                                <FiEdit />
                            </button>
                            <Link to='' className='d-md-block d-none border-0 px-5 py-2 rounded-pill fw-bold bg-theme opacity-75'>ویرایش</Link>
                        </>
                    ) : (
                        <>
                            <button className='user-follow-icon-btn d-md-none d-block border-0 rounded-circle fw-bold bg-theme opacity-75'>
                                <RiUserFollowLine />
                            </button>
                            <button className='d-md-block d-none border-0 px-5 py-2 rounded-pill fw-bold bg-theme opacity-75'>دنبال کردن</button>
                        </>
                    )
                }
            </div >

            <div className="banner w-100 rounded overflow-hidden">
                <img src="https://fakeimg.pl/1116x220/?text=Coffee" alt="user-page-banner" className='w-100 img-fluid' />
            </div>

            <div className="profile-photo-wrap d-flex justify-content-center align-items-center flex-column">
                <div className="profile-photo overflow-hidden rounded-circle border border-5 border-light position-relative d-flex justify-content-center">
                    <RiVipCrown2Line className='fs-3 text-theme position-absolute bottom-0 mb-2' title='این حساب VIP است' />
                    <img className='w-100 h-100' src="https://fakeimg.pl/200x200/?text=Coffee" alt="user-image" />
                </div>

                <div className="profile-datas text-center">
                    <h3 className='profile-user-name fw-bold h2'>علیرضا مهدی زاده</h3>
                    <span className='profile-user-job'>توسعه دهده فرانت اند</span>
                </div>
            </div>

        </div >
    )
}
