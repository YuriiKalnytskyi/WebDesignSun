import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../home';
import Dashboard from '../dashboard';
import Login from '../auth/component/login';
import SingUp from '../auth/component/sing-up';

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
      <Route exact path={ROUTER_KEYS.LOGIN} component={Login} />
      <Route exact path={ROUTER_KEYS.SING_UP} component={SingUp} />
    </Switch>
  </Router>
);
