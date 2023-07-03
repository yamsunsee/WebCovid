import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// const labels = Utils.months({count: 7});
const data = {
  labels: ["17-05", "18-05", "19-05", "20-05", "21-05", "22-05", "23-05"],
  datasets: [
    {
      label: "Active Case",
      data: [70, 50, 60, 42, 52, 33, 86],
      fill: false,
      borderColor: "rgb(226, 54, 54)",
      tension: 0.1,
    },
    {
      label: "Recovered Case",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(15, 179, 15)",
      tension: 0.1,
    },
    {
      label: " Death Case",
      data: [50, 69, 70, 51, 66, 75, 50],
      fill: false,
      borderColor: "rgb(128, 128, 128)",
      tension: 0.1,
    },
  ],
};
var options = {
  maintainAspectRatio: false,
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  legend: {
    labels: {
      fontSize: 30,
    },
  },
};
const LineChart = ({ data2 }) => {
  return (
    <div>
      <Line data={data} height={400} options={options} />{" "}
    </div>
  );
};

export default LineChart;
