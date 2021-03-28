import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { OurTeam } from './components/OurTeam';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu/Menu';

import './App.css';
import theme from './theme';

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Menu />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/profile" component={Profile} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
