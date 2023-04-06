import { useState } from 'react';
import DailyChartTemp from './DailyChartTemp';
import Daily from '../routes/Daily';
import DailyChartPreicp from './DailyChartPrecip';
import { Route } from 'react-router-dom';
import Hourly from '../routes/Hourly';


function DailyWeather({ weatherData }, zipCode) {

  if (weatherData == null) {
    return <div>Searching For Data...</div>;
  }

  const weatherList = weatherData.map((element) => (
    <div
      key={element.datetime}
      className="weatherItem box-border border-slate-800 border-2  w-40 hover:shadow-yellow-300   ">
      <a
        className="font-large px-1 py-1 text-slate-800 rounded-lg bg-transparent hover:bg-blue-300 hover:text-slate-900 " href='/Hourly' onClick={(event)=>{Hourly(zipCode, element.datetime)}} >
        {element.datetime}
      </a>{' '}
      <br></br>
      <a className=" text-red-300">Daily High:</a> {element.max_temp} <br></br>
      <a className=" text-blue-300">Daily Low:</a> {element.min_temp} <br></br>
      <a className=""> rain:{element.precip} in</a> <br></br>
      <a className=""> wind: {(Number(element.wind_spd) * 2.23).toPrecision(2)} mph </a>
    </div>
  ));

Daily({weatherData});

  return (
    <div>
      <div>
        <DailyChartTemp weatherData={weatherData} />
        <DailyChartPreicp weatherData={weatherData} />
      </div>
      <br></br>
      <div className="Weather_data flex flex-none flex-wrap  gap-2 ">{weatherList}</div>
    </div>
  );
}

export default DailyWeather;
