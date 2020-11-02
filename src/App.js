import React from 'react';
import Row from './components/Row/Row'
import TableHead from './components/TableHeader/TableHeader'


function App() {
  return (
    <div className="container">

      <div className="row">

        <table className="col-sm" style={{margin: '25px 0', 'font-size': '0.9em', 'min-width': '400px', 'border-radius': '10px 10px 0 0', overflow: 'hidden', 'box-shadow': '0 0 20px rgba(0, 0, 0, 0.15)'}}>
        <TableHead />
          <tbody>
            <Row />
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
