import AppInfo from "../app-info/app-info"
import EmployeesAddForm from "../employees-add-form/employees-add-form"
import EmployeesList from "../employees-list/employees-list"
import SearchPanel from "../search-panel/search-panel"
import "./app.css"

function App() {
  return (
    <div className="app">
      <AppInfo/>
      <SearchPanel/>
      <EmployeesList/>
      <EmployeesAddForm/>
    </div>
  )
}

export default App