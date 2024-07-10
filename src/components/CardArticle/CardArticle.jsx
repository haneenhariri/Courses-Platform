import Card from '../Card/Card'
import {CardArticleData} from '../../const/data/CardData'
import './CardArticle.css'

export default function CardArticle() {
  return (
    <section className='FM-article-section-4'>
        <div className='FM-article-section-4-content'>
            <h2>Top 3 styles in 2022</h2>
            <div className='FM-CardArticle-card'>
                {CardArticleData.map ((element, index) => {
                    const delay = (index * 100) + 50
                    return <Card key={index} 
                                header_url={element.headerUrl} 
                                title={element.title}
                                card_mt_p={element.card_class}
                                title_mb={element.title_mb}
                                delay={delay}
                            />
                    }
                )}
            </div>
        </div>
    </section>
  )
}