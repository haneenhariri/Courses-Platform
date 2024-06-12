import { Accordion } from 'react-bootstrap'
import './Acordeon.css'
import { MainData } from '../../const/data/AcData'
import { CourseData } from '../../const/data/AcData'
export default function Acordeon({page}) {
  return (
    <>
      <Accordion className='HH-accordion' flush >
        { page? MainData.map((item,index) => {
            return(     
              <Accordion.Item className='HH-item' key={index} eventKey={item.event}>
                <Accordion.Header className='HH-title' >{item.title}</Accordion.Header>
                <Accordion.Body>
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
          )
          })
          :
          CourseData.map((item,index) => {
            return(     
              <Accordion.Item className='HH-item' key={index} eventKey={item.event}>
                <Accordion.Header className='HH-title'><div className='month'><h6 className='month-h6'>{item.Acbtn}</h6></div> {item.title}</Accordion.Header>
                <Accordion.Body>
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            )
          })
        }
      </Accordion>
    </>
  )
}
