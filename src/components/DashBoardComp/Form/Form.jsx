import "./Form.css";
import { Outlet } from "react-router-dom";

const Form = ({ label1, label2, label3, label4, title, input1 , input2 , input3 , input4}) => {

  return (
    <section className="FM-Dash-Header">
      <form className="BA-custom-form">

      <h2>{title}</h2>
      
      <label>
        <p>
          {label1} <span>*</span>
        </p>
        <input
          value={input1}
          type="text"
        />
      </label>
      <label>
        <p>
          {label2} <span>*</span>
        </p>
        <input
          value={input2}
          type="text"
        />
      </label>
      <label>
        <p>
          {label3} <span>*</span>
        </p>
        <textarea
          value={input3}
        ></textarea>
      </label>
      <label>
        <p>
          {label4} <span>*</span>
        </p>
        <input
          value={input4}
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
