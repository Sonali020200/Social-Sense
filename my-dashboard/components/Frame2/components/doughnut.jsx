"use client"
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";


ChartJS.register(ArcElement, Tooltip, Legend);

const generateRandomData = (base, variance) => {
  return Array.from({ length: 4 }, () =>
    Math.floor(base + Math.random() * variance)
  );
};

const DonutChart = () => {
  const [data,setData] = useState({
    labels: [
      "15-25 Years Old",
      "26-35 Years Old",
      "36-45 Years Old",
      ">45 Years Old",
    ],
    datasets: [
      {
        label: "Customer Segmentations",
        data: [84, 16, 30, 10], 
        backgroundColor: [
          "rgba(255, 205, 86, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(211, 211, 211, 1)",
          "rgba(128, 128, 128, 1)", 
        ],
        borderColor: [
          "rgba(255, 205, 86, 1)",
          "rgba(255, 159, 64, 1)",
         "rgba(211, 211, 211, 1)",
         "rgba(128, 128, 128, 1)", 
        ],
        borderWidth: 1,
      },
    ],
  });


  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || "";
            const percentage = (
              (value / data.datasets[0].data.reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full sm:w-4/5 h-100% bg-white rounded-3xl shadow-lg grid px-8 py-2">
      <Doughnut data={data} options={options} />
      
    </div>
  );
};

export default DonutChart;
