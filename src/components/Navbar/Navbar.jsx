import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ column, children }) {
    return (
        <ul className={`navbar ${column && 'flex-column align-items-start'}`}>
            {children}
        </ul>
    )
}
