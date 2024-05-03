import React, { useState } from 'react'
import DataTable from '../../../components/DataTable/DataTable'
import ModalBox from '../../../components/ModalBox/ModalBox'

export default function Protectiom() {

    const [isShowModal, setIsShowModal] = useState(false)

    const showModalHandler = () => setIsShowModal(prev => !prev)

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>
            <DataTable title='لیست حمایت ها'>
                <thead>
                    <tr>
                        <th>شماره</th>
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
