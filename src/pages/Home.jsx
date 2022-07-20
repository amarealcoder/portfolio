import React from 'react';
import '../index.css';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import portfolioImage from '../images/portfolioImage.jpg';
import Btn from '../Components/Btn';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: '30px',
    padding: '0.5px',
    position: 'relative',
    zIndex: '-0',
    maxWidth: '80%',
    margin: '0 auto',
    marginTop: '1.5rem'
  },
  flex: {
    flexGrow: 1,
    '@media(max-width: 320px)': {
      display: 'none',
    },
  },
  socialIcons: {
    '@media(max-width: 320px)': {
      marginLeft: '80px',
    },
  },
  links: {
    color: '#25abe8',
    marginRight: '15px',
  },
  icon: {
    marginLeft: '4px',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box id='home' className='wave-container'>
      <Container maxWidth='xl'>
        <Grid container spacing={2} className='container'>
          <img className='mobileImage' src={portfolioImage} alt='Logo' />

          <Grid item xm={12} md={6} className='intro'>
            <h4 className='name'>Miracle Ugorji</h4>
            <p className='title'>A Frontend Web Developer & Technical Writer</p>
            <p className='desc'>
              I use frontend langauges and frameworks to make beautiful, and
              responsive UI (User Interface). I equally use Markdown skills to
              write technical documentations.
            </p>
            <a href='#contact' style={{ textDecoration: 'none' }}>
              <Btn
                text='Hire me'
                endIcon={<ChevronRightIcon className={classes.icon} />}
              />
            </a>
            <AppBar color='inherit' className={classes.appBar}>
              <Toolbar>
                <Typography
                  variant='subtitle1'
                  className='socials'
                  color='textSecondary'
                >
                  Check out my socials
                </Typography>
                <div className={classes.flex}></div>
                <div className={classes.socialIcons}>
                  <a href='https://github.com/amarealcoder' target='blank'>
                    <GitHubIcon className={classes.links} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/miracle-ugorji/'
                    target='blank'
                  >
                    <LinkedInIcon className={classes.links} />
                  </a>
                  <a href='https://twitter.com/amarealcoder'>
                    <TwitterIcon className={classes.links} />
                  </a>
                </div>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xm={12} md={6}>
            <img className='desktopImage' src={portfolioImage} alt='Logo' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
