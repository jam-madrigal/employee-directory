import React from "react";
import "./style.css";
import API from '../../utils/API';

function Row(props) {
  // Add an API.get from here that gets the employees json file from the API.getUsers and stores it in the employees variable below (?)
  // useState and useEffect?

  return (
    // Add a map() here that iterates through the array of employees and generates a row with the props in their corresponding columns
    <tr>
        <td>{props.picture} Firstnamehere Lastnamehere</td>
        <td>Genderhere</td>
        <td>Cityhere Statehere</td>
        <td>Emailhere</td>
    </tr>
  );
}

export default Row;
