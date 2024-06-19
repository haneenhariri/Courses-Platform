import NavBar from "../../components/NavBar/NavBar";
import FOOTER from '../../components/Footer/Footer'
import "./MainPage.css";

export default function MainPage() {
  const AMList= [
      {
        div : [{
        id: '1.',
        text1:'Study the material on the platform at any convenient time'
        },
        {id: '2.',
        text1:'Do practical tasks, get feedback and consolidate knowledge'}]
      },
      {
        div : [{
        id: '3.',
        text1:'Prepare a project and add it to your portfolio'
      },
      {id: '4.',
        text1:'Prepare a project and add it to your portfolio'}]
      }

    ];
  return (
    <>
      <NavBar />
      <section className="AM-DISCOVER">
          <div className="div1">
            <h2>What Will You Discover?</h2>
            <p>Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you</p>
            <button>Try free</button>
          </div>
          

          <div className="card1">
            <img src="./image/MainPageImg/WhatDiscoverImg/card_1.png" alt="" />
            <p>Photo & Film</p>
          </div>
         
          <img src="./image/MainPageImg/WhatDiscoverImg/Ellipse_gradient.png" alt="" className="img" />
          <div className="card2">
            <img src="./image/MainPageImg/WhatDiscoverImg/card_2.png" alt="" />
            <p>UI/UX Design</p>
          </div>   
      </section>
      <section className="AM-traning">
        <h2>How is the training going</h2>

        
        <div className="parentCard"> 
          {AMList.map((ITem) => (
            <div className="cards">
              {ITem.div.map((item) => (
                <div key={item.id} className="card" >
                  
                  <h3 >{item.id}</h3>
                  <div className="line">  </div>
                  <p>{item.text1}</p>
                  
                </div>
              ))}
            </div>
          ))}
        </div>

      </section>
      

      <FOOTER />
    </>
  );
}
