import classNames from "classnames";

import "./employees-list-item.css";

const EmployeesListItem = ({ name, salary, onDelete, onToggleProps, onSalaryChange, increase, like }) => {
  // const { increase, like } = this.state;

  return (
    <li
      className={classNames(`list-group-item d-flex justify-content-between`, {
        increase: increase,
        like: like,
      })}>
      <span onClick={onToggleProps} className="list-group-item-label" data-toggle="like">
        {name}
      </span>
      <input onChange={onSalaryChange} type="text" className="list-group-item-input" value={salary}  />
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={onToggleProps} type="button" className="btn-cookie btn-sm " data-toggle="increase">
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
