import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Topbar({ onShowSidebar }) {
    return (
        <Navbar className='mt-2' bg="transparent" variant="light">
            <Container fluid>
                <Navbar.Brand className='fw-bold' target='_blank' href="/">
                    <img
                        alt=""
                        src="/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    برام یه قهوه بخر!
                </Navbar.Brand>
                <Nav className="d-none d-sm-flex justify-content-start flex-grow-1 pe-2 fw-bold">
                    <Link className='nav-link' to="dashbord">صفحه اصلی</Link>
                    <Link className='nav-link' to="settings">تنظیمات</Link>
                    <Link
                        className='nav-link'
                        to=""
                        onClick={ev => {
                            ev.preventDefault()
                            onShowSidebar()
                        }}
                    >
                        بیشتر...
                    </Link>
                </Nav>
                <Navbar.Toggle onClick={onShowSidebar} className='d-block' aria-controls='offcanvasNavbar-expand-xs' />
            </Container>
        </Navbar>
    )
}
