import React from 'react'
import { Table } from 'react-bootstrap'

export default function DataTable({ title, children }) {
    return (
        <>
            {title && <span className='w-100 bg-theme fw-bold text-center mb-2 mt-3 fz-5 px-2 py-4 rounded'>{title}</span>}
            <div className="data-table-wrap w-100 overflow-auto">
                <Table striped hover className='text-center align-middle' style={{ minWidth: '800px' }}>
                    {children}
                </Table>
            </div>
        </>
    )
}
