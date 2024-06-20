import React from 'react'
import Card from './../Card/Card.jsx'
import './DiscoverLearn.css'
const discoverData = [
    {
        title: 'Sales Marketing',
        headerUrl: './image/MainPageImg/DiscoverLearnImg/card_4.png',
        description: '6 months',
        footerUrl: './image/MainPageImg/DiscoverLearnImg/Vector.svg'
    },
    {
        title: 'Data analytics',
        headerUrl: './image/MainPageImg/DiscoverLearnImg/card_2.png',
        description: '9 months',
        footerUrl: './image/MainPageImg/DiscoverLearnImg/Vector.svg'
    },
    {
        title: 'Design art',
        headerUrl: './image/MainPageImg/DiscoverLearnImg/card_3.png',
        description: '4 months',
        footerUrl: './image/MainPageImg/DiscoverLearnImg/Vector.svg'
    },
    {
        title: 'Animation',
        headerUrl: './image/MainPageImg/DiscoverLearnImg/card_1.png',
        description: '8 months',
        footerUrl: './image/MainPageImg/DiscoverLearnImg/Vector.svg'
    }
]

export default function DiscoverLearn() {
  return (
    <section className='FM-main-section-2'>
        <div className='FM-main-section-2-content'>
            <h2>Discover Lifelong Learning</h2>
            <div className='FM-main-section-2-content-links'>
                <div>
                    <h6>Popular</h6>
                    <h6>Animation</h6>
                    <h6>Design</h6>
                    <h6>Illustration</h6>
                    <h6>Programming</h6>
                    <h6>Photo & Film</h6>
                    <h6>Marketing</h6>
                </div>
                <div>
                    <h6>See more</h6>
                    <img src="./image/MainPageImg/DiscoverLearnImg/arrow_right.svg" />
                </div>
            </div>
            <div className='FM-discoverData-card'>
                {discoverData.map (element => {
                    return <Card key={element.title} className="FM-MJ-card" header_url={element.headerUrl} 
                                title={element.title} 
                                desc={element.description} 
                                footer_url={element.footerUrl} />
                    }
                )}
            </div>
            
            
        </div>
      
    </section>
  )
}