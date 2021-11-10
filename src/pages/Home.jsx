import React from 'react';
import '../index.css';
import { Container, Grid } from '@material-ui/core';
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
  portfolioImage: {
    borderRadius: '45% 55% 70% 30% / 30% 30% 70% 70%',
    verticalAlign: 'middle',
    width: '100%',
    height: 'auto',
    maxWidth: '500px',
  },
  appBar: {
    borderRadius: '30px',
    marginTop: '15px',
    padding: '0.5px',
    position: 'relative',
    zIndex: '-0',
    color: '#e9ebf0',
  },

  flex: {
    flexGrow: 1,
  },
  links: {
    color: '#25abe8',
    marginRight: '8px',
  },
  icon: {
    marginLeft: '4px',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container className='wave-container' id="home">
      <Grid container spacing={10} className='container'>
        <Grid item xm={12} md={6} className='intro'>
          <h4 className='name'>Miracle Ugorji</h4>
          <p className='title'>A Frontend Web Developer & Technical Writer</p>
          <p className='desc'>
            I use frontend langauges and frameworks to make beautiful,
            and responsive ui. I equally use Markdown skills to write
            technical documentations.
          </p>
          <Btn
            text='Hire me'
            endIcon={<ChevronRightIcon className={classes.icon} />}
          />
          <AppBar color='' className={classes.appBar}>
            <Toolbar>
              <div className={classes.flex}></div>
              <div>
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
          <img
            className={classes.portfolioImage}
            src={portfolioImage}
            alt='Logo'
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
