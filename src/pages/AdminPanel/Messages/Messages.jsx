import React, { useState } from 'react'
import DataTable from '../../../components/DataTable/DataTable'
import ModalBox from '../../../components/ModalBox/ModalBox'

export default function Messages() {

    const [isShowModal, setIsShowModal] = useState(false)

    const showModalHandler = () => setIsShowModal(prev => !prev)

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>
            <DataTable title='لیست تمامی پیام های ارسال شده'>
                <thead>
                    <tr>
                        <th>شماره</th>
                        <th>ارسال کننده</th>
                        <th>عنوان پیام</th>
                        <th>تاریخ ارسال</th>
                        <th>نمایش پیام</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>لیلا فروهر</td>
                        <td>تخفیف ویژه برای دوره های سبزی</td>
                        <td>2022-10-05</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>لیلا فروهر</td>
                        <td>تخفیف ویژه برای دوره های سبزی</td>
                        <td>2022-10-05</td>
                        <td>
                            <button onClick={showModalHandler}>
                                نمایش پیام
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>لیلا فروهر</td>
                        <td>تخفیف ویژه برای دوره های سبزی</td>
                        <td>2022-10-05</td>
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