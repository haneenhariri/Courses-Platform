import { useState } from "react";
import "./Form.css";
import { Outlet } from "react-router-dom";

const Form = ({ label1, label2, label3, label4, title, input1 , input2 , input3 , input4 }) => {
  
  const [Data, setData] = useState({
    text1:input1,
    text2: input2,
    text3: input3,
    date: input4

  });
  const handelSave = (event) =>{
    event.preventDefault();
    

  }
  function handel(e) {
    const newData = { ...Data }
    newData[e.target]= e.target.value
    setData(newData)
    console.log(newData)
    
  }
  return (
    <section className="FM-Dash-Header">
      <form className="BA-custom-form" onSubmit={handelSave}>

      <h2>{title}</h2>
      
      <label>
        <p>
          {label1} <span>*</span>
        </p>
        <input
          onChange={(e) => handel(e)}
          value={Data.text1}
          type="text"
        />
      </label>
      <label>
        <p>
          {label2} <span>*</span>
        </p>
        <input
          onChange={(e) => handel(e)}
          value={Data.text2}
          type="text"
        />
      </label>
      <label>
        <p>
          {label3} <span>*</span>
        </p>
        <textarea
          onChange={(e) => handel(e)}
          value={Data.text3}
        ></textarea>
      </label>
      <label>
        <p>
          {label4} <span>*</span>
        </p>
        <input
          onChange={(e) => handel(e)}
          value={Data.date}
          type="text"
        />
      </label>
      <button>Save</button>
      <Outlet/>
    </form>
    </section>
    

  );
};

export default Form;