import React from 'react';
import moment from 'moment';

const InitiativeSummary = ({ initiative }) => {
  return (
    <div>
      <div className="card z-depth-2 initiative-summary blue accent-2">
        <div className="card-content white-text text-darken-3">
          <span className="card-title white-text text-darken-2">
            {initiative.name_of_initiative}
          </span>
          <p>Posted by {initiative.name_of_organization}</p>
          <p className="grey-text">
            <em>SSSS</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InitiativeSummary;
