import './Price.css'
import { PriceData } from '../../const/data/PriceData'

export default function Price(){
  return (
    
    <section className='OE_price'>
    <h2 className='OE_price_h1'>Price</h2>
        <div className="OE_price_cards"> {
          PriceData.map((item, index) => {
              return (
                
                    <div className={item.class} key={index}>
                      <div>
                      <h2 className='OE_price_h2'>
                      { item.title}
                      </h2>
                         <ul className='OE_ul'>
                          <li className='OE_li_1'>{item.item1}</li>
                          <li className='OE_li_2'>{item.item2}</li>
                          <li className='OE_li_3'>{item.item3}</li>
                          <li className='OE_li_4'>{item.item4}</li>
                          {item.item5 !== ' ' && <li classNa me='OE_li_5'> {item.item5}</li>}
                        </ul>
                      </div>
                      <div>
                      <h3 className='OE_price1'>{item.price1}</h3>
                      <h2 className='OE_price2'>{item.price2}</h2>
                      <button className='OE_price_button'>Choose</button>
                      </div>
                  </div>   

                  
              )
          }
          )}
                  
       
      </div>
      </section>


  )
}
