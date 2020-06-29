import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    fetchDailyData.then((res) => setDailyData(res)).catch(console.log);
  }, []);

  const LineChart = dailyData[0] ? (
    <Line
      data={{
        labels: "",
        datasets: [{}],
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
};

export default Chart;
