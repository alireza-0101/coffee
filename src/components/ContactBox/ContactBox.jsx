import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { TbBrandTelegram } from 'react-icons/tb'
import './ContactBox.css'

export default function ContactBox(props) {
    return (
        <div className='contact-box-wrapper'>
            <div className='dtas-wrapper'>
                <h4>{props.title}</h4>
                <a href="">{props.firstLinkText}</a>
                <a href={props.secondLink}>{props.secondLinkText}</a>
            </div>
            <div className='icon-Wrapper'>
                {
                    props.icon === 'FiPhone' && (
                        <FiPhone />
                    )
                }
                {
                    props.icon === 'HiOutlineMail' && (
                        <HiOutlineMail />
                    )
                }
                {
                    props.icon === 'TbBrandTelegram' && (
                        <TbBrandTelegram />
                    )
                }
            </div>
        </div>
    )
}
