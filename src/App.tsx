import React, { useState } from 'react';
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
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
  }),
);

const App = () => {
  const classes = useStyles();
  const [shown, setShown] = useState(false);

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
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
                RS Lang Learning
              </Typography>
            </RouterLink>
          </Toolbar>
        </AppBar>
        <Drawer open={shown} onClose={() => setShown(false)}>
          <div className={classes.list}>
            <List>
              <ListItem button onClick={() => {}}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <Link
                  component={RouterLink}
                  to="/"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  Home
                </Link>
              </ListItem>

              <ListItem button onClick={() => {}}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <Link
                  component={RouterLink}
                  to="/our-team"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  Our Team
                </Link>
              </ListItem>

              <ListItem button onClick={() => {}}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <Link
                  component={RouterLink}
                  to="/login"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  Login
                </Link>
              </ListItem>

              <Divider />

              <ListItem button onClick={() => {}}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <Link
                  component={RouterLink}
                  to="/profile"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  Profile
                </Link>
              </ListItem>
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
    </Router>
  );
};

export default App;
