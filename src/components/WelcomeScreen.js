// WelcomeScreen.js
import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ namaTamu, onOpen }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-bg">
        <div className="welcome-overlay">
          <p className="welcome-subtitle">The Wedding Of</p>
          <h1 className="welcome-nama">FADHIL</h1>
          <h1 className="welcome-nama">&</h1>
          <h1 className="welcome-nama">AMEL</h1>
          <p className="welcome-kepada">Kepada Yth:</p>
          <p className="welcome-tamu">{namaTamu}</p>
          <button className="masuk-button" onClick={onOpen}>
                Masuk ke Undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
