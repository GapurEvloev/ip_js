import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Jack Sparrow",
          salary: 2000,
          increase: true,
        },
        {
          id: 2,
          name: "Robin Williams",
          salary: 3000,
          increase: false,
        },
        {
          id: 3,
          name: "Alex Pitterson",
          salary: 2500,
          increase: false,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({ data: data.filter((item) => item.id !== id) }));
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: nextId(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <SearchPanel />
        <EmployeesList onDelete={this.deleteItem} data={this.state.data} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
