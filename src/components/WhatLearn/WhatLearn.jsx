import React from 'react'
import {PData, divData, imgData} from '../../const/data/WhatLearnData'
import './WhatLearn.css'


export default function WhatLearn() {
  return (
    <section className='FM-main-section-1'>
        <div className='FM-main-section-1-content'>
            <div className='FM-main-section-1-content-left'>
                <h2>What you will learn</h2>
                {PData.map(element => {
                    return <p key={element.id}>{element.content}</p>
                })}
            </div>
            <div className='FM-main-section-1-content-right'>
                {divData.map(element => {
                    return (
                        <div key={element.id}>
                            <h2>{element.title}</h2>
                            <p>Courses</p>
                        </div>
                    )
                })}
            </div>
        </div>
        {imgData.map(element => {
            return <img key={element.id} className={element.className} src={element.url} />
        })}
    </section>
  )
}
