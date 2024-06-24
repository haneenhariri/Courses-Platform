import React from 'react'
import Card from './../Card/Card.jsx'
import {TeachersData} from '../../const/data/CardData.jsx'
import './Teachers.css'

export default function Teachers() {
  return (
    <section className='FM-courses-section-7'>
        <h2>Teachers</h2>
        <div className='FM-Teachers-card'>
                {TeachersData.map (element => {
                    return <Card key={element.title} 
                                header_url={element.headerUrl} 
                                title={element.title}
                                desc={element.description}
                                card_show={element.card_show}
                                footer_url={element.footerUrl}
                                card_mt_p={element.card_mt}
                            />
                    }
                )}
            </div>

    </section>
  )
}
