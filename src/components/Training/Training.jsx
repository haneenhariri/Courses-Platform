import './Training.css'
export default function AMTrain() {
    const AMList= [
        { ID :0 ,
          div : [{
          id: '1.',
          text1:'Study the material on the platform at any convenient time'
          },
          {
            id: '3.',
            text1:'Prepare a project and add it to your portfolio'
          }
          ]
        },
        { ID :1 ,
          div : [{id: '2.',
            text1:'Do practical tasks, get feedback and consolidate knowledge'},
            {id: '4.',
              text1:'Prepare a project and add it to your portfolio'}
           ]
        
          
        }
  
      ];
    return (
      <>
       
        <section className="AM-traning">
          <div className='h2'><h2>How is the training going</h2></div>
          
  
          
          <div className="parentCard"> 
            {AMList.map((ITem) => (
              <div className="cards" key={ITem.ID}>
                {ITem.div.map((item) => (
                  <div key={item.id} className="card" >
                    
                    <h3 >{item.id}</h3>
                    
                    <p>{item.text1}</p>
                    
                  </div>
                ))}
              </div>
            ))}
          </div>
  
        </section>
        
  
        
      </>
    );
  }
  
  