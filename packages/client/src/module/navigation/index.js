import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../home';
import Dashboard from '../dashboard';

import { ROUTER_KEYS } from '../common/constants/app-keys.const';
import { Footer, Header } from '../common/component';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTER_KEYS.HOME}>
        <>
          <Header />
          <Route exact path={ROUTER_KEYS.HOME} component={Home} />
          <Footer />
        </>
      </Route>
      <Route exact path={ROUTER_KEYS.DASHBOARD} component={Dashboard} />
    </Switch>
  </Router>
);
