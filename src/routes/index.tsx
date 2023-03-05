import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackChunkName: "dashboard" */
      /* webpackPrefetch: true */
      '../pages/Dashboard'
    ),
);
const Repo = React.lazy(
  () =>
    import(
      /* webpackChunkName: "repo" */
      /* webpackPrefetch: true */
      '../pages/Repo'
    ),
);

export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repositories/:repository+" component={Repo} />
      </Switch>
    </React.Suspense>
  );
};
