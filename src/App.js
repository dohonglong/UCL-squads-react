import React, { useState } from 'react';
import './App.css';

import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from './components/Button';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  const [players, setPlayers] = useState([]);

  const getSquad = (event) => {
    fetch(`./squad/${event.target.value}.json`)
    .then(response => response.json())
    .then(resData => setPlayers(resData.squad))
  };

  const navbar = {
    padding: 0
  }

  const centerAlign = {
    textAlign: 'center',
  }
  const leftAlign = {
    textAlign: 'left'
  }

  return ( 
    <div className="App">
      <Navbar style={navbar} bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand style={{ fontSize:'20px', fontWeight: "bold" }}>EURO 2020</Navbar.Brand>

          <Button click={getSquad} />

        </Container>
      </Navbar>

      <Container>
        <div className="ag-theme-alpine" style={{ width: "80%", height: 1000, margin: 'auto', paddingTop: 50 }}>
          <AgGridReact rowData={players} animateRows={true}>
            <AgGridColumn headerName="No."            sortable={true} filter={true} cellStyle={centerAlign} field="number"        width={105}></AgGridColumn>
            <AgGridColumn headerName="Player"         sortable={true} filter={true} cellStyle={leftAlign}   field="player"        width={230}></AgGridColumn>
            <AgGridColumn headerName="Position"       sortable={true} filter={true} cellStyle={centerAlign} field="position"      width={130}></AgGridColumn>
            <AgGridColumn headerName="Date of birth"  sortable={true} filter={true} cellStyle={centerAlign} field="date_of_birth" width={170} ></AgGridColumn>
            <AgGridColumn headerName="Current club"   sortable={true} filter={true} cellStyle={leftAlign}   field="current_club"  width={250} ></AgGridColumn>
          </AgGridReact>
        </div>
      </Container>

    </div>
  );
}

export default App;
