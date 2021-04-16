import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Container } from 'react-bootstrap';
import { Footer } from './Footer/Footer';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  customTabRoot: {
    color: '#7e5fd4',
  },
  customTabIndicator: {
    backgroundColor: '#c1b3f1',
  },
});

export const Dictionary = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Container className="mt-5">
        <TabContext value={value}>
          <Paper square className={classes.root}>
            <TabList
              onChange={handleChange}
              aria-label="simple tabs example"
              classes={{
                root: classes.customTabRoot,
                indicator: classes.customTabIndicator,
              }}
              centered
            >
              <Tab icon={<HowToRegIcon />} label="Изученные" value="1" />
              <Tab icon={<NewReleasesIcon />} label="Сложные" value="2" />
              <Tab icon={<DeleteForeverIcon />} label="Удаленные" value="3" />
            </TabList>
          </Paper>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Container>
      <Footer />
    </>
  );
};
