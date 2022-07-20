import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css"

const EmployeesList = () => {
  return (
    <ul className="app-list">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ul>
  );
}

export default EmployeesList;
