import React from 'react';
import './App.css';
import SiteStatus from './Components/SiteStatus';

function App() {
  return (
    <div className="App">
      <h1>Check Site Status</h1>
      <SiteStatus site="https://httpstat.us/200" />
      <SiteStatus site="https://httpstat.us/404" />
      <SiteStatus site="https://httpstat.us/500" />
    </div>
  );
}

export default App;
