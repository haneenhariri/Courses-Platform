import './FAQ.css'
import Acordeon from '../../components/Acordeon/Acordeon'
export default function FAQ() {
  return (
    <section className='faq'>
       <h2 className='HH-F-title'>FAQ</h2>
       <Acordeon page={true} />
    </section>
  )
}
