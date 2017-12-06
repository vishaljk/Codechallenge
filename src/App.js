import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
//import Loginpage from './container/loginpage'
import Measurepage from './container/measurepage'
import SelectDatasetComponent from './component/selectpage'
import EnterDetails from './container/enterDetailsContainer'


class App extends Component {
  render() {
    return (
       <Router>
         <div>
      <Route component={Measurepage} exact path ="/" />
       {/*<Route component={SelectDatasetComponent}  path ="/measuredetails" />*/}
       <Route component={EnterDetails}  path ="/measuredetails" />
        </div>
        </Router>
    );
  }
}

export default App;
