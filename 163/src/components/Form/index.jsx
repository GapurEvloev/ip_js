import { memo } from "react";
import { Container } from "react-bootstrap";
import InputComponent from "../Input";

const Form = memo((props) => {
  console.log("render Form");
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
          <InputComponent/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <span onClick={props.onLog}>12</span>
        </div>
      </form>
    </Container>
  )
});

export default Form;