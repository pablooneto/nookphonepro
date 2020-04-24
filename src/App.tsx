import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { MobilePhone } from './Mobile/Mobile';

import HomeApp from './Apps/HomeApp';
import FishApp from './Apps/Fish/FishApp';

export default function App() {
  return (
    <Router basename={process.env.REACT_APP_BASE_URL}>
      <MobilePhone>
        <Switch>
          <Route path="/about">
            
          </Route>
          <Route path="/fish">
            <FishApp />
          </Route>
          <Route path="/">
            <HomeApp />
          </Route>
        </Switch>
      </MobilePhone>
    </Router>
  );
}
