import React from 'react'
import Card from '../Card/Card'
import './CardArticle.css'

const CardArticleData = [
    {
        title: '3D',
        headerUrl: './image/ArticlePageImg/CardArticle/Rectangle 171.png',
        card_class: 'FM-card-padding'
    },
    {
        title: 'Abstract',
        headerUrl: './image/ArticlePageImg/CardArticle/Mask group (1).png',
        card_class: 'FM-card-padding'
    },
    {
        title: 'Vintage & Retro',
        headerUrl: './image/ArticlePageImg/CardArticle/Mask group (2).png',
        card_class: 'FM-card-padding',
        desc_mb : 'desc-mb'
    }
]

export default function CardArticle() {
  return (
    <section className='FM-main-section-4'>
        <div className='FM-main-section-4-content'>
            <h2>Top 3 styles in 2022</h2>
            <div className='FM-CardArticle-card'>
                {CardArticleData.map (element => {
                    return <Card key={element.title} 
                                header_url={element.headerUrl} 
                                title={element.title}
                                card_mt_p={element.card_class}
                                desc_mb={element.desc_mb}
                            />
                    }
                )}
            </div>
            
            
        </div>
      
    </section>
  )
}