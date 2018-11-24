import React from 'react';

const InitiativeDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Initiative Name: {id}</span>
          <div className="card-action grey lighten-t white-text">
            <p>County Region: ...</p>
            <p>Address: ...</p>
            <p>Cleanup Date: ...</p>
            <p>Start Time: ...</p>
            <p>End Time: ...</p>
            <p>What to bring: ...</p>
            <p>Instructions: ...</p>
          </div>
        </div>
        <div className="card-content">
          <span className="card-title">Organizer Name: ...</span>
          <div className="card-action grey lighten-t white-text">
            <p>How to register: ...</p>
            <p>Person of contact: ...</p>
            <p>Phone: ...</p>
            <p>Email: ...</p>
            <p>Website: ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativeDetails;
