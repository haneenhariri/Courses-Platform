import { useState }  from 'react'
import './Sidebar.css'
import { Link} from 'react-router-dom'


export default function Sidebar() {

const [activeLink, setActiveLink] = useState(1) 

const LinksData = [
    {
        id: 1,
        imgURL: `./image/DashBoard/SideBar/studentsSay${activeLink === 1 ? 'Light' : 'Dark'}.svg`,
        content: 'students Say',
        mbClass: 'MJ-mb-link',
        show: 'MJ-dash-sidebarink-show',
        to:'dashstdsay',
        func : () => setActiveLink(1)
    },
    {
        id: 2,
        imgURL: `./image/DashBoard/SideBar/Article${activeLink === 2 ? 'Light' : 'Dark'}.svg`,
        content: 'Article',
        mbClass: 'MJ-mb-link',
        show: 'MJ-dash-sidebarink-show',
        to: 'articlelist',
        func : () => setActiveLink(2)
    },
    {
        id: 3,
        imgURL: './image/DashBoard/SideBar/LogOut.svg',
        hide: 'log-out-hide',
        content: 'Log out',
        mbClass: 'MJ-center-link',
        to:'//',
    }
]

    return (
    <div className='MJ-dash-sidebar'>
        <div className='MJ-dash-sidebar-logo'>
            <img className='MJ-dash-sidebar-logo-svg' src="./image/DashBoard/SideBar/logo.svg" />
            <Link to={'/dash'} className='MJ-dash-sidebar-logo-link'>UpDate</Link>
            
        </div>
        {LinksData.map((e, index) => {
            return (
                <div key={index} className={`MJ-dash-sidebar-links ${activeLink === e.id? 'MJ-links-active' : ''} ${e.mbClass}`} onClick={e.func} >
                    <img className={`MJ-dash-sidebar-links-img ${e.hide}`} src={e.imgURL} />
                    <Link to={e.to} className={e.show}>{e.content}</Link>
                </div>
            )
        })}
    </div>
    )
}
