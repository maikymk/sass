import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home"
import Examples from "./pages/Examples";

import "./assets/app.css";
import Features from "./pages/Features";

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/examples" component={Examples} />
            <Route path="/features" component={Features} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
