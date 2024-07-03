// src/ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
                <div className="circle"/>
            </div>
            <span className="progress-text">{progress}%</span>
        </div>
    );
};

export default ProgressBar;
