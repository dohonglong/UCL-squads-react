import React, { useState } from 'react';
import './App.css';
import './fonts/font.css';
import './flags/flag-icon.css';

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
  const [teamName, setTeamName] = useState('UEFA Champions League 2021/22');
  const [teamLogo, setTeamLogo] = useState('default');
  const [teamBackground, setTeamBackground] = useState('default');

  const navbar = { padding: 0, backgroundColor: '#0E1E5B' }

  const centerAlign = { textAlign: 'center' }
  const leftAlign   = { textAlign: 'left' }

  const getInfo = (event) => {
    getSquad(event);
    getEvent(event);
  }
  
  const getSquad = (event) => {
    const team = event.target.value.replace(/[^a-zA-Z_0-9-]/g,"").replace(" ","");
    fetch(`./squads/${team}.json`)
    .then(response => response.json())
    .then(resData => setPlayers(resData.squad))
  };
  const getEvent = (event) => {
    const team = event.target.value.replace(/[^a-zA-Z_0-9-]/g,"").replace(" ","");
    setTeamName(event.target.value);
    setTeamLogo(team);
    setTeamBackground(team);
  } 

  //Calucate Age
  const ageCalculator = (params) => {
    var today = new Date();
    var birthDate = new Date(params.data.date_of_birth.replace(/(\d{2})[-/](\d{2})[-/](\d+)/, "$2/$1/$3"));
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return params.data.date_of_birth + " (" + age + ")";
  }
  //Sort Age
  const monthToComparableNumber = (date) => { 
    var dayNumber = date.substring(0, 2);
    var monthNumber = date.substring(3, 5);
    var yearNumber = date.substring(6, 10);
    var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
    return result;
  }
  const ageComparator = (date1, date2) => {
    var date1Number = monthToComparableNumber(date1);
    var date2Number = monthToComparableNumber(date2);
    if (date1Number === null && date2Number === null) {
      return 0;
    }
    if (date1Number === null) {
      return -1;
    }
    if (date2Number === null) {
      return 1;
    }
    return date1Number - date2Number;
  }

  //Render country flag in nationality
  const countryCellRenderer = (params) => {
    var flagImage = '<span class="flag-icon flag-icon-' + params.data.country_code + '"></span>';
    return flagImage + '&nbsp;&nbsp;&nbsp;' + params.data.nationality;
  }
  //Filter nationality
  var nationalityFilter = (params) => {
    return params.data.nationality;
  };

  //Render name in order to have bold (captain)
  var nameRenderer = (params) => {
    return params.data.player;
  }

  return ( 
    <div className="App">
      {/* Navigation bar */}
      <Navbar style={navbar} variant="dark" fixed="top"> 
        <Container>
          <Navbar.Brand className="specialFont" style={{ fontSize:'25px' }}>CHAMPIONS LEAGUE 2021/22</Navbar.Brand>

          <MyButton click={getInfo} />

        </Container>
      </Navbar>

      {/* Main body */}
      <Container style={{maxWidth: '70%'}}>

        {/* Jumbotron */}
        <MyJumbotron 
          team={teamName} 
          logo={`./images/logos/${teamLogo}.jpg`} 
          background={`url(./images/backgrounds/${teamBackground}.jpg)`} 
        />

        {/* Main table */}
        <div className="ag-theme-alpine" style={{ width: "100%", height: 1160, margin: 'auto'}}>
          <AgGridReact 
            rowData={players} 
            animateRows={true}
          >
              <AgGridColumn headerName="No."                                  filter={true} resizable={true}  cellStyle={centerAlign} field="number"                width={110}></AgGridColumn>
              <AgGridColumn headerName="Player"               sortable={true} filter={true} resizable={true}  cellStyle={leftAlign}   field="player"                width={290}
                  cellRenderer={nameRenderer}></AgGridColumn>
              <AgGridColumn headerName="Position"             sortable={true} filter={true} resizable={true}  cellStyle={centerAlign} field="position"              width={140}></AgGridColumn>
              <AgGridColumn headerName="Date of birth (Age)"  sortable={true} filter={true} resizable={true}  cellStyle={centerAlign} field="date_of_birth"         width={230}
                  valueGetter={ageCalculator}   comparator={ageComparator}></AgGridColumn>
              <AgGridColumn headerName="Height"               sortable={true} filter={true} resizable={true}  cellStyle={centerAlign} field="height"                width={160}></AgGridColumn>
              <AgGridColumn headerName="Foot"                 sortable={true} filter={true} resizable={true}  cellStyle={centerAlign} field="foot"                  width={140}></AgGridColumn>
              <AgGridColumn headerName="Nationality"                      filter={true} resizable={true}  cellStyle={leftAlign}   field="country_code&nationality"  width={230} 
                  cellRenderer={countryCellRenderer} valueGetter={nationalityFilter}></AgGridColumn>
          </AgGridReact>
        </div>
        
      </Container>

    </div>
  );
}

export default App;
