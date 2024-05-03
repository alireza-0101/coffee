import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './MobileSidebar.css'

export default function MobileSidebar({ isShow, onHide }) {
    return (
        <Offcanvas className='w-75 border-0' show={isShow} onHide={onHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <img className='Offcanvas-logo' src="/images/logo.png" alt="brand-logo" />
                    <span className='Offcanvas-title'>یه قهوه برام یخر!</span>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Navbar column>
                    <li className='navbar-items'>
                        <Link to='/'>صفحه اصلی</Link>
                    </li>
                    <li className='navbar-items'>
                        <Link to='/explore'>کاوش</Link>
                    </li>
                    <li className='navbar-items'>
                        <Link to='/guide'>راهنما</Link>
                    </li>
                    <li className='navbar-items'>
                        <Link to='/auth'>ورود</Link>
                    </li>
                    <li className='navbar-items'>
                        <Link to='/auth'>ثبت نام</Link>
                    </li>
                </Navbar>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
