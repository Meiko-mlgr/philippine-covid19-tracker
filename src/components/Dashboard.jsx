import React from 'react';
import styles from './Dashboard.module.css';
import StatCard from './StatCard';

const Dashboard = ({ stats }) => {
  return (
    <div className={styles.dashboardGrid}>
      <StatCard title="TOTAL CASES" value={stats.cases} />
      <StatCard title="RECOVERED" value={stats.recovered} />
      <StatCard title="DEATHS" value={stats.deaths} />
      <StatCard title="ACTIVE CASES" value={stats.active} />
    </div>
  );
};

export default Dashboard;