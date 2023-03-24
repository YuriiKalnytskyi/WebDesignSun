import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import i18next from 'i18next';


export const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path={'/'}>
        {
          i18next.t('common.something_went_wrong')
        }
      </Route>
    </Switch>
  </Router>
);
