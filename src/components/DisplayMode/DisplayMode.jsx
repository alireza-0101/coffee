import React, { useEffect, useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BiSun } from 'react-icons/bi'
import { FiMoon } from 'react-icons/fi'
import DarkModeStyles from '../DarkModeStyles/DarkModeStyles'

export default function DisplayMode() {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const localstorageThemeValue = localStorage.getItem('theme')

        localstorageThemeValue && setTheme(localstorageThemeValue)
    }, [])

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            تغییر وضعیت به {theme === 'light' ? 'تیره' : 'روشن'}
        </Tooltip>
    )

    const changeMood = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div
            style={{ borderRadius: '0 0 200px 0', cursor: 'pointer' }}
            className='theme-change-btn bg-theme position-fixed end-0 top-0 p-1 p-md-2 d-flex justify-content-center align-items-center'
            onClick={changeMood}
        >
            <OverlayTrigger
                placement="right"
                overlay={renderTooltip}
            >
                <b>
                    {
                        theme === 'light' && <BiSun className='icon fs-5 mb-2 ms-2' />
                    }
                    {
                        theme === 'dark' && <FiMoon className='icon fs-5 mb-2 ms-2' />
                    }
                </b>
            </OverlayTrigger>
            {
                theme === 'dark' && <DarkModeStyles /> // import dark mode css styles
            }
        </div>
    )
}