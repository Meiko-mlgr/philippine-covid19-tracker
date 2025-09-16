import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ title, value, todayValue }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.value}>{(value || 0).toLocaleString()}</p>
      {todayValue ? (
        <p className={styles.todayValue}>+{todayValue.toLocaleString()} today</p>
      ) : (
        <p className={styles.todayValue}>&nbsp;</p> 
      )}
    </div>
  );
};

export default StatCard;