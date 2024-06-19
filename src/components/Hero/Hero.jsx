import React from 'react'
import './Hero.css'
import { CoursesData, MainData } from '../../const/data/HeroData'
export default function Hero({ h1, p, span, button, discount, days, time, img, month, profession, courses, classImg1, classImg2,classVector }){
  return (
    
    <section className='OE_Hero'>
    
        <div className='OE_titleSection'>
        <h6 className='OE_'>{month}</h6>
        <p className='OE_profession'>{ profession}</p>
          <h1 className='OE_h1'>{courses}{h1}</h1>
        <p className='OE_p'>{p}
          <span className='OE_span'>{ span}</span>
        </p>
       <div>
          <button className='OE_button'>{button}</button>
          <img className={classVector} src="./image\MainPageImg\HeroImg\Vector.png" alt="" />
       </div>
        <h2 className='OE_50'>{discount }</h2>     
        <div className='OE_days'>
          <h6>{ days}</h6>
          <h6>{time}</h6>
        </div>  
      
   
       
      </div>

      
        <div className='OE_imgSection'>
          <img className={classImg1} src="./image\MainPageImg\HeroImg\Hero_3.png" alt="" />
          <img className={classImg2} src={img} alt="" />
        <div className="OE_nextToImg"> {courses ?
          MainData.map((item, index) => {
              return (
                <div className={item.class} key={index}>{ item.title}</div>      
              )
          }
          ) : CoursesData.map((item, index) => {
            return(<div className={item.class} key={index}>{ item.title}</div>  )
          }
          )}</div>
          

         
       
      </div>
      </section>


  )
}
