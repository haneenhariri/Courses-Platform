import './Programms.css'
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
    return(
        <>
        <section className='AM-Programm'>
        <div className='button'>
          {AMbutton.map((item) => (
            <button key={item.text1}>{item.text1}</button>
          ))}
        </div>
      </section>
        
        
        
        </>
    )
}