import './StudentSay.css'

export default function StudentSay() {
  return (
    <section className='HH-Std'>
      <h2 className='HH-h2'>What our students have to say</h2>
      <div className='HH-icon'>
        <img className='HH-icon-arow' src="./public/image/MainPageImg/StudentSayImg/Icon_arrow_left.svg" alt="" />
        <img className='HH-icon-arow' src="./public/image/MainPageImg/StudentSayImg/Icon_arow_right.svg" alt="" />
      </div>
      <div className='HH-cards'>
        <div className='HH-card'>
            <div className='HH-cardInfo'>
                <img className='HH-cardImg' src="./public/image/MainPageImg/StudentSayImg/user_icon_left.svg" alt="" />
                <div>
                    <h3 className='HH-cardTitle'> Guy Hawkins</h3>
                    <p className='HH-CardP'>Lifestyle</p>
                </div>
            </div>
            <div className='HH-CardText'>
                <p>Ugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
            </div>
        </div>
        <div className='HH-card'>
        <div className='HH-cardInfo'>
                <img className='HH-cardImg' src="./public/image/MainPageImg/StudentSayImg/user_icon_left.svg" alt="" />
                <div>
                    <h3 className='HH-cardTitle'> Jane Cooper</h3>
                    <p className='HH-CardP'>Write</p>
                </div>
            </div>
            <div>
                <p className='HH-CardText'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
            </div>
        </div>
      </div>
    </section>
  )
}
