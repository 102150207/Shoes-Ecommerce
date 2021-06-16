import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shoes-dashboard/styles/shards-dashboards.1.1.0.min.css";
//import "shards-dashboards.1.1.0.min.css";
const ADMIN = "ADMIN";
const SUPER_ADMIN = "SUPER_ADMIN"
const Authen = "SUPER_ADMIN"
export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {
          routes.map((route, index) => {
            console.log("route :  "+ JSON.stringify(route))
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  console.log("props :  "+ JSON.stringify(props))
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })
      }
    </div>
  </Router>
);
