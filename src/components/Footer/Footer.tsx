import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import logo from '../../assets/img/logo-rs 2.png';
import inna from '../../assets/img/team/inna.jpg';
import nastya from '../../assets/img/team/photo.jpg';
import sergey from '../../assets/img/team/sergey.jpg';
import kira from '../../assets/img/team/kira.jpg';
import { useStyles } from './Footer.style';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <Link href='https://rs.school/js/' target='_blank' rel='noopener noreferrer'>
            <img src={logo} alt='Rolling Scopes School Logo' height='50' className='header-logo' />
          </Link>
          <Typography component='p' className={`${classes.copyright} ${classes.footerText}`}>
            @2021
          </Typography>
        </div>
        <div className={classes.teamContent}>
          <Typography component='p' className={classes.footerText}>
            Team
          </Typography>
          <div className={classes.team}>
            <Link href='https://github.com/inna-rekesh' target='_blank' rel='noopener noreferrer'>
              <Avatar alt='Inna Rekesh' src={inna} className={classes.small} />
            </Link>
            <Link href='https://github.com/anasidorovich' target='_blank' rel='noopener noreferrer' color='inherit'>
              <Avatar alt='Anastasiya Sidarovich' src={nastya} className={classes.small} />
            </Link>
            <Link href='https://github.com/SergeyNaumenko' target='_blank' rel='noopener noreferrer' variant='body2'>
              <Avatar alt='Sergey Naumenko' src={sergey} className={classes.small} />
            </Link>
            <Link href='https://github.com/magerrrr' target='_blank' rel='noopener noreferrer' variant='body2'>
              <Avatar alt='Kirill Mager' src={kira} className={classes.large} />
            </Link>
          </div>
        </div>
      </Toolbar>
    </footer>
  );
};

export default Footer;
