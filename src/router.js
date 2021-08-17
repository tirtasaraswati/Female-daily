import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { PUBLIC_ROUTE } from "./route.constants.js";
import Loader from "../src/components/loader";
import { useSelector } from "react-redux";
import { Spin } from "antd";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.HOME,
    exact: true,
    component: lazy(() => import("../src/containers/Home/index")),
  },
];

export default function Routes() {
  let state = useSelector((state) => state.Home);
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Spin size="large" spinning={state.isLoading}>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Spin>
      </Router>
    </Suspense>
  );
}
