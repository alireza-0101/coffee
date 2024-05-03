import React, { useState } from 'react'
import DataTable from '../../../components/DataTable/DataTable'
import { Link } from 'react-router-dom'
import ModalBox from '../../../components/ModalBox/ModalBox'
import PostCard from '../../../components/PostCard/PostCard'
import { Alert } from 'react-bootstrap'

export default function Home() {

    const [showPostBox, setShowPostBox] = useState(false)

    const showPostBoxHandler = () => setShowPostBox(prev => !prev)

    const [isShowModal, setIsShowModal] = useState(false)

    const showModalHandler = () => setIsShowModal(prev => !prev)

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>

            <Alert variant='warning'>
                <h3 className='fw-bold h3'>سلام ادمین عزیز :)</h3>
                <p>
                    امیدوارم مثل همیشه حالت خوب و عالی باشه و بتونی به درستی و سلامتی کارکنی. اگر نتونستی با یکی از امکانات سایت کار کنی حتما به مدیر اصلی اطلاع بده، با تشکر
                </p>
                <p>
                    پایین همین صفحه 10 تا از آخرین اتفاقات سایت رو بهت نمایش میدم تا بهتر و راحتر بتونی مدیریت کنی
                </p>
            </Alert>

            <DataTable title='لیست پست های اخیر سایت'>
                <thead>
                    <tr>
                        <th>شماره</th>
                        <th>منتشر کننده</th>
                        <th>عنوان پست</th>
                        <th>لینک ضمیمه</th>
                        <th>تاریخ افزودن</th>
                        <th>نمایش</th>
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

            <DataTable title='لیست حمایت های اخیر سایت'>
                <thead>
                    <tr>
                        <th>شماره</th>
                        <th>حمایت از...</th>
                        <th>تعداد حمایت</th>
                        <th>مبلغ کل</th>
                        <th>نام حمایت کننده</th>
                        <th>تاریخ حمایت</th>
                        <th>وضعیت</th>
                        <th>نمایش پیام</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سحر قریشی</td>
                        <td>25 قهوه</td>
                        <td>41,500 تومان</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>2022-10-05</td>
                        <td>حمایت خصوصی</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                </tbody>
            </DataTable>

            <ModalBox isShow={isShowModal} onClose={showModalHandler} button='دمت گرم' >
                <p>
                    متن پیامی تستی برای نمایش درست بودن تمامی امکانات سایت زیبا و خلاقانه ای که توسط عرفان توسعه داده شده است.
                </p>
            </ModalBox>

        </div>
    )
}