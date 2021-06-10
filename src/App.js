import React, { useState } from 'react';
import './App.css';
import './fonts/font.css';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

import MyButton from './components/Button';
import MyJumbotron from './components/Jumbotron';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [teamName, setTeamName] = useState('EURO 2020 SQUADS');
  const [teamLogo, setTeamLogo] = useState('default');
  const [teamBackground, setTeamBackground] = useState('default');

  const getInfo = (event) => {
    getSquad(event);
    getEvent(event);
  }

  const getSquad = (event) => {
    fetch(`./squads/${event.target.value}.json`)
    .then(response => response.json())
    .then(resData => setPlayers(resData.squad))
  };
  const getEvent = (event) => {
    setTeamName(event.target.value);
    setTeamLogo(event.target.value);
    setTeamBackground(event.target.value);
  } 
  
  const navbar = {
    padding: 0,
    backgroundColor: '#ffae42'
  }

  const centerAlign = {
    textAlign: 'center',
  }
  const leftAlign = {
    textAlign: 'left'
  }

  return ( 
    <div className="App">
      {/* Navigation bar */}
      <Navbar style={navbar} variant="dark" fixed="top"> 
        <Container>
          <Navbar.Brand className="specialFont" style={{ fontSize:'30px' }}>EURO 2020</Navbar.Brand>

          <MyButton click={getInfo} />

        </Container>
      </Navbar>

      {/* Main body */}
      <Container style={{ width: "60%"}}>

        {/* Jumbotron */}
        <MyJumbotron 
          team={teamName} 
          logo={`./images/logos/${teamLogo}.jpg`} 
          background={`url(./images/backgrounds/${teamBackground}.jpg)`} 
        />

        {/* Main table */}
        <div className="ag-theme-alpine" style={{ width: "100%", height: 1000, margin: 'auto'}}>
          <AgGridReact rowData={players} animateRows={true}>
            <AgGridColumn headerName="Number"         sortable={true} filter={true} cellStyle={centerAlign} field="number"        width={150}></AgGridColumn>
            <AgGridColumn headerName="Player"         sortable={true} filter={true} cellStyle={leftAlign}   field="player"        width={280}></AgGridColumn>
            <AgGridColumn headerName="Position"       sortable={true} filter={true} cellStyle={centerAlign} field="position"      width={150}></AgGridColumn>
            <AgGridColumn headerName="Date of birth"  sortable={true} filter={true} cellStyle={centerAlign} field="date_of_birth" width={240} ></AgGridColumn>
            <AgGridColumn headerName="Current club"   sortable={true} filter={true} cellStyle={leftAlign}   field="current_club"  width={285} ></AgGridColumn>
          </AgGridReact>
        </div>
        
      </Container>

    </div>
  );
}

export default App;
