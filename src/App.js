import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Menu from './Menu';
import MapSimple from './MapSimple';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/map-simple">
            <MapSimple/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
