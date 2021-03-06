import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProps, onSalaryChange }) => {
  return (
    <ul className="app-list">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute("data-toggle"))}
            onSalaryChange={(e) => onSalaryChange(id, e.target.value)}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
