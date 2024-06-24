import React from 'react'
import Card from '../Card/Card'
import {ProjStdData} from '../../const/data/CardData'
import './ProjStd.css'

export default function ProjStd() {
  return (
    <section className='FM-coursrs-section-3'>
        <div className='FM-coursrs-section-3-content'>
            <h2>Projects of our students</h2>
            <div className='FM-ProjStd-card'>
                {ProjStdData.map (element => {
                    return <Card key={element.title} 
                                header_url={element.headerUrl} 
                                title={element.title}
                                title_mb={element.title_mb}
                                card_mt_p={element.card_class}
                            />
                    }
                )}
            </div>
            
            
        </div>
      
    </section>
  )
}