import React from "react";
import "./style.css";

function Row(props) {

  // useState and useEffect?
  return (
    // Add a map() here that iterates through the array of employees and generates a row with the props in their corresponding columns
    props.employees.map((employee) => {
      console.log(employee.gender);
    return (
    <tr key={employee.login.uuid}>
        <td><img src={employee.picture.thumbnail} alt="employee"/> {employee.name.first} {employee.name.last}</td>
        <td>{employee.gender}</td>
        <td>{employee.location.city}, {employee.location.state}</td>
        <td>{employee.email}</td>
    </tr>)
    })
  )
}

export default Row;
