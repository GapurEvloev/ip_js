import React, { Component } from "react";
import classNames from "classnames";

class SearchFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
    this.buttons = [
      { name: "All employees", filter: "all" },
      { name: "For promotion", filter: "for_promotion" },
      { name: "Salary over 1000$", filter: "salary_over_1000" },
    ];
  }

  onUpdateFilters = (e) => {
    const filter = e.currentTarget.getAttribute("data-filter");
    this.setState({ filter });
    this.props.onUpdateFilters(filter);
  };

  render() {
    return (
      <div className="mt-2 btn-group">
        {this.buttons.map((button) => (
          <button
            key={button.filter}
            onClick={this.onUpdateFilters}
            className={classNames("btn", button.filter === this.state.filter ? "btn-light" : "btn-outline-light")}
            type="button"
            data-filter={button.filter}>
            {button.name}
          </button>
        ))}
      </div>
    );
  }
}

export default SearchFilters;
