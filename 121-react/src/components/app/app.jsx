import AppInfo from "../app-info/app-info"
import EmployeesAddForm from "../employees-add-form/employees-add-form"
import EmployeesList from "../employees-list/employees-list"
import SearchPanel from "../search-panel/search-panel"
import "./app.css"

function App() {
  const data = [
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
  ]
  return (
    <div className="app">
      <AppInfo/>
      <SearchPanel/>
      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  )
}

export default App