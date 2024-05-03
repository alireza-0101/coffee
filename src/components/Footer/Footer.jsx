import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer w-100 px-3 py-5 py-md-4 d-flex justify-content-right align-items-center position-relative flex-wrap'>
            <div className="footer-navbar d-md-block d-none">
                <Navbar>
                    <li className='navbar-items'>
                        <Link to='/'>صفحه اصلی</Link>
                    </li>
                    <li>|</li>
                    <li className='navbar-items'>
                        <Link to='/explore'>کاوش</Link>
                    </li>
                    <li>|</li>
                    <li className='navbar-items'>
                        <Link to='/guide'>راهنما</Link>
                    </li>
                    <li>|</li>
                    <li className='navbar-items'>
                        <Link to='/auth'>ورود</Link>
                    </li>
                    <li>|</li>
                    <li className='navbar-items'>
                        <Link to='/auth'>ثبت نام</Link>
                    </li>
                </Navbar>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3 position-absolute end-0 pe-5">
                <span className="footer-copy-right">
                    Buy Me a Coffee ©
                </span>
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <a data-v-257b648c="" href="https://www.youtube.com" target="_blank" className="inline-block icon-transition ml-24 md:ml-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 25 25"
                        >
                            <g
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                clipPath="url(#clip0)"
                            >
                                <path d="M23.279 7.115a2.843 2.843 0 00-1.984-2.045c-1.759-.43-8.795-.43-8.795-.43s-7.036 0-8.795.471a2.843 2.843 0 00-1.984 2.045 29.658 29.658 0 00-.47 5.41 29.659 29.659 0 00.47 5.451 2.843 2.843 0 001.984 1.964c1.759.47 8.795.47 8.795.47s7.036 0 8.795-.47a2.843 2.843 0 001.984-2.046c.32-1.771.477-3.568.47-5.369a29.658 29.658 0 00-.47-5.45v0z"></path>
                                <path d="M10.2 15.91l5.88-3.343-5.88-3.344v6.688z"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <path
                                        fill="#fff"
                                        d="M0 0H24V24H0z"
                                        transform="translate(.5 .89)"
                                    ></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a data-v-257b648c="" href="https://twitter.com" target="_blank" className="inline-block icon-transition ml-24 xs:ml-16">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 23 24"
                        >
                            <path
                                fill="#000"
                                d="M22.218 2.89l.748-.049a.75.75 0 00-1.306-.452l.558.502zM21.47 7.33a.75.75 0 00-1.5 0h1.5zm-9.736.123h-.75.75zm0 1.439v.75h.75v-.75h-.75zM1.25 19.39v-.75a.75.75 0 00-.416 1.373l.416-.623zm1.498-16.5l.702-.263a.75.75 0 00-1.373-.072l.67.335zm5.99 13.5l.531.53a.75.75 0 00-.293-1.242l-.238.712zM19.574 4.35l-.556.503.27.299.398-.06-.112-.742zm1.895-1.41c.078 1.166.006 1.874-.183 2.407-.184.518-.504.944-1.085 1.501l1.038 1.083c.656-.63 1.165-1.248 1.46-2.082.29-.818.35-1.767.267-3.009l-1.497.1zm0 5.48V7.33h-1.5v1.093h1.5zm-10.485-.969v1.439h1.5V7.452h-1.5zm5.304-5.311a5.308 5.308 0 00-5.304 5.311h1.5a3.808 3.808 0 013.804-3.811v-1.5zm3.682 6.28c0 6.474-5.24 11.72-11.7 11.72v1.5c7.291 0 13.2-5.92 13.2-13.22h-1.5zM2.045 3.155C2.86 5.33 5.921 9.64 11.734 9.64v-1.5c-4.971 0-7.601-3.69-8.284-5.513l-1.405.526zm.032-.598C.507 5.7.265 8.75 1.406 11.349 2.544 13.94 4.994 15.93 8.5 17.102l.475-1.423C5.743 14.6 3.7 12.841 2.779 10.745c-.918-2.09-.786-4.664.64-7.52l-1.342-.67zm6.13 13.305c-.902.904-3.618 2.78-6.957 2.78v1.5c3.85 0 6.925-2.125 8.02-3.22l-1.062-1.06zM20.13 3.848a5.167 5.167 0 00-3.842-1.707v1.5c1.082 0 2.055.466 2.73 1.213l1.112-1.006zm-.444 1.244c1.141-.173 2.254-.772 3.09-1.7L21.66 2.39c-.612.68-1.414 1.101-2.198 1.22l.224 1.483zM.834 20.014c2.46 1.644 5.041 1.627 7.436 1.627v-1.5c-2.445 0-4.571-.017-6.604-1.374l-.832 1.247z"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}