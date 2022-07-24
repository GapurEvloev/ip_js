import './app-info.css';

const AppInfo = ({employees, increaced}) => {
  return (
    <div className="app-info">
      <h1>Аccounting of employees in the company</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>Bonus will receive: {increaced}</h2>
    </div>
  );
}

export default AppInfo;
