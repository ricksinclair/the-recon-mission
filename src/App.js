import React from "react";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home.tsx";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container text-center">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
