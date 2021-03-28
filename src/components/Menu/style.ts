import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

export default useStyles;
