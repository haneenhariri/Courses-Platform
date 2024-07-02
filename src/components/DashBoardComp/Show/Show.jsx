import React from 'react'
import './Show.css'
import userIcon from '../../../img/DashBoard/ArticleCard/UserIcon.svg'
import CirclePlay from '../../../img/DashBoard/ArticleCard/CirclePlay.svg'

export default function Show() {
  return (
    <section className="FM-Dash-Header FM-cards">
        <div className='FM-CirclePlay-img'><img src={CirclePlay} alt="CirclePlay" /></div>
        <div className='HH-card'>
            <div className='HH-cardInfo'>
                <img className='HH-cardImg' src={userIcon} alt="userIcon" />
                <div>
                    <h3 className='HH-cardTitle'> Guy Hawkins</h3>
                    <p className='HH-CardP'>Lifestyle</p>
                </div>
            </div>
            <div className='HH-CardText'>
                <p>Ugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
            </div>
        </div>
        
    </section>
    
  )
}
