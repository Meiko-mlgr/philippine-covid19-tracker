import React from 'react';
import styles from './Dashboard.module.css';
import StatCard from './StatCard';

const Dashboard = ({ stats }) => {
  return (
    <div className={styles.dashboardGrid}>
      <StatCard title="TOTAL CASES" value={stats.cases} todayValue={stats.todayCases} />
      <StatCard title="RECOVERED" value={stats.recovered} todayValue={stats.todayRecovered} />
      <StatCard title="DEATHS" value={stats.deaths} todayValue={stats.todayDeaths} />
      <StatCard title="ACTIVE CASES" value={stats.active} />
    </div>
  );
};

export default Dashboard;