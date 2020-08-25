import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hompage from './pages/homepage/homepage.component'


function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Hompage />
    </div>
  );
}

export default App;
