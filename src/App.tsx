import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Main } from './components/Main/Main';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { OurTeam } from './components/OurTeam';
import { Profile } from './components/Profile';
import { EBook } from './components/EBook/EBook';
import { Dictionary } from './components/Dictionary';
import { Menu } from './components/Menu/Menu';
import { ROUTES } from './shared/constants';

import './App.css';
import theme from './theme';

const { MAIN, PROFILE, TEAM, SIGN_IN, SIGN_UP, E_BOOK, DICTIONARY } = ROUTES;

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Menu />
        <Switch>
          <PrivateRoute path={PROFILE.route} component={Profile} />
          <PrivateRoute path={E_BOOK.route} component={EBook} />
          <PrivateRoute path={DICTIONARY.route} component={Dictionary} />
          <Route exact path={MAIN.route} component={Main} />
          <Route path={TEAM.route} component={OurTeam} />
          <Route path={SIGN_IN.route} component={SignIn} />
          <Route path={SIGN_UP.route} component={SignUp} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
