import React from 'react';
import Row from './components/Row'
import Table from './components/Table'


function App() {
  const employees = [{}]
  return (
    <div>
    <Table>
      <tbody>
        <Row />
        <Row />
        <Row />
      </tbody>
    </Table>
    </div>
  );
}

export default App;
