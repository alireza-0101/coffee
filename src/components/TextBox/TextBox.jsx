import React from 'react'

export default function TextBox({ name, count, desc, isSms }) {
    return (
        <div className={`support-transaction-box w-100 p-3 mt-3 rounded-2 ${(isSms && isSms !== 'answer') ? 'bg-light' : 'bg-white'}`}>
            <div className="d-flex align-content-center justify-content-start gap-1 fw-bold">
                <img width='20px' src="/images/logo.png" alt="" />
                {
                    isSms ? (<span>{name ? name : 'ناشناس'}</span>) : (
                        <span>{name ? name : 'ناشناس'} <b className='text-theme px-1'>{count}</b> قهوه خرید.</span>
                    )
                }
            </div>
            {desc && (<div className="w-100 mt-3">{desc}</div>)}
        </div>
    )
}
