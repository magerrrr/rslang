import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Main } from './components/Main/Main';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Statistics } from './components/Statistics';
import { Profile } from './components/Profile';
import { EBook } from './components/EBook/EBook';
import { Dictionary } from './components/Dictionary';
import { Menu } from './components/Menu/Menu';
import { SpeakIt } from './components/SpeakIt';
import { ScrollToTop } from './ScrollToTop';
import { Sprint } from './components/Sprint';
import { AudioChallenge } from './components/AudioChallenge';
import { Savanna } from './components/Savanna';
import { ROUTES } from './shared/constants';

import './App.css';
import theme from './theme';

const { MAIN, PROFILE, TEXTBOOK, WORDBOOK, STATS, SIGN_IN, SIGN_UP, GAMES } = ROUTES;

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MuiThemeProvider theme={theme}>
        <Menu />
        <Switch>
          <PrivateRoute path={PROFILE.route} component={Profile} />
          <PrivateRoute path={TEXTBOOK.route} component={EBook} />
          <PrivateRoute path={WORDBOOK.route} component={Dictionary} />
          <Route exact path={MAIN.route} component={Main} />
          <Route path={STATS.route} component={Statistics} />
          <Route path={SIGN_IN.route} component={SignIn} />
          <Route path={SIGN_UP.route} component={SignUp} />
          <Route path={GAMES.subroutes.SPEAK_IT.route} component={SpeakIt} />
          <Route path={GAMES.subroutes.SPRINT.route} component={Sprint} />
          <Route path={GAMES.subroutes.AUDIO_CHALLENGE.route} component={AudioChallenge} />
          <Route path={GAMES.subroutes.SAVANNAH.route} component={Savanna} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
