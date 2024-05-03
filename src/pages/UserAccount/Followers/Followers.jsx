import React from 'react'
import DataTable from '../../../components/DataTable/DataTable'

export default function Followers() {
    return (
        <div className='w-100 bg-white p-3 rounded d-flex flex-column gap-4 align-content-center justify-content-center'>
            <DataTable title='لیست دنبال کننده های شما'>
                <thead>
                    <tr>
                        <th>شماره</th>
                        <th>نام دنبال کننده</th>
                        <th>شماره تلفن</th>
                        <th>تاریخ دنبال کردن</th>
                        <th>حذف دنبال کننده</th>
                        <th>مسدود دنبال کننده</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>علیرضا مهدی زاده</td>
                        <td>09044748395</td>
                        <td>2022-10-05</td>
                        <td>
                            <button>
                                حذف
                            </button>
                        </td>
                        <td>
                            <button>
                                مسدود
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>مبینا عباسی</td>
                        <td>09372064455</td>
                        <td>2022-12-08</td>
                        <td>
                            <button>
                                حذف
                            </button>
                        </td>
                        <td>
                            <button>
                                مسدود
                            </button>
                        </td>
                    </tr>
                </tbody>
            </DataTable>
        </div>
    )
}