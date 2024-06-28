import Card from './../Card/Card.jsx'
import {discoverData , H6Data} from '../../const/data/CardData.jsx'
import './DiscoverLearn.css'

export default function DiscoverLearn() {
  return (
    <section className='FM-main-section-2'>
        <div className='FM-main-section-2-content'>
            <h2>Discover Lifelong Learning</h2>
            <div className='FM-main-section-2-content-links'>
                <div className='after'>
                    {H6Data.map(element => {
                        return <h6 key={element.id}>{element.content}</h6>
                    })}
                </div>
                <div className='FM-main-section-2-content-see-more'>
                    <h6>See more</h6>
                    <img src="./image/MainPageImg/DiscoverLearnImg/arrow_right.svg" />
                </div>
            </div>
            <div className='FM-discoverData-card'>
                {discoverData.map (element => {
                    return <Card key={element.title} className="FM-MJ-card" header_url={element.headerUrl} 
                                title={element.title} 
                                desc={element.description} 
                                card_show={element.card_show}
                                footer_url={element.footerUrl} />
                    }
                )}
            </div>
            
            
        </div>
      
    </section>
  )
}