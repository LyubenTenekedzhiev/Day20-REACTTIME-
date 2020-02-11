import React from 'react';
import Forecast from './forecast/forecast.jsx'
import './App.css'

function App() {
  return (
  <div className='container'>
    <div className='weekForecast'>
    <h1 className='h1'>Weekly Weather Forecast</h1>
        <Forecast />
    </div>
  </div>
  );
}

export default App;
