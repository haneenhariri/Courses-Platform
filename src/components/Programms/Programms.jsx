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
      const duble=AMbutton.concat(AMbutton);
    return(
        <>
        <section className='AM-Programm'>
          <div className='button'>
            {duble.map((item) => (
              <button key={item.text1}>{item.text1}</button>
            ))}
          </div>
        </section>
        
        
        
        </>
    )
}