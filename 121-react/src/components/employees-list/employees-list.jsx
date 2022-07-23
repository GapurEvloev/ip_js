import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css"

const EmployeesList = ({data, onDelete}) => {
  return (
    <ul className="app-list">
      {
        data.map(item => {
          return (
            <EmployeesListItem 
              key={item.id} 
              {...item}
              onDelete={(e) => onDelete(item.id)}
            />
          )
        })
      }
    </ul>
  );
}

export default EmployeesList;
