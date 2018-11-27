import React from 'react';
import InitiativeSummary from '../initiatives/initiativeDetails/InitiativeSummary';
import { Link } from 'react-router-dom';

const InitiativesList = ({ initiatives }) => {
  return (
    <div className="">
      <div className="initiatives-list section">
        {initiatives &&
          initiatives.map(initiative => {
            return (
              <Link to={'/initiative/' + initiative.id} key={initiative.id}>
                <InitiativeSummary initiative={initiative} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default InitiativesList;
