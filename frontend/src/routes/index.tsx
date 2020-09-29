import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Registration from '../pages/Registration';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/registration/:id" exact component={Registration} />
    <Route path="/registration" exact component={Registration} />
  </Switch>

)
export default Routes;