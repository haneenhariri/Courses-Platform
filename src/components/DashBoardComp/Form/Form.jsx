import { useState } from "react";
import "./Form.css";

const Form = ({ label1, label2, label3, label4, title, ...props }) => {
  const [input1, setInput1] = useState(props.input1 ? props.input1 : "");
  const [input2, setInput2] = useState(props.input2 ? props.input2 : "");
  const [input3, setInput3] = useState(props.input3 ? props.input3 : "");
  const [input4, setInput4] = useState(props.input4 ? props.input4 : "");

  return (
    <form className="BA-custom-form">
      <h2>{title}</h2>
      <label>
        <p>
          {label1} <span>*</span>
        </p>
        <input
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          type="text"
        />
      </label>
      <label>
        <p>
          {label2} <span>*</span>
        </p>
        <input
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          type="text"
        />
      </label>
      <label>
        <p>
          {label3} <span>*</span>
        </p>
        <textarea
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        ></textarea>
      </label>
      <label>
        <p>
          {label4} <span>*</span>
        </p>
        <input
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          type="text"
        />
      </label>
      <button>Save</button>
    </form>
  );
};

export default Form;
