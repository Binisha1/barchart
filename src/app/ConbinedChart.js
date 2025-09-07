"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController
);


const CombinedChart = ({ data }) => {
  const labels = data.map(item => item.Date.split(" ")[0]); // X-axis: date

  const datasets = [
    {
      type: "bar",
      label: "Total kWhs Used",
      data: data.map(item => item["Total kWhs Used"]),
      backgroundColor: "rgba(0,255,0,1)",
      yAxisID: "y1",
    },
    {
      type: "line",
      label: "Avg Daily Temperature",
      data: data.map(item => item["Avg Daily Temperature"]),
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      yAxisID: "y2",
    },
  ];

  const chartData = { labels, datasets };

  const options = {
    responsive: true,
    interaction: { mode: "index", intersect: false },
    stacked: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Energy Usage vs Temperature" },
    },
    scales: {
      y1: {
        type: "linear",
        display: true,
        position: "left",
        title: { display: true, text: "Total kWhs Used" },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        title: { display: true, text: "Avg Daily Temperature (°C)" },
        grid: { drawOnChartArea: false },
      },
    },
  };

  return <Chart type="bar" data={chartData} options={options} />;
};

export default CombinedChart;
