import React, {useEffect, useRef, useState} from "react";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [text, setText] = useState("");
  const myRef = useRef(1);

  useEffect(() => console.log(myRef.current))

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto" style={{overflow: 'hidden', position: 'relative'}}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea onClick={() => myRef.current + 1} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </Container>
  );
}



export default Form;
