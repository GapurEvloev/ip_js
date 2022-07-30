import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";
import BootstrapGrid from "./BootstrapGrid";

const EmpItem = styled.div`
  padding: 20px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  a {
    display: block;
    margin: 10px auto;
    color: ${(props) => (props.active ? "red" : "black")};
  }

  input {
    display: block;
    margin: 10px auto 0;
  }
`;

const Header = styled.h2`
  font-size: 22px;
  color: #3d5a80;
`;

const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`;

class WhoIAm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 30,
      text: "+++",
      position: "",
    };
    this.nextYear = this.nextYear.bind(this); // задаем контекст для метода nextYear
  }

  nextYear() {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  }

  prevYear() {
    this.setState((state) => ({
      years: state.years - 1,
    }));
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { years, position } = this.state;
    return (
      <EmpItem active>
        <Button onClick={() => this.prevYear()}>{"---"}</Button>
        <BigButton onClick={this.nextYear}>{this.state.text}</BigButton>
        <Header>
          My name is {name}, surname - {surname}, age - {years}, position - {position}
        </Header>
        <BigButton as="a" href={link}>
          My profile
        </BigButton>
        <form action="">
          <span>Enter position</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, "some color")} />
        </form>
      </EmpItem>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0;
`;

const DynamicGreating = (props) => {
  return (
    <div style={props.style} className={`mb-3 p-3 border border-${props.color}`}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: "shadow p-3 m-3 border rounded"});
        })
      }
    </div>
  )
};

const HelloGreating = (props) => {
  return (
    <div>
      <DynamicGreating style={{"width":"600px", "margin": "0 auto"}} color={"primary"}>
        <h2>Hello there</h2>
      </DynamicGreating>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <Wrapper>
        <WhoIAm name={"John"} surname={"Smith"} link={"facebook.com"} />
        <WhoIAm name={"Alex"} surname={"Jonson"} link={"linkedin.com"} />
      </Wrapper>
      <BootstrapGrid></BootstrapGrid>
      
      <HelloGreating/>
      <DynamicGreating color={"primary"}>
        <h1>header DynamicGreating</h1>
        <h2>header h2 DynamicGreating</h2>
      </DynamicGreating>
    </div>
  );
}

export default App;
