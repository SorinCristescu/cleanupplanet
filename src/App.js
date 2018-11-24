import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import InitiativeDetails from './components/initiatives/InitiativeDetails';

firebase.initializeApp({
  apiKey: 'AIzaSyA7Tix3j3ZOOpLXxnvUtalZ17oxRegKJ3s',
  authDomain: 'cleanupplanet-9aadd.firebaseapp.com'
});

class App extends Component {
  state = { isSignedIn: false };

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/initiative/:id" component={InitiativeDetails} />
          </Switch>
          {this.state.isSignedIn ? (
            <span>
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>
                Sign out!
              </button>
              <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
              <img
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
              />
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
