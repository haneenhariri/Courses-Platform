import './Hero.css'

export default function Hero({top_h6, top_p, title, mb_p, p, span1, btn, num1, num2, img_vector, imgURL, BtnsData , show, courses}) {

    return (
        <section className='OE-hero'>
            <div className={`OE-hero-left-div ${courses}`}>
                <h6 className={`OE-top-h6 ${show}`}>{top_h6}</h6>
                <p className={`OE-hero-left-div-p OE-top-p ${show}`}>{top_p}</p>
                <h1 className='OE-hero-left-div-h1'>{title}</h1>
                <p className={`OE-hero-left-div-p ${mb_p}`}>{p} <span className='OE-hero-left-div-span1'>{span1}</span></p> 
                <button className='OE-hero-left-div-btn'>{btn}</button>
                <div className='OE-hero-left-div-footer'>
                    <h1 className='OE-hero-left-div-h1 OE-sec-h1'>{num1}</h1>
                    <div className='OE-hero-left-div-h6'>
                        <h6>{num2} Days</h6>
                        <h6>17:44:16</h6>
                    </div>
                    <img className={img_vector} src="./image/MainPageImg/HeroImg/Vector.png"/>
                </div>
                
            </div>
            <div className='OE-hero-right-div'>
                <div className='OE-hero-right-div-imgs'>
                    <img className='OE-hero-right-div-img1' src="./image/MainPageImg/HeroImg/Hero_3.png" />
                    <img className='OE-hero-right-div-img2' src={imgURL} />
                </div>
                {BtnsData.map(element => {
                    return (
                        <button key={element.id} className={`OE-hero-right-div-btns OE-hero-right-div-btn${element.id}`}>{element.btnContent}</button>
                    )
                })}
            </div>
        </section>
    )
}