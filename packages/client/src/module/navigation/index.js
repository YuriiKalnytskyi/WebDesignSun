import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../home';
import { ROUTER_KEYS } from '../common/constants/app-keys.const';
import { Footer, Header } from '../common/component';

export const MainRouter = () => (
  <Router>
    <Switch>
      <>
        <Header />
        <Route exact path={ROUTER_KEYS.HOME} component={Home} />
        <Footer />
      </>
    </Switch>
  </Router>
);
