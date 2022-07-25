import { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  };

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input value={this.state.term} onChange={this.onUpdateSearch} type="text" className="form-control search-input" placeholder="Search employees"/>
    );
  }
}

export default SearchInput;
