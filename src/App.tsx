import React, { useState } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link as RouterLink } from 'react-router-dom';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { OurTeam } from './components/OurTeam';
import { Signup } from './components/Signup';
import { Profile } from './components/Profile';
import Sprint from './components/Sprint';
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
  ListItemText,
  Collapse,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow:
        '0px 2px 4px -1px rgb(42 68 78 / 20%), 0px 4px 5px 0px rgb(42 68 78 / 14%), 0px 1px 10px 0px rgb(42 68 78 / 12%)',
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
    nested: {
      paddingLeft: theme.spacing(4),
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
      'Philosopher',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif',
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
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
                  <ListItem button onClick={() => {}}>
                    <ListItemIcon>
                      <HomeIcon color="primary" />
                    </ListItemIcon>
                    Домашняя
                  </ListItem>
                </Link>

                <Link
                  component={RouterLink}
                  to="/our-team"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button onClick={() => {}}>
                    <ListItemIcon>
                      <GroupIcon color="primary" />
                    </ListItemIcon>
                    Наша Команда
                  </ListItem>
                </Link>

                <Link
                  component={RouterLink}
                  to="/login"
                  color="primary"
                  variant="body1"
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button onClick={() => {}}>
                    <ListItemIcon>
                      <ExitToAppIcon color="primary" />
                    </ListItemIcon>
                    Войти
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
                  <ListItem button onClick={() => {}}>
                    <ListItemIcon>
                      <PersonIcon color="primary" />
                    </ListItemIcon>
                    Профиль
                  </ListItem>
                </Link>
                <ListItem button onClick={handleClick}>
                  <ListItemIcon>
                    <SportsEsportsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Мини-игры" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      component={RouterLink}
                      to="/savannah"
                      color="primary"
                      variant="body1"
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder style={{ fill: '#dc622f' }} />
                        </ListItemIcon>
                        <ListItemText primary="Саванна" />
                      </ListItem>
                    </Link>
                    <Link
                      component={RouterLink}
                      to="/speakit"
                      color="primary"
                      variant="body1"
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder style={{ fill: '#A632C6' }} />
                        </ListItemIcon>
                        <ListItemText primary="Скажи это" />
                      </ListItem>
                    </Link>
                    <Link
                      component={RouterLink}
                      to="/audiochallendge"
                      color="primary"
                      variant="body1"
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder style={{ fill: '#1BD9DE' }} />
                        </ListItemIcon>

                        <ListItemText primary="Аудиовызов" />
                      </ListItem>
                    </Link>
                    <Link
                      component={RouterLink}
                      to="/sprint"
                      color="primary"
                      variant="body1"
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder style={{ fill: '#32A2E5' }} />
                        </ListItemIcon>
                        <ListItemText primary="Спринт" />
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>
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
          <Route path="/sprint" component={Sprint} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
