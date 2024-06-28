import './WhatDiscover.css'
export default function WHatDiscover(){
    return(
        <>
        <section className="AM-DISCOVER">
          <div className="div1">
            <h2>What Will You Discover?</h2>
            <p>Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you</p>
            <button>Try free</button>
          </div>
        {/*   <img src="./image/MainPageImg/WhatDiscoverImg/Ellipse_gradient.png" alt="" className="img" /> */}
         <div className='cards'>
          <div className="card1">
            <img src="./image/MainPageImg/WhatDiscoverImg/card_1.png" alt="" />
            <h3>Photo & Film</h3>
          </div>
          <div className="card2">
            <img src="./image/MainPageImg/WhatDiscoverImg/card_2.png" alt="" />
            <h3>UI/UX Design</h3>
          </div> 
        </div>  
      </section>
      
        
        
        </>
    )
}