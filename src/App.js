import React, { useState } from 'react';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);

  const getSquad = (event) => {
    fetch(`squad/${event.target.value}.json`)
    .then(response => response.json())
    .then(resData => setPlayers(resData.squad))
  };

  return ( 
    <div className="App">
      <button onClick={getSquad} value="germany">Germany</button>
      <button onClick={getSquad} value="france">France</button>
      <table>
        <tbody>
          <tr className="table_header">
            <th>Number</th>
            <th>Name</th>
            <th>Position</th>
            <th>Date of birth</th>
            <th>Current Club</th>
          </tr>
          {
            players.map((player, index) =>
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{player.number}</td>
                <td style={{ textAlign: "left" }}>{player.player}</td>
                <td style={{ textAlign: "center" }}>{player.position}</td>
                <td style={{ textAlign: "left" }}>{player.date_of_birth}</td>
                <td style={{ textAlign: "left" }}>{player.current_club}</td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
