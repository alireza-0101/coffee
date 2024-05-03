import React, { useReducer } from 'react'
import { BiImage } from 'react-icons/bi'
import { BsPersonVideo2 } from 'react-icons/bs'
import useModal from '../../../hooks/useModal'
import useSolarDate from '../../../hooks/useSolarDate'

export default function AddPost() {

    const [solarDate, setDate] = useSolarDate(new Date())
    const [Modal, setModal] = useModal()

    const reducerHandler = (state, action) => {
        switch (action.type) {

            case 'TITLE': {
                return {
                    title: action.value.trim(),
                    desc: state.desc,
                    link: state.link,
                    photo: state.photo,
                    file: state.file,
                }
            }

            case 'DESC': {
                return {
                    title: state.title,
                    desc: action.value.trim(),
                    link: state.link,
                    photo: state.photo,
                    file: state.file,
                }
            }

            case 'LINK': {
                return {
                    title: state.title,
                    desc: state.desc,
                    link: action.value.trim(),
                    photo: state.photo,
                    file: state.file,
                }
            }


            case 'PHOTO': {
                return {
                    title: state.title,
                    desc: state.desc,
                    link: state.link,
                    photo: action.value,
                    file: state.file,
                }
            }

            case 'MUSIC_OR_VIDEO': {
                return {
                    title: state.title,
                    desc: state.desc,
                    link: state.link,
                    photo: state.photo,
                    file: action.value,
                }
            }

        }
    }

    const [addPost, dispatch] = useReducer(reducerHandler, {
        title: '',
        desc: '',
        link: '',
        photo: {},
        file: {},

    })

    const changeHandler = ev => dispatch({
        type: ev.target.id,
        value: ev.target.value,
    })

    const fileChangeHandler = ev => dispatch({
        type: ev.target.id,
        value: ev.target.files[0],
    })

    const submit = () => {
        if (addPost.title && addPost.desc) {
            const newPost = {
                title: addPost.title,
                desc: addPost.desc,
                link: addPost.link,
                photo: addPost.photo,
                file: addPost.file,
                created_At: solarDate,
            }

            setModal({ title: 'پست با موفقیت منتشر شد.', icon: 'success' })

            console.log(newPost)
        } else {
            setModal({ title: 'لطفا اطلاعات را کامل وارد کنید!', icon: 'error' })
        }
    }

    const emptyFiles = id => dispatch({
        type: id,
        value: {},
    })

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-wrap gap-2 align-content-center justify-content-center'>

            <input
                value={addPost.title}
                onChange={changeHandler}
                id='TITLE'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='عنوان پست را وارد کنید...'
            />

            <textarea
                value={addPost.desc}
                onChange={changeHandler}
                id='DESC'
                type="text"
                className='border-0 bg-light rounded p-3 fw-bold w-100'
                placeholder='کپشن پست را وارد کنید...'
                rows={5}
            >

            </textarea>


            <input
                value={addPost.link}
                onChange={changeHandler}
                id='LINK'
                type="url"
                className='border-0 bg-light rounded p-3 fw-bold w-100 text-start'
                placeholder='لینک ضمیمه رو وارد کنید...(دلخواه)'
            />

            <div className="w-100 d-flex flex-wrap justify-content-evenly align-items-center gap-2 px-1 mt-5">

                <label style={{ cursor: 'pointer', minWidth: '180px', maxWidth: '300px' }} htmlFor="PHOTO" className='w-50 d-flex justify-content-center align-items-center flex-column rounded-2 border border-2 border-dark fw-bold bg-white p-3'>
                    <BiImage className='fs-1' />
                    <span>عکس (دلخواه)</span>
                </label>
                <input onChange={fileChangeHandler} id='PHOTO' type="file" className='d-none' accept='.jpg, .png, .jpeg, .gif' />

                <label style={{ cursor: 'pointer', minWidth: '180px', maxWidth: '300px' }} htmlFor="MUSIC_OR_VIDEO" className='w-50 d-flex justify-content-center align-items-center flex-column rounded-2 border border-2 border-dark fw-bold bg-white p-3'>
                    <BsPersonVideo2 className='fs-1' />
                    <span>موزیک یا ویدیو (دلخواه)</span>
                </label>
                <input onChange={fileChangeHandler} id='MUSIC_OR_VIDEO' type="file" className='d-none' accept='.mp3, .mp4' />

                <div className="d-flex w-100 justify-content-center align-items-center gap-3 mt-4">
                    {
                        addPost.photo.name && (
                            <span onClick={() => emptyFiles('PHOTO')} className='fw-bold text-danger bg-light px-3 py-1 rounded' style={{ cursor: 'pointer' }}>حذف عکس</span>
                        )
                    }
                    {
                        addPost.file.name && (
                            <span onClick={() => emptyFiles('MUSIC_OR_VIDEO')} className='fw-bold text-danger bg-light px-3 py-1 rounded' style={{ cursor: 'pointer' }}>حذف فایل</span>
                        )
                    }
                </div>

            </div>

            <button
                className="w-100 py-2 px-5 bg-theme border-0 rounded-pill fw-bold mt-3"
                onClick={submit}
            >
                منتشر کردن
            </button>

            <Modal />

        </div>
    )
}