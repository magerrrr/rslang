import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link as RouterLink } from 'react-router-dom';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { OurTeam } from './components/OurTeam';
import { Signup } from './components/Signup';
import { Profile } from './components/Profile';
import {
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Link,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';

import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: '0px 2px 4px -1px rgb(42 68 78 / 20%), 0px 4px 5px 0px rgb(42 68 78 / 14%), 0px 1px 10px 0px rgb(42 68 78 / 12%)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textTransform: 'uppercase',
      fontWeight: 600,
    },
    list: {
      width: 250,
    },
  }),
);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#2A444E',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Philosopher', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'
    ].join(','),
    allVariants: {
      color: '#2A444E',
      fontWeight: 500,
    },
  },
});

const App = () => {
  const classes = useStyles();
  const [shown, setShown] = useState(false);

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static" color="transparent" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => setShown(true)}
              >
                <MenuIcon />
              </IconButton>
              <RouterLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="h6" className={classes.title}>
                  Lang
              </Typography>
              </RouterLink>
            </Toolbar>
          </AppBar>
          <Drawer open={shown} onClose={() => setShown(false)}>
            <div className={classes.list}>
              <List>
                <Link
                  component={RouterLink}
                  to="/"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button onClick={() => { }}>
                    <ListItemIcon>
                      <HomeIcon color="primary"/>
                    </ListItemIcon>
                  Home
                </ListItem>
                </Link>

                <Link
                  component={RouterLink}
                  to="/our-team"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button onClick={() => { }}>
                    <ListItemIcon>
                      <GroupIcon color="primary"/>
                    </ListItemIcon>
                  Our Team
                </ListItem>
                </Link>

                <Link
                  component={RouterLink}
                  to="/login"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button onClick={() => { }}>
                    <ListItemIcon>
                      <ExitToAppIcon color="primary"/>
                    </ListItemIcon>
                  Login
                </ListItem>
                </Link>

                <Divider />

                <Link
                  component={RouterLink}
                  to="/profile"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button onClick={() => { }}>
                    <ListItemIcon>
                      <PersonIcon color="primary"/>
                    </ListItemIcon>
                  Profile
                </ListItem>
                </Link>
              </List>
            </div>
          </Drawer>
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/profile" component={Profile} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
