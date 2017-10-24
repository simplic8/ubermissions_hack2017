/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import NavBar from './components/NavBar.js';
import Trip from './components/Trip.js';
import Main from './components/Main.js';
import Agency from './components/Agency.js';
import TripDetailZero from './components/TripDetailZero.js';

/* Home component */
const Home = () => (
  <div>
    <Main />
  </div>
)

/* App component */
class App extends React.Component {
  render() {
    return (
      <div>
        { 
          /* <NavBar /> */
        }
        <Route exact path="/" component={Home}/>
        <Route exact path="/trip" component={Trip}/>
        <Route exact path="/trip_detail0" component={TripDetailZero}/>
        <Route exact path="/agency" component={Agency}/>
      </div>
    )
  }
}

export default App;