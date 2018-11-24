import React from 'react';

const InitiativeSummary = ({ initiative }) => {
  return (
    <div className="card z-depth-0 initiative-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{initiative.title}</span>
        <p>Posted by the Organization Name</p>
        <p className="grey-text">
          <em>Date: ...</em>
        </p>
      </div>
    </div>
  );
};

export default InitiativeSummary;
