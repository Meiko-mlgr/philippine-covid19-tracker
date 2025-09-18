import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Charts from './components/Charts';
import Footer from './components/Footer';
import News from './components/News';
import About from './components/About';

// API 
const API_URL = 'https://disease.sh/v3/covid-19/countries/PH';
const API_HISTORICAL_URL = 'https://disease.sh/v3/covid-19/historical/PH?lastdays=365';

function App() {
  const [data, setData] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeView, setActiveView] = useState('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);


        const RSS_FEEDS = [
          'https://www.manilatimes.net/news/feed',
          'https://www.sunstar.com.ph/api/v1/collections/home.rss'
        ];

        const newsPromises = RSS_FEEDS.map(feedUrl =>
          fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
        );

        const [statsResponse, historicalResponse, ...newsResponses] = await Promise.all([
          fetch(API_URL),
          fetch(API_HISTORICAL_URL),
          ...newsPromises
        ]);
        
        const statsData = await statsResponse.json();
        const historicalData = await historicalResponse.json();
        
        setData({
          ...statsData,
          timeline: historicalData.timeline,
        });

        let allArticles = [];
        for (const response of newsResponses) {
          if (response.ok) {
            const newsData = await response.json();
            if (newsData.status === 'ok') {
              allArticles = [...allArticles, ...newsData.items];
            }
          }
        }

        const sortedArticles = allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        
        setNews(sortedArticles);

      } catch (err) {
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

  const renderActiveView = () => {
    switch (activeView) {
      case 'news':
        return <News articles={news} />;
      case 'about':
        return <About />;
      case 'overview':
      default:
        return (
          <>
            <Dashboard stats={data} />
            <Charts stats={data} />
          </>
        );
    }
  };

  return (
    <div className={styles.appContainer}>
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className={styles.mainContent}>
        {/* The title section will only show on the main dashboard */}
        {activeView === 'overview' && (
          <div className={styles.titleSection}>
            <h1 className={styles.title}>Philippines COVID-19 Tracker</h1>
            <p className={styles.subtitle}>Last updated: {data.updated ? new Date(data.updated).toLocaleString() : 'N/A'}</p>
          </div>
        )}
        {renderActiveView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;