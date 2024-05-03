import React from 'react'
import './ContactUs.css'
import ContactBox from '../ContactBox/ContactBox'
import { useState } from 'react'

export default function ContactUs() {

    const [contactBox, setContactBox] = useState([
        { id: 1, title: 'تلفن دفتر', icon: 'FiPhone', firstLink: 'tel:+989044748395', firstLinkText: '09044748395', secondLink: 'tel:01344334068', secondLinkText: '01344334068' },

        { id: 2, title: 'پست الکترونیک', icon: 'HiOutlineMail', firstLink: 'Info@linak.com', firstLinkText: 'Info@linak.com', secondLink: 'support@linak.com', secondLinkText: 'support@linak.com' },

        { id: 3, title: 'تلگرام ما', icon: 'TbBrandTelegram', firstLink: 'map', firstLinkText: 'Buy-me-a-coffee.ir', secondLink: '', secondLinkText: 'Support-coffee.ir' },
    ])

    return (
        <div className='contact-us-wrapper w-100' id='ContactUs'>
            <div className="contact-boxes-wrapper">
                {
                    contactBox.map(item => {
                        return <ContactBox key={item.id} {...item} />
                    })
                }
            </div>
        </div>
    )
}
