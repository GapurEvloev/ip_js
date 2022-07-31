import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";

class Form extends Component {
  state = {
    advOpen: false,
  };

  componentDidMount() {
    setTimeout(this.handleClick, 3000);
  }

  handleClick = () => {
    this.setState({advOpen: !this.state.advOpen});
  }

  render() {
    return (
      <Container>
        <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" style={{overflow: 'hidden', position: 'relative'}}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              ref={this.setInputRef}
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
            <textarea onClick={this.handleClick} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          { this.state.advOpen ?
            <Portal>
              <Message>Hello</Message>
            </Portal> : null
          }
        </form>
      </Container>
    );
  }
}

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);
  return ReactDOM.createPortal(props.children, node);
};

const Message = styled.div`
  width: 500px;
  height: 150px;
  background: red;
  position: absolute;
  right: 0%;
  bottom: 0%;
`; 

function App() {
  return <Form />;
}

export default App;
