import React, { Component } from 'react';
import Notifications from './Notifications';
import InitiativesList from '../initiatives/InitiativesList';
import { connect } from 'react-redux';
class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { initiatives } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">Map</div>
          <div className="col s12 m5 offset-m1">
            <InitiativesList initiatives={initiatives} />
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    initiatives: state.initiative.initiatives
  };
};

export default connect(mapStateToProps)(Dashboard);
