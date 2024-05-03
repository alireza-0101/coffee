import React, { useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import { Container, Offcanvas } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

import { Link, NavLink } from 'react-router-dom'
import { BiHomeAlt, BiStar } from 'react-icons/bi'
import { BsJournalPlus, BsJournalText } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiUserHeartLine } from 'react-icons/ri'
import { HiOutlineExternalLink, HiOutlineMailOpen } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineMarkEmailRead } from 'react-icons/md'

export default function Index() {

    const [showSidebar, setShowSidebar] = useState(false)

    const showSidebarHandler = () => setShowSidebar(prev => !prev)

    return (
        <>

            <Sidebar show={showSidebar} onHide={showSidebarHandler}>
                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='dashbord' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <BiHomeAlt className='fs-5' />
                        <span>خانه اصلی</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='followers' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <RiUserHeartLine className='fs-5' />
                        <span>دنبال کنندگان</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='send-message' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <HiOutlineMailOpen className='fs-5' />
                        <span>ارسال پیام</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='messages' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <MdOutlineMarkEmailRead className='fs-5' />
                        <span>پیام ها</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='protection' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <AiOutlineHeart className='fs-5' />
                        <span>حمایت ها</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='posts' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <BsJournalText style={{ fontSize: '1.12rem' }} />
                        <span>پست ها</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='add-post' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <BsJournalPlus style={{ fontSize: '1.12rem' }} />
                        <span>افزودن پست</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='premium' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <BiStar className='fs-5' />
                        <span>خرید اشتراک</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <NavLink onClick={showSidebarHandler} to='settings' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <IoSettingsOutline className='fs-5' />
                        <span>تنظیمات کاربری</span>
                    </NavLink>
                </li>

                <li className='fw-bold d-flex align-items-center justify-content-start w-100'>
                    <Link target='_blank' to='/5555555555' className='account-sidebar-items d-flex gap-2 w-100 h-100 p-2 rounded-pill text-dark'>
                        <HiOutlineExternalLink className='fs-5' />
                        <span>صفحه شما</span>
                    </Link>
                </li>
            </Sidebar>

            <Container fluid='xl' className='min-vh-100 pt-3'>

                <Topbar onShowSidebar={showSidebarHandler} />

                <Container fluid='xl' className='mt-4 mb-4'>
                    <Outlet />
                </Container>

            </Container >

        </>
    )
}
