import React from "react";
import "./App.css";

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
    this.setState(state => ({
      years: state.years + 1,
    }));
  };
  
  prevYear() {
    this.setState(state => ({
      years: state.years - 1,
    }));
  };

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { years, position} = this.state;
    return (
      <div>
        <button onClick={() => this.prevYear()}>{"---"}</button>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, 
          age - {years}, 
          position - {position}
        </h1>
        <a href={link}>My profile</a>
        <form action="">
          <span>Enter position</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, "some color")} />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoIAm name={"John"} surname={"Smith"} link={"facebook.com"} />
      <WhoIAm name={"Alex"} surname={"Jonson"} link={"linkedin.com"} />
    </div>
  );
}

export default App;
