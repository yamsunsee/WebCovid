import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const DoughnutChart = ({ critical, high, medium, low }) => {
  const data = {
    labels: ["CRITICAL", "HIGH", "MEDIUM", "LOW"],
    datasets: [
      {
        label: "Value",
        data: [critical, high, medium, low],
        // data: ["1", "1", "1", "1"],
        backgroundColor: ["#d942f4", "#e74c3c", "#ffae00", "#ffd940"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <>
      <div>
        <Doughnut data={data} height={300} options={options} />
      </div>
    </>
  );
};

export default DoughnutChart;
