import React, { Component, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MainApp from "./utils/authentication";
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
const Page404 = React.lazy(() => import("./views/Pages/Page404"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/404"
              name="Page 404"
              render={props => <Page404 {...props} />}
            />
            <Route path="/" component={MainApp} />
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
