import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar/Navbar';
import HomePage from './components/homePage/HomePage';
//import SignIn from './components/auth/SignIn';
import DashboardPage from './components/dashboardPage/DashboardPage';
import InitiativeDetails from './components/initiatives/initiativeDetails/InitiativeDetails';
import CreateInitiative from './components/initiatives/createInitiative/CreateInitiative';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/dashboardpage" component={DashboardPage} />
            <Route path="/initiative/:id" component={InitiativeDetails} />
            <Route path="/createinitiative" component={CreateInitiative} />
            <Route path="/initiativedetails" component={InitiativeDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
