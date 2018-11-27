import React, { Component } from 'react';
import { createInitiative } from '../../../store/actions/initiativeActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateInitiative extends Component {
  state = {
    name_of_initiative: '',
    date: '',
    start_time: '',
    end_time: '',
    description: '',
    name_of_organization: '',
    person_of_contact: '',
    phone: '',
    email: '',
    website: '',
    location_id: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.createInitiative(this.state);
    this.props.history.push('/dashboardpage');
  };
  render() {
    const { auth, data } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Initiative</h5>
          <div className="input-field">
            <label htmlFor="title">Name of Initiative</label>
            <input
              type="text"
              id="name_of_initiative"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="start-date">Date</label>
            <input
              type="text"
              className="datepicker"
              id="sdate"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="start-date">Start Time</label>
            <input
              type="text"
              className="timepicker"
              id="start_time"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="end-date">End Time</label>
            <input
              type="text"
              className="timepicker"
              id="end_time"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea
              className="materialize-textarea"
              id="description"
              onChange={this.handleChange}
            />
            <div className="input-field">
              <label htmlFor="organizer">Name of Organizer</label>
              <input
                type="text"
                id="name_of_organization"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="person">Person of Contact</label>
              <input
                type="text"
                id="person_of_contact"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="website">Location</label>
              <input type="text" id="website" onChange={this.handleChange} />
            </div>
          </div>
          <button className="btn waves-effect waves-light pink lighten-1 z-depth-0">
            <i className="material-icons right">send</i>
            Create
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createInitiative: initiative => dispatch(createInitiative(initiative))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateInitiative);
