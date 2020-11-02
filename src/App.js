import React from 'react';
import Row from './components/Row/Row'
import TableHead from './components/TableHeader/TableHeader'


function App() {
  // Make this to a state instead for the filtering to function
  const employees = [{}];

  // API call here that pushes to employees
  return (

    // There needs to be a top page banner here with the title of the app

    // Also add a search bar component, which filters the table as the user types
    // Listens whenever there is a change on the input and searching for whatever matches the input in the object, use state to remove everything that doesn't match (activity 17)

    // Create clickable buttons on the table headers that sort the table by that header, either ascending or descending on click 

    // Add object for an api call here, push the object to an array, map over it and 
    <div className="container">

      <div className="row">

        <table className="col-sm" style={{margin: '25px 0', 'font-size': '0.9em', 'min-width': '400px', 'border-radius': '10px 10px 0 0', overflow: 'hidden', 'box-shadow': '0 0 20px rgba(0, 0, 0, 0.15)'}}>
        <TableHead />
          <tbody>
            {employees.map((employee) => <Row picture={employee.picture}/>)}


          </tbody>
        </table>
        
      </div>
      
    </div>
  );
}

export default App;
