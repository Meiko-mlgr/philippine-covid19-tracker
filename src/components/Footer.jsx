import React from 'react';
import styles from './Footer.module.css';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,1,1-48-48A48.05,48.05,0,0,1,176,128Z"></path></svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84a12,12,0,1,1-12-12A12,12,0,0,1,100,84Z"></path></svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Developed by Mikko Melgar</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/Meiko-mlgr/philippine-covid19-tracker" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/mikko-melgar-447069233" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;