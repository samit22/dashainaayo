import React from "react";

import './style.css';
import noDataImage from './no-data.svg';

const NoData = () => {
  return (
      <div className="no-data-container">
      <img src={noDataImage} alt="No Data Available" className="no-data-image" />
      <h1 className="no-data-title">No Data Available</h1>
      <p className="no-data-message">Data for next year is not available yet.</p>
    </div>
  );
};

export default NoData;