import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Create from '../pages/Create';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/create" component={Create} isPrivate />
  </Switch>
);

export default Routes;
