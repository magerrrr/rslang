import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PetsIcon from '@material-ui/icons/Pets';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

import { ROUTES } from '../../shared/constants';

import useStyles from './style';
import useCheckAuthenticate from '../../hooks/useCheckAuthenticate';

type Props = {};

const { MAIN, PROFILE, TEAM, SIGN_IN, SIGN_UP } = ROUTES;

export const Menu = (props: Props) => {
  const classes = useStyles();
  const [shown, setShown] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const isAuthenticated = useCheckAuthenticate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
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
          <RouterLink to={MAIN.route} style={{ textDecoration: 'none', color: 'white' }}>
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
              to={MAIN.route}
              color="primary"
              variant="body1"
              style={{ textDecoration: 'none' }}
            >
              <ListItem button onClick={() => {}}>
                <ListItemIcon>
                  <HomeIcon color="primary" />
                </ListItemIcon>
                {MAIN.name}
              </ListItem>
            </Link>

            <Link
              component={RouterLink}
              to={TEAM.route}
              color="primary"
              variant="body1"
              style={{ textDecoration: 'none' }}
            >
              <ListItem button onClick={() => {}}>
                <ListItemIcon>
                  <GroupIcon color="primary" />
                </ListItemIcon>
                {TEAM.name}
              </ListItem>
            </Link>

            {!isAuthenticated && (
              <Link
                component={RouterLink}
                to={SIGN_UP.route}
                color="primary"
                variant="body1"
                style={{ textDecoration: 'none' }}
              >
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <MeetingRoomIcon color="primary" />
                  </ListItemIcon>
                  {SIGN_UP.name}
                </ListItem>
              </Link>
            )}

            {!isAuthenticated && (
              <Link
                component={RouterLink}
                to={SIGN_IN.route}
                color="primary"
                variant="body1"
                style={{ textDecoration: 'none' }}
              >
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <ExitToAppIcon color="primary" />
                  </ListItemIcon>
                  {SIGN_IN.name}
                </ListItem>
              </Link>
            )}

            <Divider />

            {isAuthenticated && (
              <Link
                component={RouterLink}
                to={PROFILE.route}
                color="primary"
                variant="body1"
                style={{ textDecoration: 'none' }}
              >
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <PersonIcon color="primary" />
                  </ListItemIcon>
                  {PROFILE.name}
                </ListItem>
              </Link>
            )}
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
                      <PetsIcon style={{ fill: '#dc622f' }} />
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
                      <RecordVoiceOverIcon style={{ fill: '#A632C6' }} />
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
                      <PhoneIcon style={{ fill: '#1BD9DE' }} />
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
                      <DirectionsRunIcon style={{ fill: '#32A2E5' }} />
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
  );
};
