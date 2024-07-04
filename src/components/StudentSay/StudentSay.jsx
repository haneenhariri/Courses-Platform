import './StudentSay.css'
import {TableSay} from '../../const/data/CrudData'
export default function StudentSay() {
  return (
    <section className='HH-Std'>
      <h2 className='HH-h2'>What our students have to say</h2>
      <div className='HH-icon'>
        <img className='HH-icon-arow' src="./image/MainPageImg/StudentSayImg/Icon_arrow_left.svg" alt="arrow left" />
        <img className='HH-icon-arow' src="./image/MainPageImg/StudentSayImg/Icon_arow_right.svg" alt="arrow right" />
      </div>
      <div className='HH-cards'>
        {TableSay.map((info,index)=>(
                    <div className='HH-card' key={index}>
                    <div className='HH-cardInfo'>
                        <img className='HH-cardImg' src="./image/MainPageImg/StudentSayImg/user_icon_left.svg" alt="user" />
                        <div>
                            <h3 className='HH-cardTitle'>{info.td1}</h3>
                            <p className='HH-CardP'>Lifestyle</p>
                        </div>
                    </div>
                    <div className='HH-CardText'>
                        <p>{info.td3}</p>
                    </div>
                </div>
        ))}
      </div>
    </section>
  )
}
