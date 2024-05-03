import React, { useState } from 'react'
import './Header.css'
import { Container, Offcanvas } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import MobileSidebar from '../MobileSidebar/MobileSidebar'
import { BiMenu, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Header() {

    const [showSidebar, setShowSidebar] = useState(false)

    const showSidebarHandler = () => setShowSidebar(prev => !prev)

    return (
        <Container fluid>

            <div className="header">
                <img className='header-logo' src="/images/logo.png" alt="brand-logo" />

                <div className="header-navbar-wrap">
                    <Navbar>
                        <li className='navbar-items home'>
                            <Link to='/'>صفحه اصلی</Link>
                        </li>
                        <li className='navbar-items'>
                            <Link to='/explore'>کاوش</Link>
                        </li>
                        <li className='navbar-items'>
                            <Link to='/guide'>راهنما</Link>
                        </li>
                    </Navbar>
                </div>

                <div className="header-action">
                    <ul>
                        <li>
                            <Link className='login-btn' to="/auth">ورود</Link>
                        </li>
                        <li>
                            <Link className='register-btn' to="/auth">ثبت نام</Link>
                        </li>
                    </ul>
                </div>

                <div className="mobile-action-btns">
                    <button className='go-login-btn mobile-action-btn'>
                        <BiUser />
                    </button>
                    <button className='open-menu-btn mobile-action-btn' onClick={showSidebarHandler}>
                        <BiMenu />
                    </button>
                </div>
            </div>

            <MobileSidebar isShow={showSidebar} onHide={showSidebarHandler} />

        </Container>
    )
}
