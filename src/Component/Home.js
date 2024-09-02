import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-section">
      <div className="main-content">
        <div className="greeting">
          <h1>Hello, Druphat</h1>
          <p>Thursday, February 15</p>
        </div>
        <div className="button-section">
          <button className="button">
            <span className="button-icon">🌐</span>
            For you
          </button>
          <button className="button">
            <span className="button-icon">📺</span>
            Screener
          </button>
          <button className="button">
            <span className="button-icon">🔍</span>
          </button>
        </div>
        <div className="iframe-section">
          <iframe
            title="Assignment"
            width="1300"
            height="900.5"
            src="https://app.powerbi.com/view?r=eyJrIjoiYjgwY2U5NjktYmFlNS00YzE5LTg3OGItMjM4YjI0ODU0NDkzIiwidCI6ImNlMjVmZjc0LWRhMDktNGRjOC1hNWZkLTVhOTI3MzkzNWRmNCIsImMiOjEwfQ%3D%3D"
            frameBorder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
