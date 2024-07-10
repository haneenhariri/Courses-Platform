import './Programms.css'
import React, { useState, useEffect } from 'react';
export default function Programm(){
    const AMbutton=[
        {
          text1 : 'InVision'
        },
        {
          text1 : 'Photoshop'
        },
        {
          text1 : 'Figma'
        },
        {
          text1 : 'Illustrator'
        },
        {
          text1 : 'Miro'
        },
        {
          text1 : 'ProtoPie'
        }
      ];
      const duble=AMbutton.concat(AMbutton);
      
      const [isMobile, setIsMobile] = useState(false);
      
        useEffect(() => {
          const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 566);
          };
      
          checkScreenSize();
          window.addEventListener('resize', checkScreenSize);
      
          
          return () => {
            window.removeEventListener('resize', checkScreenSize);
          };
        }, []);
      
        const displayedButtons = isMobile ? AMbutton : duble;
    return(
        <>
        <section className='AM-Programm'>
          <div className='button'>
            {displayedButtons.map((item) => (
              <button key={item.text1}>{item.text1}</button>
            ))}
          </div>
        </section>
        
        
        
        </>
    )
}