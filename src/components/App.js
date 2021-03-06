import Header from "./lib/Header";
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Login from "./Account/Login";
import Data from "./Account/Data";
import Logout from "./Account/Logout";
import Confirm from "./Account/Confirm";
import Register from "./Account/Register";
import Settings from "./Account/Settings";
import Home from "./Home";
import About from "./Account/About";

@inject("authStore", "commonStore")
@withRouter
@observer
export default class App extends React.Component {
  componentWillMount() {
    this.props.authStore.verifySession();
  }

  render() {
    if (this.props.commonStore.appLoaded) {
      return (
        <div>
          <Header />
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/data" component={Data} />
            <Route path="/about" component={About} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route path="/register/confirm" component={Confirm} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      );
    }
    return null;
  }
}
