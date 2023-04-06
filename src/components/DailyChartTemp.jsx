import React, { Component, useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, Legend } from 'recharts';

function DailyChartTemp({ weatherData }) {
  const chartData = weatherData.map((element) => {
    return {
      date: element.datetime,
      tempHigh: element.max_temp,
      tempLow: element.min_temp
    };
  });

  return (
    <LineChart
      width={730}
      height={250}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date">
      </XAxis>
      <YAxis>
        <Label
          value="Temperature"
          angle={270}
          position="left"
          style={{ textAnchor: 'middle' }}
        />
      </YAxis>
      <Legend/>
      <Tooltip />
      <Line
        type="monotone"
        dataKey="tempHigh"
        stroke="#FF6347"
      />
      <Line
        type="monotone"
        dataKey="tempLow"
        stroke="#6495ED"
      />
    </LineChart>
  );
}

export default DailyChartTemp;
