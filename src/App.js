import React from 'react';
import Row from './components/Row/Row'
import TableHead from './components/TableHeader/TableHeader'
import API from './utils/API';

// Styles to be used for the table div
const tableStyles = {
  margin: '25px 0', 
  fontSize: '0.9em', 
  minWidth: '400px', 
  borderRadius: '10px 10px 0 0', 
  overflow: 'hidden', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'
}

class App extends React.Component {

// Setting the initial state that can then hold the employees data from the api call, to be passed as props
constructor() {
  super() 
  this.state = {
    employees: [],
    search: ""
  }
}
  // API call that, when the component successfully mounts, pushes the data into the state
componentDidMount() {
  API.getUsers().then((res) => {
    this.setState({
      employees: res.data.results
    })
  })
}

// When the search bar receives input
onchange = e => {
  this.setState({ search: e.target.value });
  console.log(this.state.search);

}


render() {

  // Filtering the table and re-rendering it based on search input, spanning every row visible row prop (name, gender, etc.)
  let filteredEmployees = this.state.employees.filter( (employee) => {
    return employee.gender.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.location.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.location.state.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
  });

  return (

    // There needs to be a top page banner here with the title of the app

    // Also add a search bar component, which filters the table as the user types
    // Listens whenever there is a change on the input and searching for whatever matches the input in the object, use state to remove everything that doesn't match (activity 17)

    // Create clickable buttons on the table headers that sort the table by that header, either ascending or descending on click 

// The html that gets rendered
    <div className="container">
      {/* Search bar */}
      <div className="row">
        <input type="text" className="col" placeholder="Search for an employee" onChange={this.onchange}/>
      </div>

      {/* Table */}
      <div className="row">
        <table className="col-sm" style={tableStyles}>
        <TableHead />
          <tbody>
          <Row employees={filteredEmployees}/>

          </tbody>
        </table>
        
      </div>
      
    </div>
  );
}
}

export default App;
