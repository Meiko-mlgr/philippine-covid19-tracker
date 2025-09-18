import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import styles from './Charts.module.css';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Charts = ({ stats }) => {
  
  const lineChartData = {
    
    labels: Object.keys(stats.timeline.cases),
    datasets: [
      {
        label: 'Total Cases',
        
        data: Object.values(stats.timeline.cases),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
        borderWidth: 2 
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
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

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div className={styles.chartsContainer}>
      <div className={styles.chartWrapper}>
        {/* Updated title to reflect the data source */}
        <h3 className={styles.chartTitle}>Case Trend (2023 Historical Data)</h3>
        <Line options={lineChartOptions} data={lineChartData} />
      </div>
      <div className={styles.chartWrapper}>
        <h3 className={styles.chartTitle}>Current Case Distribution</h3>
        <Pie options={pieChartOptions} data={pieChartData} />
      </div>
    </div>
  );
};

export default Charts;