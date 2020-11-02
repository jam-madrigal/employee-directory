import React from "react";
import "./style.css";

function Row(props) {
  // Add an API.get from here that gets the employees json file from the API.getUsers and stores it in the employees variable below (?)
  // useState and useEffect?
  const {key, photo, name, gender, lastname, city, userState, email} = props;

  return (
    // Add a map() here that iterates through the array of employees and generates a row with the props in their corresponding columns
    <tr key={key}>
        <td><img src={photo} alt="employee"/> {name} {lastname}</td>
        <td>{gender}</td>
        <td>{city} {userState}</td>
        <td>{email}</td>
    </tr>
  );
}

export default Row;
