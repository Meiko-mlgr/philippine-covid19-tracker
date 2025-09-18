import React from 'react';
import styles from './News.module.css';

const News = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p className={styles.noNews}>No recent COVID-19 related news articles found from the source.</p>;
  }

  return (
    <>
      <h2 className={styles.sectionTitle}>Latest Health News in the Philippines</h2>
      <div className={styles.newsGrid}>
        {articles.map((article, index) => (
          <a href={article.link} key={index} target="_blank" rel="noopener noreferrer" className={styles.articleCard}>
            {article.thumbnail && <img src={article.thumbnail} alt={article.title} className={styles.articleImage} />}
            <div className={styles.articleContent}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleSource}>{article.author}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default News;