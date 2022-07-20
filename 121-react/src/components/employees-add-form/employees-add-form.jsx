import React from "react";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Add a new employee</h3>
      <form className="add-form d-flex">
        <input type="text" className="form-control new-post-label" placeholder="What's his name?" />
        <input type="number" className="form-control new-post-label" placeholder="Salary in $?" />

        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
