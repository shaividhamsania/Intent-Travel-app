import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function VisualChart({ contributions }) {
  // Calculate totals for the chart labels and data
  const totals = contributions.reduce((acc, curr) => {
    acc[curr.destination] = (acc[curr.destination] || 0) + curr.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(totals),
    datasets: [
      {
        label: 'Total Intent ($)',
        data: Object.values(totals),
        backgroundColor: 'rgba(255, 42, 156, 0.7)',
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return (
    <div className="h-64">
      {contributions.length > 0 ? (
        <Bar data={data} options={options} />
      ) : (
        <div className="h-full flex items-center justify-center text-gray-400 italic">
          Chart will appear once data is entered...
        </div>
      )}
    </div>
  );
}