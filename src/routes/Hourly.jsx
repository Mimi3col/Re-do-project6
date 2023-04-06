import Layout from "./Layout"; 
import App from "../App";
import { useState } from "react";
import HourlyWeather from '../components/HourlyWeather'

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const Hourly = (zipCodeinput, date) => {
  const [list, setList] = useState(null);
  const [zipCode, setZipCode] = useState(zipCodeinput);
  const [searchDate, setSearchDate] = useState('');
  const [filterType, setFilterType] = useState(-1);

  console.log(zipCodeinput); 
  console.log(date); 

const callHourlyWeather = async () => {


  const url = `https://api.weatherbit.io/v2.0/history/hourly?postal_code=${zipCode}&units=I&country=US&start_date=${date}&end_date=${date}&key=${API_KEY}`;
  const response = await fetch(url);

  const json = await response.json();
  const dailyWeather = json.data[1].map((element) => {
    return {
      state: json.state_code,
      city: json.city_name,
      datetime: element.datetime,
      temp: element.temp,
      precip: element.precip
    };
  });
  //console.log(dailyWeather);

  const sortByDate = dailyWeather.sort((a, b) => {
    return new Date(a.datetime) - new Date(b.datetime);
  });

  console.log(sortByDate);

  setList(sortByDate); 
  
};

  return (
    <>
      <div className=" App">
        <a className="text-3xl font-bold"> My Weather View</a> <br></br> <br></br>
        <div className=" space-x-2 ">
          
          <br></br>
          <button
            className="font-large px-3 py-2 text-slate-100 rounded-lg bg-slate-500 hover:bg-blue-300 hover:text-slate-900  "
            onClick={callHourlyWeather}>
            {' '}
            Call HourlyWeather Weather
          </button>
          <button
            className="font-large px-3 py-2 text-slate-100 rounded-lg bg-slate-500 hover:bg-blue-300 hover:text-slate-900"
            onClick={() => setFilterType(1)}>
            {' '}
            Filter High
          </button>
          <button
            className="font-large px-3 py-2 text-slate-100 rounded-lg bg-slate-500 hover:bg-blue-300 hover:text-slate-900"
            onClick={() => setFilterType(2)}>
            {' '}
            Filter Low
          </button>
        </div>
        <br></br>
        <HourlyWeather weatherData={list}/>
      </div>
      </>
  );
};

export default Hourly;