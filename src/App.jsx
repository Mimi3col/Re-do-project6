import { useState } from 'react';
import './App.css';
import DailyWeather from './components/DailyWeather';
import DailyChartTemp from './components/DailyChartTemp';


const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);
  const [highList, setHighList] = useState(null);
  const [lowList, setLowList] = useState(null);
  const [zipCode, setZipCode] = useState('33510');
  const [searchDate, setSearchDate] = useState('');
  const [filterType, setFilterType] = useState(-1);

const callDailyWeather = async () => {


  const url = `https://api.weatherbit.io/v2.0/history/daily?postal_code=${zipCode}&units=I&country=US&start_date=2023-03-01&end_date=2023-03-31&key=${API_KEY}`;
  const response = await fetch(url);

  const json = await response.json();
  const dailyWeather = json.data.map((element) => {
    return {
      state: json.state_code,
      city: json.city_name,
      datetime: element.datetime,
      max_temp: element.max_temp,
      min_temp: element.min_temp,
      temp: element.temp,
      precip: element.precip,
      wind_dir: element.wind_dir,
      wind_spd: element.wind_spd,
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
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="enter a zip code"
            type="text"
            name="search"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
          />{' '}
          <br></br>
          <button
            className="font-large px-3 py-2 text-slate-100 rounded-lg bg-slate-500 hover:bg-blue-300 hover:text-slate-900  "
            onClick={callDailyWeather}>
            {' '}
            Call Daily Weather
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
        <DailyWeather weatherData={list} zipCode={zipCode}/>
      </div>
    </>
  );
}

export default App;
