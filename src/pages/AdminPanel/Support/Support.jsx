import React, { useState } from 'react'
import ChatBox from '../../../components/ChatBox/ChatBox'
import DataTable from '../../../components/DataTable/DataTable'

export default function Support() {

    const [showChatBox, setShowChatBox] = useState(false)

    const showChatBoxHandler = () => setShowChatBox(prev => !prev)

    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>
            <DataTable title='لیست درخواست های پشتیبانی'>
                <thead>
                    <tr>
                        <th>شماره</th>
                        <th>حساب کاربری</th>
                        <th>نام دستگاه</th>
                        <th>موقعیت مکانی</th>
                        <th>زمان ارسال</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>uy001</td>
                        <td>Galaxy A51</td>
                        <td>Tehran</td>
                        <td>23:50 - 2022-05-01</td>
                        <td>
                            <button onClick={showChatBoxHandler}>
                                نمایش چت
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>uy001</td>
                        <td>Galaxy A51</td>
                        <td>Tehran</td>
                        <td>23:50 - 2022-05-01</td>
                        <td>
                            <button onClick={showChatBoxHandler}>
                                نمایش چت
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>uy001</td>
                        <td>Galaxy A51</td>
                        <td>Tehran</td>
                        <td>23:50 - 2022-05-01</td>
                        <td>
                            <button onClick={showChatBoxHandler}>
                                نمایش چت
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>uy001</td>
                        <td>Galaxy A51</td>
                        <td>Tehran</td>
                        <td>23:50 - 2022-05-01</td>
                        <td>
                            <button onClick={showChatBoxHandler}>
                                نمایش چت
                            </button>
                        </td>
                    </tr>
                </tbody>
            </DataTable>

            <ChatBox isShow={showChatBox} showHandler={showChatBoxHandler} />
        </div>
    )
}