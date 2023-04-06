// This will hold all the information for the routing

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Hourly from './routes/Hourly';
import Daily from './routes/Daily';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            index={true}
            element={<App />}
          />
        </Route>
        <Route
          path="/Hourly"
          element={<Layout />}>
            <Route index={true} element={<Hourly/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
