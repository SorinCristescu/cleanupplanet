import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const InitiativeDetails = props => {
  const { initiative, auth, data } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (initiative) {
    return (
      <div className="container">
        <div className="col s12 m7">
          <h2 className="header">{initiative.name_of_initiative}</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="" />
            </div>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
            <div className="card-stacked">
              <div className="card-content">
                <p>{initiative.description}</p>
                <p>County Region: ...</p>
                <p>Address: ...</p>
                <h4>Cleanup Date: {initiative.sdate}</h4>
                <h5>Start Time: {initiative.start_time}</h5>
                <h5>End Time: {initiative.end_time}</h5>
                <h5>Organizer Name: {initiative.name_of_organization}</h5>
                <p>How to register: ...</p>
                <p>Person of contact: {initiative.person_of_contact}</p>
                <p>Phone: {initiative.phone}</p>
                <p>Email: {initiative.email}</p>
                <p>Website: {initiative.website}</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading initiative...</p>
      </div>
    );
  }
  const id = props.match.params.id;
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const initiatives = state.firestore.data.initiatives;
  const initiative = initiatives ? initiatives[id] : null;
  return {
    initiative: initiative,
    auth: state.firebase.auth,
    data: state.data
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'initiatives' }])
)(InitiativeDetails);
