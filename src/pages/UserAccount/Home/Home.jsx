import React from 'react'
import { Link } from 'react-router-dom'
import UserImprovementBox from '../../../components/UserImprovementBox/UserImprovementBox'
import UserProfile from '../../../components/UserProfile/UserProfile'
import DataTable from '../../../components/DataTable/DataTable'
import WeSupportYou from '../../../components/WeSupportYou/WeSupportYou'

export default function UserInfoDetailes() {
    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>

            <UserProfile edit />

            <WeSupportYou />

            <div className='p-3 w-100 d-flex flex-wrap justify-content-between align-items-lg-center gap-4'>
                <UserImprovementBox value='5,000 تومان' desc='حمایت های جمع شده برای شما تا الان' icon='BiDollarCircle' />
                <UserImprovementBox value='78 دنبال کننده' desc='تعداد دنبال کننده های شما برای ارسال پیام' icon='AiOutlineUsergroupAdd' />
                <UserImprovementBox value='95 پست فعال' desc='تعداد پست های شما در تا الان' icon='BsPostcard' />
                <UserImprovementBox value='5,000 تومان' desc='حمایت های جمع شده برای شما تا الان' icon='BiDollarCircle' />
                <UserImprovementBox value='78 دنبال کننده' desc='تعداد دنبال کننده های شما برای ارسال پیام' icon='AiOutlineUsergroupAdd' />
                <UserImprovementBox value='95 پست فعال' desc='تعداد پست های شما در تا الان' icon='BsPostcard' />
            </div>

            <DataTable title='لیست پست های اخیر شما'>
                <thead>
                    <tr>
                        <th>شماره</th>
                        <th>عنوان پست</th>
                        <th>لینک ضمیمه</th>
                        <th>تاریخ افزودن</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>آیا فراز و نشیب درختان زیبا نبوده و نیست؟</td>
                        <td>
                            <Link target='_blank' to='http://localbrows.com'>http://localbrows.com</Link>
                        </td>
                        <td>2022-10-05</td>
                    </tr>
                </tbody>
            </DataTable>

        </div>
    )
}