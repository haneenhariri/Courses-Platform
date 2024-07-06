import { useState } from "react"
import { AddEditRow } from "../CRUD"
import "./Form.css"

const Form = ({ label1, label2, label3, label4, title ,input1, input2 , input3 , input4, TdData, i, func}) => {
  const [setValue1, setInputValue1] = useState(input1)
  const [setValue2, setInputValue2] = useState(input2)
  const [setValue3, setInputValue3] = useState(input3)
  const [setValue4, setInputValue4] = useState(input4)

  const FormStructure = [
    {
      id: 1, 
      LableFor: 'input-1',
      Lable: label1,
      input: <input className="FM-input" type="text" id="input-1" value={setValue1} onChange={() => setInputValue1()} required/>
    },
    {
      id: 2,
      LableFor: 'input-2',
      Lable: label2,
      input: <input className="FM-input" type="text" id="input-2" value={setValue2} onChange={() => setInputValue2()} required/>
    },
    {
      id: 3,
      LableFor: 'input-3',
      Lable: label3,
      input: <textarea className="FM-input FM-textarea" id="input-3" value={setValue3} onChange={() => setInputValue3()} required></textarea>
    },
    {
      id: 4,
      LableFor: 'input-4',
      Lable: label4,
      input: <input className="FM-input" type="text" id="input-4" value={setValue4} onChange={() => setInputValue4()} required/>
    }
  ]

  return (
    <section className="FM-Dash-Header">

    <form className="FM-form">

      <h2 className="FM-form-title">{title}</h2>

      {FormStructure.map(e => {
        return (
          <div key={e.id} className="FM-lable-input">
            <label className="FM-lable" htmlFor={e.LableFor}>{e.Lable}<span className="FM-input-require"> *</span></label>
            {e.input}
          </div>
        )
      })}

      <div className="FM-btn-parent"><button className="FM-form-btn" onClick={(event) => { event.preventDefault(); AddEditRow(TdData, i, func); }}>Save</button></div>
      
    </form>
    </section>
    

  )
}

export default Form
