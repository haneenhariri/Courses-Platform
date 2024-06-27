import './StdProgram.css'

export default function StdProgram() {
  return (
    <section className="ma-prog">
        <div className="ma-text-prog">
            <h2 id="h2-prog">Can&#39;t find a suitable program?</h2>
            <p id="p-prog">We will help you with the choice!</p>
        </div>
        <div className="ma-sign-in">
            <input className="ma-inp-prog" type="text" placeholder="Name"/>
            <input className="ma-inp-prog" type="email" placeholder="Email" />
            <button id="prog-but">Help me</button>
            <img id="ma2-img" src="./image/StdProgramImg/Vector 11.svg" alt="arrow" />
        </div>
    </section>
  )
}