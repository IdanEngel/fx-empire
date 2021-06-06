/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

function FiveMin() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=5&Precision=Minutes&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`
      )
      .then((res) => setstate(res.data));
  }, []);

  return (
    <div className="mainChart">
      <ResponsiveContainer width="95%" height={400}>
        <AreaChart data={state}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area dataKey="Close" stroke="#2451B7" fill="url(#color)" />
          <XAxis dataKey="StartTime" axisLine="false" tickLine="false" />
          <YAxis
            datakey="Close"
            tickCount="6"
            domain={[
              (dataMin) => Math.floor(dataMin),
              (dataMax) => Math.ceil(dataMax),
            ]}
          />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid opacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
function CustomTooltip({ active, payload, label }) {
  if (active && payload) {
    return (
        <div className="tooltip">
        <h4>Date/Time: {label}</h4>
        <p>Close: {payload[0].value.toFixed(2)} $</p>
      </div>
    );
  } else {
    return null;
  }
}

export default FiveMin;
