import React from 'react';
import { Dashboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';
import { Route, Switch } from 'react-router-dom';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repo} />
    </Switch>
  );
};
