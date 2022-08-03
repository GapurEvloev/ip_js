import React, { useRef } from "react";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.focus();
  }

  return (
    <Container>
      <form onClick={handleClick} className="w-50 border mt-5 p-3 m-auto" style={{overflow: 'hidden', position: 'relative'}}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            ref={myRef}
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
          <textarea onClick={handleClick} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </Container>
  );
}



export default Form;
