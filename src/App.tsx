import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Main } from './components/Main';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { OurTeam } from './components/OurTeam';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu/Menu';
import { ROUTES } from './shared/constants';
import Sprint from './components/Sprint';

import './App.css';
import theme from './theme';

const { MAIN, PROFILE, TEAM, SIGN_IN, SIGN_UP, GAMES } = ROUTES;

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Menu />
        <Switch>
          <PrivateRoute path={PROFILE.route} component={Profile} />
          <Route exact path={MAIN.route} component={Main} />
          <Route path={TEAM.route} component={OurTeam} />
          <Route path={SIGN_IN.route} component={SignIn} />
          <Route path={SIGN_UP.route} component={SignUp} />
          <Route path={GAMES.subroutes.SPRINT.route} component={Sprint} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
