import React, { Component } from 'react';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardList from "./CardList/CardList";
import CardDetails from "./CardDetails/CardDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div data-test-id="app" className="app">
          <div className="app_container">
            <Switch>
              <Route exact path="/" component={CardList}/>
              <Route path="/cards/:id" component={CardDetails}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
