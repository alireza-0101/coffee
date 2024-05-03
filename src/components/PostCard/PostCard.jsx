import React from 'react'
import { Card } from 'react-bootstrap'
import { FiLink } from 'react-icons/fi'

export default function PostCard({ title, desc, link, linkText, img, video, voice }) {
    return (
        <Card className='post mt-4 border border-5 border-white'>

            {
                video && (
                    <video className='w-100' poster={img} controls>
                        <source src={video} type="video/mp4" />
                    </video>
                )
            }

            {
                img && !Boolean(video) && (
                    <Card.Img className='rounded-0' src={img} alt='post-image' />
                )
            }


            {
                voice && (
                    <div className="w-100 rounded">
                        <audio className='w-100' controls style={{ background: '#F1F3F4' }}>
                            <source src={voice} type="audio/mp3" />
                        </audio>
                    </div>
                )
            }

            <Card.Title className='fw-bold mt-4 ms-3'>{title}</Card.Title>

            <Card.Body className='pt-3'>

                <Card.Text style={{ lineHeight: '2.2' }}>{desc}</Card.Text>

                {
                    link && (
                        <a href={link}>
                            <div className='d-flex justify-content-start align-items-lg-center gap-1 text-primary'>
                                <FiLink className='mb-1' />
                                <span>{linkText}</span>
                            </div>
                        </a>
                    )
                }

            </Card.Body>

        </Card>
    )
}