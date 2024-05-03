import React, { useReducer, useState } from 'react'
import { BiImage } from 'react-icons/bi'
import { BsPersonVideo2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import DataTable from '../../../components/DataTable/DataTable'
import ModalBox from '../../../components/ModalBox/ModalBox'
import PostCard from '../../../components/PostCard/PostCard'
import useModal from '../../../hooks/useModal'
import useSolarDate from '../../../hooks/useSolarDate'

export default function Posts() {

    const [showPostBox, setShowPostBox] = useState(false)

    const showPostBoxHandler = () => setShowPostBox(prev => !prev)

    const [showEditModal, setShowEditModal] = useState(false)

    const showEditModalHandler = () => setShowEditModal(prev => !prev)

    const [solarDate, setDate] = useSolarDate(new Date())
    const [Modal, setModal] = useModal()

    // start edit modal config

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

    const [editPost, dispatch] = useReducer(reducerHandler, {
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
        if (editPost.title && editPost.desc) {
            const editPostObj = {
                title: editPost.title,
                desc: editPost.desc,
                link: editPost.link,
                photo: editPost.photo,
                file: editPost.file,
                created_At: solarDate,
            }

            setShowEditModal(false)

            console.log(editPostObj)
        } else {
            setModal({ title: 'لطفا اطلاعات را کامل وارد کنید!', icon: 'error' })
        }
    }

    const emptyFiles = id => dispatch({
        type: id,
        value: {},
    })

    // end edit modal config

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>
            <DataTable title='لیست پست های شما'>
                <thead>
                    <tr>
                        <th>شماره</th>
                        <th>منتشر کننده</th>
                        <th>عنوان پست</th>
                        <th>لینک ضمیمه</th>
                        <th>تاریخ افزودن</th>
                        <th>نمایش</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>حافظ اسلامی</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                        <td>
                            <button onClick={showPostBoxHandler}>نمایش</button>
                        </td>
                        <td>
                            <button onClick={showEditModalHandler}>ویرایش</button>
                        </td>
                        <td>
                            <button>حذف</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>حافظ اسلامی</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                        <td>
                            <button onClick={showPostBoxHandler}>نمایش</button>
                        </td>
                        <td>
                            <button onClick={showEditModalHandler}>ویرایش</button>
                        </td>
                        <td>
                            <button>حذف</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>حافظ اسلامی</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                        <td>
                            <button onClick={showPostBoxHandler}>نمایش</button>
                        </td>
                        <td>
                            <button onClick={showEditModalHandler}>ویرایش</button>
                        </td>
                        <td>
                            <button>حذف</button>
                        </td>
                    </tr>
                </tbody>
            </DataTable>

            <ModalBox isShow={showPostBox} onClose={showPostBoxHandler}>
                <PostCard
                    title='موزیک جدید و زیبای بهنام بانی'
                    desc='نمیدونم چرا وقتی به این موزیک گوش میکنم انگار قند توی دلم آب میشه...'
                    link='#'
                    linkText='لینک ضمیمه موزیک'
                    img='https://file.tesmino.ir/reportage/35462380/image_a24c70a3c01ed5c7d5bdd1e723914e40c9692615.jpg'
                    voice='https://dl1.upahang.com/music/2021/11/19/CQACAgQAAxkBAAJBmmA4a6aoMQYT9_Tcr6BW7l-qsDuqAAKxCAACI7zBUQXuTpuBWLAGHgQ.mp3'
                    video=''
                />
            </ModalBox>

            <ModalBox isShow={showEditModal} onClose={showEditModalHandler}>
                <div className='w-100 bg-white p-3 rounded d-flex flex-wrap gap-2 align-content-center justify-content-center'>

                    <input
                        value={editPost.title}
                        onChange={changeHandler}
                        id='TITLE'
                        type="text"
                        className='border-0 bg-light rounded p-3 fw-bold w-100'
                        placeholder='عنوان پست را وارد کنید...'
                    />

                    <textarea
                        value={editPost.desc}
                        onChange={changeHandler}
                        id='DESC'
                        type="text"
                        className='border-0 bg-light rounded p-3 fw-bold w-100'
                        placeholder='کپشن پست را وارد کنید...'
                        rows={5}
                    >

                    </textarea>


                    <input
                        value={editPost.link}
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
                                editPost.photo.name && (
                                    <span onClick={() => emptyFiles('PHOTO')} className='fw-bold text-danger bg-light px-3 py-1 rounded' style={{ cursor: 'pointer' }}>حذف عکس</span>
                                )
                            }
                            {
                                editPost.file.name && (
                                    <span onClick={() => emptyFiles('MUSIC_OR_VIDEO')} className='fw-bold text-danger bg-light px-3 py-1 rounded' style={{ cursor: 'pointer' }}>حذف فایل</span>
                                )
                            }
                        </div>

                    </div>

                    <button
                        className="w-100 py-2 px-5 bg-theme border-0 rounded-pill fw-bold mt-3"
                        onClick={submit}
                    >
                        بروزرسانی
                    </button>

                    <Modal />

                </div>
            </ModalBox>

        </div>
    )
}