import React, { Component, useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, Legend } from 'recharts';

function DailyChartPreicp({ weatherData }) {
  const chartData = weatherData.map((element) => {
    return {
      date: element.datetime,
      precip: element.precip,
      temp: element.temp
    };
  });

  return (
    <LineChart
      width={730}
      height={250}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date"></XAxis>
      <YAxis>
        <Label
          value="Temperature and Precipitation"
          angle={270}
          position="left"
          style={{ textAnchor: 'middle' }}
        />
      </YAxis>
      <Legend />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#2E8B57"
      />
      <Line
        type="monotone"
        dataKey="precip"
        stroke="#6495ED"
      />
    </LineChart>
  );
}

export default DailyChartPreicp;
