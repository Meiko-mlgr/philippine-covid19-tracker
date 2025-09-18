import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Charts from './components/Charts';
import Footer from './components/Footer';

const API_URL = 'https://disease.sh/v3/covid-19/countries/PH';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const API_HISTORICAL_URL = 'https://disease.sh/v3/covid-19/historical/PH?lastdays=365';

        const [todayResponse, historicalResponse] = await Promise.all([
          fetch(API_URL),
          fetch(API_HISTORICAL_URL)
        ]);
        const todayData = await todayResponse.json();
        const historicalData = await historicalResponse.json();

        setData({
          ...todayData,
          timeline: historicalData.timeline,
        });

      } catch (err)
 {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.centered}>Loading data...</div>;
  }

  if (error) {
    return <div className={styles.centered}>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Philippines COVID-19 Tracker</h1>
          <p className={styles.subtitle}>Last updated: {new Date(data.updated).toLocaleString()}</p>
        </div>
        <Dashboard stats={data} />
        <Charts stats={data} />
      </main>
      <Footer />
    </div>
  );
}

export default App;