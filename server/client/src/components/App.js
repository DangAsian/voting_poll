import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Landing from "./layouts/Landing";
import Alert from "./layouts/Alert";
import Register from "./auth/Register";
import Login from "./auth/Login";

//Redux
import { Provider } from "react-redux";
import store from "../store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />

        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
