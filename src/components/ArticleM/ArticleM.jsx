import React from 'react'
import './ArticleM.css'
export default function ArticleM({ title, content1, content2 }) {
  return (
    <section className='OE_ArticleM '>


    <h2 className='OE_ArticleM_h2'> {title}</h2>
    <p className='OE_ArticleM_p'>  {content1}</p>  
    <p className='OE_ArticleM_p'>  {content2}</p>
   
                        
      </section>

  )
}
