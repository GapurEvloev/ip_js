import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

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
          like: true,
        },
        {
          id: 2,
          name: "Robin Williams",
          salary: 3000,
          increase: false,
          like: false,
        },
        {
          id: 3,
          name: "Alex Pitterson",
          salary: 2500,
          increase: false,
          like: false,
        },
      ],
      term: "",
      filters: "all",
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
      like: false,
      id: uuidv4(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      console.log(newItem.id);
      return {
        data: newArr,
      };
    });
  };

  // onToggleIncrease = (id) => {
  //   console.log(`Increase is ${id}`);
  //   this.setState(({ data }) => {
  //     const index = data.findIndex((item) => item.id === id);

  //     const old = data[index];
  //     const newItem = { ...old, increase: !old.increase };
  //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

  //     return {
  //       data: newArray,
  //     };
  //   });
  // };

  // onToggleLike = (id) => {
  //   console.log(`Like is ${id}`);
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, like: !item.like};
  //       }
  //       return item;
  //     })
  //   }))
  // };

  onToggleProps = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (items.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  searchFilter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "for_promotion":
        return items.filter((item) => item.like);
      case "salary_over_1000":
        return items.filter((item) => item.salary >= 1000);

      default:
        return items;
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onUpdateFilters = (filters) => {
    this.setState({ filters });
  };

  render() {
    const { data, term, filters } = this.state;
    const employees = data.length;
    const increaced = data.filter((item) => item.increase).length;
    const visibleData = this.searchFilter(this.searchEmp(data, term), filters);

    return (
      <div className="app">
        <AppInfo employees={employees} increaced={increaced} />
        <SearchPanel onUpdateSearch={this.onUpdateSearch} onUpdateFilters={this.onUpdateFilters} />
        <EmployeesList
          onDelete={this.deleteItem}
          data={visibleData}
          onToggleProps={this.onToggleProps}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
