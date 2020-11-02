import React from 'react';
import Row from './components/Row/Row'
import TableHead from './components/TableHeader/TableHeader'


function App() {
  const employees = [{}]
  return (
    <div className="container">

      <div className="row">

        <table className="col-sm">
        <TableHead />
          <tbody>
            <Row />
            <Row />
            <Row />
          </tbody>
        </table>
        
      </div>
      
    </div>
  );
}

export default App;
