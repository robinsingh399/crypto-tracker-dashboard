import React, { useEffect, useState } from "react";
import { Chart, Title } from "@highcharts/react";
import { Line } from "@highcharts/react/series";
import "./style.scss";

export const CryptoChart = ({ id }) => {
  const [chartData, setChartData] = useState(null);

  const updatedChartData = chartData?.prices.map((a) => {
    const timestamp = a[0];
    const date = new Date(timestamp);
    const day = date.getDate();
    return [day, a[1]];
  });

  useEffect(() => {
    const fetchChartData = async function () {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
        );
        const data = await response.json();

        if (data) {
          setChartData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchChartData();
  }, [id]);

  return (
    <Chart>
      <Title>Price Chart for Last 7 days</Title>

      <Line.Series
        options={{
          data: updatedChartData,
          cursor: "pointer",
          name: "Last 7 day price chart",
        }}
      />
    </Chart>
  );
};
