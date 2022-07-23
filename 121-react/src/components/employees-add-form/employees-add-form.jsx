import { Component } from "react";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex">
          <input
            name="name"
            value={this.state.name}
            onChange={this.onValueChange}
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
          />
          <input
            name="salary"
            value={this.state.salary}
            onChange={this.onValueChange}
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
