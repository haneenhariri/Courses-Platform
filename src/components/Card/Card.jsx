import React from 'react'
import './Card.css'

export default function Card({header_url , title_mb, title , desc , footer_url , card_mt_p , card_show, delay}) {
  return (
    <div className={`FM-card ${card_mt_p}`} data-aos="zoom-in-up" data-aos-delay={delay}>
      <div className='header-img'>
        <img src={header_url} />
      </div>
      <h3 className={`FM-card-title ${title_mb}`}>{title}</h3>
      <div className={`FM-card-footer ${card_show}`}>
          <p>{desc}</p>
          <img src={footer_url} />
      </div>
      
    </div>
  )
}