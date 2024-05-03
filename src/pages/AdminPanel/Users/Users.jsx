import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DataTable from '../../../components/DataTable/DataTable'
import ModalBox from '../../../components/ModalBox/ModalBox'

export default function Users() {

    const [showUserMoreData, setShowUserMoreData] = useState(false)

    const showUserMoreDataHandler = () => setShowUserMoreData(prev => !prev)

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>

            <DataTable title='لیست کاربران سایت'>
                <thead>
                    <tr>
                        <th>شماره</th>
                        <th>نام کاربر</th>
                        <th>وضعیت</th>
                        <th>شماره تلفن</th>
                        <th>نمایش</th>
                        <th>مسدود</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>VIP</td>
                        <td>09115697829</td>
                        <td>
                            <button onClick={showUserMoreDataHandler}>نمایش</button>
                        </td>
                        <td>
                            <button>مسدود</button>
                        </td>
                        <td>
                            <button>حذف</button>
                        </td>
                    </tr>
                </tbody>
            </DataTable>

            <ModalBox isShow={showUserMoreData} onClose={showUserMoreDataHandler}>
                <DataTable>
                    <thead>
                        <tr>
                            <th>عنوان شغلی</th>
                            <th>تعداد حمایت</th>
                            <th>تعداد دنبال کننده</th>
                            <th>تعداد پست</th>
                            <th>لینک صفحه</th>
                            <th>تاریخ افزودن</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>توسعه دهنده فرانت اند</td>
                            <td>78 نفر</td>
                            <td>32 نفر</td>
                            <td>28 عدد</td>
                            <td>
                                <Link target='_blank' to='/00000'>alireza-mh</Link>
                            </td>
                            <td>2022-10-05</td>
                        </tr>
                    </tbody>
                </DataTable>
            </ModalBox>

        </div>
    )
}