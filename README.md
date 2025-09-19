# Philippines COVID-19 Tracker

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://phcovid19-tracker.netlify.app)

A responsive, data-driven dashboard that provides a summary of COVID-19 statistics for the Philippines, built with React and Vite. This project showcases the ability to fetch and visualize data from multiple external APIs and present it in a clean, user-friendly interface.

![COVID-19 Tracker Screenshot](https://i.postimg.cc/4yxy81SC/image.png)

## Features

* **Live Statistical Data:** Displays up-to-date totals for cases, recoveries, deaths, and active cases from a reliable API.
* **Historical Data Visualization:** Features a dynamic line chart that visualizes the trend of total cases using historical data.
* **Case Distribution:** A pie chart provides a clear breakdown of the current distribution of active cases, recoveries, and deaths.
* **Live News Feed:** An integrated "News" tab that fetches and displays the latest health-related news from major Philippine news outlets via public RSS feeds.
* **Multi-View Interface:** A clean, tabbed navigation allows users to switch between the main "Overview" dashboard, the "News" feed, and a detailed "About" page.
* **Fully Responsive:** The layout is designed to be fully responsive, providing a seamless experience on desktops, tablets, and mobile devices.

## Technology Stack

* **Frontend:** [ReactJS](https://react.dev/) (with Hooks)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Charting:** [Chart.js](https://www.chartjs.org/)
* **Styling:** [CSS Modules](https://github.com/css-modules/css-modules)
* **Version Control:** [Git](https://git-scm.com/) & [GitHub](https://github.com/)

## Data Sources

This application utilizes the following free and public APIs:
* **disease.sh API:** Provides global and historical COVID-19 statistics.
* **rss2json.com API:** Used to convert public news RSS feeds from Philippine news outlets into a usable JSON format.

*Disclaimer: The historical data from the API may not be up-to-date. The primary purpose of this project is to showcase technical skills rather than to provide real-time epidemiological analysis.*

## Getting Started

To run this project locally:

**Prerequisites**
* Node.js (v18 or higher recommended)
* npm (comes with Node.js)

1.  **Clone the repository**
    ```bash
    git clone Meiko-mlgr/philippine-covid19-tracker
    ```
2.  **Navigate to the project directory**
    ```bash
    cd philippine-covid19-tracker
    ```
3.  **Install NPM packages**
    ```bash
    npm install
    ```
4.  **Run the development server**
    ```bash
    npm run dev
    ```

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mikko_Melgar-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mikko-melgar-447069233)
[![Email](https://img.shields.io/badge/Email-Contact%20Me-red?style=for-the-badge&logo=gmail)](mailto:springleaked@gmail.com)
