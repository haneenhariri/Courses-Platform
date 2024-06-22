import React from 'react'
import './ProjStd.css'
import Card from '../Card/Card'

const ProjStdData = [
    {
        title: 'Landing page',
        headerUrl: './image/CoursesImg/ProjStd/Rectangle 98 (1).png',
        card_class: 'FM-card-padding'
    },
    {
        title: 'Mobile App',
        headerUrl: './image/CoursesImg/ProjStd/Mask group.png',
        card_class: 'FM-card-padding'
    },
    {
        title: 'E-commerce',
        headerUrl: './image/CoursesImg/ProjStd/Rectangle 101.png',
        card_class: 'FM-card-padding'
    },
    {
        title: 'Redesign Concept',
        headerUrl: './image/CoursesImg/ProjStd/Rectangle 103.png',
        card_class: 'FM-card-padding'
    }
]

export default function ProjStd() {
  return (
    <section className='FM-main-section-3'>
        <div className='FM-main-section-3-content'>
            <h2>Projects of our students</h2>
            <div className='FM-ProjStd-card'>
                {ProjStdData.map (element => {
                    return <Card key={element.title} 
                                header_url={element.headerUrl} 
                                title={element.title}
                                card_mt_p={element.card_class}
                            />
                    }
                )}
            </div>
            
            
        </div>
      
    </section>
  )
}