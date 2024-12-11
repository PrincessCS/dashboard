import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function BarChart() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    datasets: [
      {
        data: [
          2000, 2500, 2400, 2300, 2400, 2300, 3800, 2300, 2400, 2800, 2300, 2500,
          2300, 2500, 2900, 2300, 2400, 3200, 2300, 2500, 2400, 2300,
        ],
        backgroundColor: "#7F63F4",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          font: {
            size: 14,
          },
        },
        min: 1000,
        max: 10000,
      },
    },
  };

  return (
    <div className="chart-style">
      <Bar data={data} options={options} height={400} />
    </div>
  );
}

export default BarChart;
