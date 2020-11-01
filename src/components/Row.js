import React from "react";

function Row(props) {
  console.log(props);

  return (
    <tr>
        <td>Firstnamehere Lastnamehere</td>
        <td>Genderhere</td>
        <td>Cityhere Statehere</td>
        <td>Emailhere</td>
    </tr>
  );
}

export default Row;
