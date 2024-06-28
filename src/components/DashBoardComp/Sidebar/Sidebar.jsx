import React , { useState }  from 'react'
import './Sidebar.css'

export default function Sidebar() {

const [activeLink, setActiveLink] = useState(1) 

const LinksData = [
    {
        id: 1,
        imgURL: `./image/DashBoard/SideBar/studentsSay${activeLink === 1 ? 'Light' : 'Dark'}.svg`,
        content: 'students Say',
        mbClass: 'MJ-mb-link',
        show: 'MJ-dash-sidebarink-show',
        // href: '/dash/say-students',
        func : () => setActiveLink(1)
    },
    {
        id: 2,
        imgURL: `./image/DashBoard/SideBar/Article${activeLink === 2 ? 'Light' : 'Dark'}.svg`,
        content: 'Article',
        mbClass: 'MJ-mb-link',
        show: 'MJ-dash-sidebarink-show',
        // href: '/dash/articls',
        func : () => setActiveLink(2)
    },
    {
        id: 3,
        imgURL: './image/DashBoard/SideBar/LogOut.svg',
        hide: 'log-out-hide',
        content: 'Log out',
        mbClass: 'MJ-center-link',
        href: './'
    }
]

    return (
    <div className='MJ-dash-sidebar'>
        <div className='MJ-dash-sidebar-logo'>
            <img className='MJ-dash-sidebar-logo-svg' src="./image/DashBoard/SideBar/logo.svg" />
            <a href="#" className='MJ-dash-sidebar-logo-link'>UpDate</a>
        </div>
        {LinksData.map((e, index) => {
            return (
                <div key={index} className={`MJ-dash-sidebar-links ${activeLink === e.id? 'MJ-links-active' : ''} ${e.mbClass}`} onClick={e.func} >
                    <img className={`MJ-dash-sidebar-links-img ${e.hide}`} src={e.imgURL} />
                    <a href={e.href} className={e.show}>{e.content}</a>
                </div>
            )
        })}
        
    </div>
    )
}
