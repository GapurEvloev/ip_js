import { Component } from "react";
import classNames from "classnames";

import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
    };
  }

  toggleIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  toggleLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase, like } = this.state;

    return (
      <li
        className={classNames(`list-group-item d-flex justify-content-between`, {
          increase: increase,
          like: like,
        })}>
        <span onClick={this.toggleLike} className="list-group-item-label">
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={this.toggleIncrease} type="button" className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
