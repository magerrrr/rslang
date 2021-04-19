import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#2A444E',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f1e8fd',
    },
    action: {
      disabledBackground: '#9a8fb83b',
      disabled: 'black',
      hover: '#f1e8fd',
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

export default theme;
