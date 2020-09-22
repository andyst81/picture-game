import React from 'react';
import './App.css';
import Icons from './Icons';


function App() {
  return (
    <div className="App container">
      <header className="App-header">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
      <br />
      <h1 style={{textAlign:"center"}}> Random Icon Game </h1>
        <Icons />
      </header>
    </div>
  );
}

export default App;
