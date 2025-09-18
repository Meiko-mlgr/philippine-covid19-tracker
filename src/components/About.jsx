import React from 'react';
import styles from './About.module.css';

const ReactLogo = () => (
  <svg className={styles.techLogo} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" transform="rotate(30)"/><ellipse rx="11" ry="4.2" transform="rotate(90)"/><ellipse rx="11" ry="4.2" transform="rotate(150)"/></g></svg>
);

const ViteLogo = () => (
  <svg className={styles.techLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"/><stop offset="1" stop-color="#bd34fe"/></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"/><stop offset=".083" stop-color="#ffdd35"/><stop offset="1" stop-color="#ffa800"/></linearGradient></defs><path fill="url(#a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"/> <path fill="url(#b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"/></svg>
);

const ChartjsLogo = () => (
    <svg className={styles.techLogo} xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" xml:space="preserve"><path fill="#36A2EB" d="M161.271 96.556c-22.368.439-17.709 14.599-33.473 18.18-16.014 3.638-18.542-39.111-34.552-39.111-16.012 0-19.559 41.526-39.608 70.034l-.572.807 42.985 24.813 65.22-37.651z"/><path fill="#FFCE56" d="M161.271 95.267c-7.488-9.61-12.567-20.658-23.494-20.658-19.337 0-14.249 31.545-35.62 31.545-21.373 0-23.62-33.931-47.832-2.035-7.715 10.163-13.925 21.495-18.803 32.218l60.529 34.943 65.22-37.651z"/><path opacity=".8" fill="#FE6184" d="M30.829 108.334c7.338-20.321 10.505-36.779 24.514-36.779 21.371 0 26.458 60.039 44.779 53.931 18.318-6.105 16.282-38.669 44.779-38.669 5.424 0 10.962 3.323 16.371 8.698v38.113l-65.22 37.651-65.222-37.651v-25.294z"/><path fill="#E7E9ED" d="m96 176-69.292-39.999V56L96 16l69.292 40v80zm-61.151-44.699L96 166.602l61.151-35.301V60.7L96 25.399 34.849 60.7z"/></svg>
);

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.title}>About This Project</h2>
      
      <div className={styles.section}>
        <h3 className={styles.subtitle}>Purpose</h3>
        <p>
          This COVID-19 Tracker is a portfolio project designed to demonstrate modern web development skills using React. It serves as a real-world example of how to build a data-driven, single-page application that fetches, processes, and visualizes data from external APIs.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Technology Stack</h3>
        <div className={styles.techSection}>
          <ul className={styles.techList}>
            <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
            <li><strong>Vite:</strong> A next-generation frontend tooling for fast development.</li>
            <li><strong>Chart.js:</strong> A flexible charting library for data visualization.</li>
            <li><strong>CSS Modules:</strong> For locally scoped, component-level styling.</li>
          </ul>
          <div className={styles.logoContainer}>
            <ReactLogo />
            <ViteLogo />
            <ChartjsLogo />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Data Sources</h3>
        <p>
          This application utilizes the following free and public APIs:
        </p>
        <ul className={styles.apiList}>
          <li><strong>disease.sh API:</strong> Provides global and historical COVID-19 statistics.</li>
          <li><strong>rss2json.com API:</strong> Used to convert public news RSS feeds from major Philippine news outlets into a usable JSON format.</li>
        </ul>
        <p className={styles.disclaimer}>
          Please note that while the statistics are from a real API, the historical data may not be up-to-date. The primary purpose of this project is to showcase technical skills rather than to provide real-time epidemiological analysis.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>About the Developer</h3>
        <p>
          I'm currently an aspring Full-Stack Developer, a passionate software developer focused on creating clean, efficient, and user-friendly web applications.
        </p>
      </div>
    </div>
  );
};

export default About;