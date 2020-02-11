
import React from 'react';
import './style.css';


const Forecast = () => {  
  const forecast = [
    {
      weekday: 'Mon',
      weather: 'cloudy',
      tempDay: 18,
      tempNight: 11,
    },
    {  
      weekday: 'Tue',
      weather: 'partly-cloudy',
      tempDay: 21,
      tempNight: 15,
    },
    {  
      weekday: 'Wed',
      weather: 'rainy',
      tempDay: 8,
      tempNight: 1,
    },
    {  
      weekday: 'Thu',
      weather: 'snowy',
      tempDay: -2,
      tempNight: -7,
    },
    {  
      weekday: 'Fri',
      weather: 'stormy-rain',
      tempDay: 28,
      tempNight: 21,
    },
    {  
      weekday: 'Sat',
      weather: 'stormy',
      tempDay: 35,
      tempNight: 27,
    },
    {  
      weekday: 'Sun',
      weather: 'sunny',
      tempDay: 28,
      tempNight: 22,
    },
  ];
  return (
    <div className='itemsTwo'>
      {forecast.map(day => ( 
       <div className='dayForecast' key={day.weekday}>
         <div className='dayForecast__header'>{day.weekday}</div>
          <div className={`dayForecast__body dayForecast__image weather-${day.weather}`}>
          <div className='dayForecast__image'></div>
          <div className='dayForecast__temps'>
        <span className='tempDay'>{day.tempDay}</span>
        <span className='tempNight'>{day.tempNight}</span>
      </div>
      </div>
    </div>
      ))} 
    </div>
  )
}
export default Forecast;


