import { useState }  from 'react'

import { Link} from 'react-router-dom'

import Logo from './../../../img/DashBoard/SideBar/logo.svg'

import SayStudentLight from './../../../img/DashBoard/SideBar/studentsSayLight.svg'
import SayStudentDark from './../../../img/DashBoard/SideBar/studentsSayDark.svg'

import ArticleLight from './../../../img/DashBoard/SideBar/ArticleLight.svg'
import ArticleDark from './../../../img/DashBoard/SideBar/ArticleDark.svg'

import LogOut from './../../../img/DashBoard/SideBar/LogOut.svg'

import './Sidebar.css'


export default function Sidebar() {

const [activeLink, setActiveLink] = useState(1) 

const LinksData = [
    {
        id: 1,
        imgURL: activeLink === 1 ? SayStudentLight : SayStudentDark,
        content: 'students Say',
        mbClass: 'MJ-mb-link',
        show: 'MJ-dash-sidebarink-show',
        to:''
    },
    {
        id: 2,
        imgURL: activeLink === 2 ? ArticleLight : ArticleDark,
        content: 'Article',
        mbClass: 'MJ-mb-link',
        show: 'MJ-dash-sidebarink-show',
        to: 'articlelist'
    },
    {
        id: 3,
        imgURL: LogOut,
        hide: 'log-out-hide',
        content: 'Log out',
        mbClass: 'MJ-center-link',
        to:'//',
    }
]

    return (
    <div className='MJ-dash-sidebar'>
        <div className='MJ-dash-sidebar-logo'>
            <img className='MJ-dash-sidebar-logo-svg' src={Logo} />
            <Link to={'/dash'} className='MJ-dash-sidebar-logo-link'>UpDate</Link>
            
        </div>
        {LinksData.map((e, index) => {
            return (
                <div key={index} className={`MJ-dash-sidebar-links ${activeLink === e.id? 'MJ-links-active' : ''} ${e.mbClass}`} onClick={() => setActiveLink(e.id)} >
                    <img className={`MJ-dash-sidebar-links-img ${e.hide}`} src={e.imgURL} />
                    <Link to={e.to} className={e.show}>{e.content}</Link>
                </div>
            )
        })}
    </div>
    )
}
