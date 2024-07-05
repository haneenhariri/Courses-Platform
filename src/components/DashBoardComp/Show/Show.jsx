import React from 'react'
import './Show.css'
import userIcon from '../../../img/DashBoard/ArticleCard/UserIcon.svg'
import CirclePlay from '../../../img/DashBoard/ArticleCard/CirclePlay.svg'
import { Link } from 'react-router-dom'

export default function Show({name , course , content, link}) {
  return (
    <section className="FM-Dash-Header FM-cards">
        <Link to={link} className='FM-CirclePlay-img'><img src={CirclePlay} alt="CirclePlay" /></Link>
        <div className='HH-card'>
            <div className='HH-cardInfo'>
                <img className='HH-cardImg' src={userIcon} alt="userIcon" />
                <div>
                    <h3 className='HH-cardTitle'>{name}</h3>
                    <p className='HH-CardP'>{course}</p>
                </div>
            </div>
            <div className='HH-CardText'>
                <p>{content}</p>
            </div>
        </div>
        
    </section>
    
  )
}
