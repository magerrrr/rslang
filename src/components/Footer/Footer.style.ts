import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: '#C1B3F1',
    marginTop: theme.spacing(8),
    padding: theme.spacing(4, 0),
  },
  teamContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& a': {
      margin: theme.spacing(2, 1, 0, 1),
    },
  },
  team: {
    display: 'flex',
  },
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  circle: {
    color: '#fff',
    backgroundColor: '#FF7C72',
    textTransform: 'uppercase',
    fontFamily: 'inherit',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(2, 1, 2, 1),
      },
    }
  },
  footerText: {
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: 20,
    fontWeight: 600,
  },
  copyright: {
    marginTop: '24px',
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      order: 2
    }
  }
}));
