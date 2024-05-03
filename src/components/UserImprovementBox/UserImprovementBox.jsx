import React from 'react'
import { BiDollarCircle } from 'react-icons/bi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BsPostcard } from 'react-icons/bs'

export default function UserImprovementBox({ value, desc, icon }) {
    return (
        <div style={{ width: '300px', maxWidth: '100%' }} className="user-improvment-box d-flex flex-column rounded py-4 p-3 gap-3">
            <div className='d-flex gap-2 justify-content-start align-items-center'>
                {icon === 'BiDollarCircle' && (<BiDollarCircle className='fs-1 mb-2' />)}
                {icon === 'AiOutlineUsergroupAdd' && (<AiOutlineUsergroupAdd className='fs-1 mb-2' />)}
                {icon === 'BsPostcard' && (<BsPostcard className='fs-1 mb-2' />)}
                <span className='fs-3 fw-bold'>{value}</span>
            </div>
            <span className='fs-6'>{desc}</span>
        </div>
    )
}