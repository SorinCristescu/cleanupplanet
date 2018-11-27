import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { getLocations } from '../../store/actions/dataActions';

import InitiativesList from '../initiatives/InitiativesList';
import MapBox from './mapbox/MapBox';
import './DasboardPage.css';

class DashboardPage extends Component {
  componentWillMount() {
    this.props.getLocations();
    console.log(this.props);
  }

  render() {
    const { data, auth, initiatives } = this.props;
    console.log(this.props);
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col dashboard-map">
            <MapBox data={data} />
          </div>
          <div className="col dashboard-initiatives">
            <InitiativesList initiatives={initiatives} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    initiatives: state.firestore.ordered.initiatives,
    auth: state.firebase.auth,
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLocations: () => dispatch(getLocations())
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: 'initiatives' }])
)(DashboardPage);
