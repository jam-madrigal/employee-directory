import React from 'react';
import Row from './components/Row/Row'
import TableHead from './components/TableHeader/TableHeader'
import API from './utils/API';


function App() {
  // Make this to a state instead for the filtering to function
  const tableStyles = {
    margin: '25px 0', 
    fontSize: '0.9em', 
    minWidth: '400px', 
    borderRadius: '10px 10px 0 0', 
    overflow: 'hidden', 
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'
  }

  let employees = [];

  // API call here that pushes to employees
  API.getUsers().then((res) => {
    console.log(res.data.results);
    employees.push(res.data.results);
  })


  return (

    // There needs to be a top page banner here with the title of the app

    // Also add a search bar component, which filters the table as the user types
    // Listens whenever there is a change on the input and searching for whatever matches the input in the object, use state to remove everything that doesn't match (activity 17)

    // Create clickable buttons on the table headers that sort the table by that header, either ascending or descending on click 

    // Add object for an api call here, push the object to an array, map over it and 
    <div className="container">

      <div className="row">

        <table className="col-sm" style={tableStyles}>
        <TableHead />
          <tbody>
            {employees.map((employee) => { 
              <Row 
                key={employee.login.uuid}
                photo={employee.picture.thumbnail}
                name={employee.name.first}
                lastname={employee.name.last}
                city={employee.city}
                userState={employee.state}
                email={employee.email}
              />
              })
            }


          </tbody>
        </table>
        
      </div>
      
    </div>
  );
}

export default App;
