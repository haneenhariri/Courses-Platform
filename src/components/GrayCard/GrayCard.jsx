import Card from './../Card/Card.jsx'
import {GrayCardData} from '../../const/data/CardData.jsx'
import './GrayCard.css'


export default function GrayCard() {
  return (
    <section className='FM-main-section-7'>
        <h2>Classes Taught by Real Creators</h2>
         <div className='FM-main-section-7-content'>
            <p>Lorem teachers are icons, experts, and industry rock stars excited to share their experience, 
                wisdom, and trusted tools with you
            </p>
            <div className='FM-main-section-7-content-see-more'>
                <h6>See more</h6>
                <img src='./image/MainPageImg//GrayCardImg/arrow_right.svg' />
            </div>
        </div>
             <div className='FM-GrayCard-card'>
                {GrayCardData.map ((element , index) => {
                    const delay = (index * 100) + 50
                    return <Card key={element.title} 
                                header_url={element.headerUrl} 
                                title={element.title}
                                desc={element.description}
                                card_show={element.card_show}
                                footer_url={element.footerUrl}
                                card_mt_p={element.card_mt}
                                delay={delay}
                            />
                    }
                )}
            </div>

    </section>
  )
}
