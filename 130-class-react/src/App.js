import React from "react";
import "./App.css";

class WhoIAm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 30,
      text: "+++"
    };
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1,
    }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
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
