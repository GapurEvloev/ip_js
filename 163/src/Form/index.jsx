import React, {useRef, useState} from "react";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function useInputWithValidate(initValue) {
  const [value, setValue] = useState(initValue);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const validateInput = () => {
    return value.search(/\d/) >= 0;
  };

  return {value, onChange, validateInput};
}

const Form = () => {
  const input = useInputWithValidate("");
  const textArea = useInputWithValidate("");

  const myRef = useRef(1);

  // React.useEffect(() => console.log(myRef.current));

  const color = input.validateInput() ? "text-danger" : null;
  const colorTextArea = textArea.validateInput() ? "text-danger" : null;

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto" style={{overflow: 'hidden', position: 'relative'}}>
        <div className="mb-3">
          <input type="text" value={`${input.value} / ${textArea.value}`} className="form-control" readOnly />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            onChange={input.onChange}
            value={input.value}
            type="email"
            className={`form-control ${color}`}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea onClick={() => myRef.current + 1} onChange={textArea.onChange} value={textArea.input} className={`form-control ${colorTextArea}`} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </Container>
  );
}



export default Form;
