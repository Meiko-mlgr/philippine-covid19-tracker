import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import styles from './Charts.module.css';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Charts = ({ stats }) => {

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // --- NEW: Specific options for the Pie Chart ---
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom', 
      },
    },
  };

  const lineChartData = {
    labels: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Cases',
        data: [15000, 22000, 18000, 25000, 23000, 28000, 31000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const pieChartData = {
    labels: ['Active', 'Recovered', 'Deaths'],
    datasets: [
      {
        data: [stats.active, stats.recovered, stats.deaths],
        backgroundColor: ['#f59e0b', '#10b981', '#ef4444'],
        borderColor: ['#f59e0b', '#10b981', '#ef4444'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.chartsContainer}>
      <div className={styles.chartWrapper}>
        <h3 className={styles.chartTitle}>Case Trend (Dummy Data)</h3>
        {/* Use the general options for the line chart */}
        <Line options={lineChartOptions} data={lineChartData} />
      </div>
      <div className={styles.chartWrapper}>
        <h3 className={styles.chartTitle}>Current Case Distribution</h3>
        {/* Use the NEW specific options for the pie chart */}
        <Pie options={pieChartOptions} data={pieChartData} />
      </div>
    </div>
  );
};

export default Charts;