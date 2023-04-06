import { useState } from 'react';
import DailyChartTemp from './DailyChartTemp';
import Daily from '../routes/Daily';
import DailyChartPreicp from './DailyChartPrecip';
import { Route } from 'react-router-dom';

function DailyWeather({ weatherData }) {
  const [location, setLocation] = useState({
    state: '',
    city: '',
  });

  if (weatherData == null) {
    return <div>Searching For Data...</div>;
  }

  const weatherList = weatherData.map((element) => (
    <div
      key={element.datetime}
      className="weatherItem box-border border-slate-800 border-2  w-40 hover:shadow-yellow-300   ">
      <a
        className="font-large px-1 py-1 text-slate-800 rounded-lg bg-transparent hover:bg-blue-300 hover:text-slate-900 "
        href="/Hourly">
        {element.datetime}
      </a>{' '}
      <a className=" text-red-300">Daily High:</a> {element.temp} 
      <a className=""> rain:{element.precip} in</a> <br></br>
    </div>
  ));

  return (
    <div>
      <div className="Weather_data flex flex-none flex-wrap  gap-2 ">{weatherList}</div>
      <br></br>
      <div>

      </div>
    </div>
  );
}

export default DailyWeather;
