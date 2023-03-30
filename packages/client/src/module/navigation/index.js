import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../home';
import Dashboard from '../dashboard';
import Login from '../auth/component/login';
import SingUp from '../auth/component/sing-up';
import Post from '../post';

import { ROUTER_KEYS } from '../common/constants';
import { Footer, Header } from '../common/component';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route
        exact
        path={ROUTER_KEYS.HOME}
        component={() => (
          <Layout>
            <Home />
          </Layout>
        )}
      />
      <Route
        exact
        path={ROUTER_KEYS.POST_ID}
        component={() => (
          <Layout>
            <Post />
          </Layout>
        )}
      />

      <Route exact path={ROUTER_KEYS.DASHBOARD} component={Dashboard} />
      <Route exact path={ROUTER_KEYS.LOGIN} component={Login} />
      <Route exact path={ROUTER_KEYS.SING_UP} component={SingUp} />
    </Switch>
  </Router>
);
