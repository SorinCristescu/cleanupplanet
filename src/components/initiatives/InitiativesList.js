import React from 'react';
import InitiativeSummary from './InitiativeSummary';

const InitiativesList = ({ initiatives }) => {
  return (
    <div className="initiatives-list section">
      {initiatives &&
        initiatives.map(initiative => {
          return (
            <InitiativeSummary initiative={initiative} key={initiative.id} />
          );
        })}
    </div>
  );
};

export default InitiativesList;
