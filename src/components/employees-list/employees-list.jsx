import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployesList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item; // Destructure to get id and the rest of the properties
    return <EmployeesListItem key={id} {...itemProps} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployesList;
