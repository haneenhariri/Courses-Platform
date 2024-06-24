import './WhatLearnCourse.css'
export default function AMwhatLearn(){

   const AMList1= [
    { ID : 0 ,
      div : [{
      id: '1',
      text1:'UX Research',
      text2:'excepturi sint occaecati cupiditate non provident, similique sunt in culpa'
      },
      {id: '2',
      text1:'UX Research',
      text2: 'soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime'
    }]
    },
    { ID : 1 ,
      div : [{
      id: '3',
      text1:'UX Research',
      text2: 'soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime'
    },
    {id: '4',
      text1:'UX Research',
      text2: 'soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime'
    }]
    }

  ];

  return (
    <>
      
      <section className='AM-willLearn' >
        <div className='div1'>
          <h2>What you will learn</h2>
          <div className='p'><p>The training is practice-oriented and is accompanied by mentors. By the end of the course, you will receive a portfolio of a novice product designer: from simple websites to interactive applications and presentations on ux research that can be shown to employers</p></div>
      
        </div>
        <div className='parentCard'> 
        {AMList1.map((item1) => (
            <div className="cards" key={item1.ID}>
              {item1.div.map((item) => (
                <div key={item.id} className="card" >
                  
                  <div className='div'><h3 >{item.id}</h3></div>
                  <h6>{item.text1}</h6>
                  <p>{item.text2}</p>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
        <img className='bigCircle' src="./image/CoursesImg/WhatLearnCourse/Ellipse 29.svg" alt="" />
        <img className='smallCircle'  src="./image/CoursesImg/WhatLearnCourse/Ellipse 30.svg" alt="" />
        <img className='bigSquare'  src="./image/CoursesImg/WhatLearnCourse/Rectangle 166 (1).svg" alt="" />
        <img className='smallSquare' src="./image/CoursesImg/WhatLearnCourse/Rectangle 167.svg" alt="" />
      </section>
      
      
    </>
  )
}
