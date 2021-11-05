import React from 'react';
import './Home.css';
import { Button, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import portfolioImage from '../images/portfolioImage.jpg';

const useStyles = makeStyles((theme) => ({
  portfolioImage: {
    top: -20,
    left: 8,
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    verticalAlign: 'middle',
    width: '100%',
    height: 'auto',
    maxWidth: '400px',
  },
  appBar: {
    borderRadius: '30px',
    marginTop: '15px',
    padding: '0.5px',
  },

  flex: {
    flexGrow: 1,
  },
  links: {
    color: '#25abe8',
    marginRight: '8px',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <section className='wave-container' id='home'>
        <Container>
          <div className='container'>
            <div className='intro'>
              <h3 className='name'> Hi, I'm Miracle</h3>
              <p className='title'>
                A frontend web developer & technical writer
              </p>
              <p className='desc'>
                I use frontend langauges and frameworks to make beautiful,
                scalable and responsive websites. Writing
              </p>
              <Button
                variant='contained'
                style={{
                  backgroundColor: '#25abe8',
                  color: '#ffff',
                  borderRadius: '30px',
                  fontSize: '18px',
                }}
              >
                Hire me
              </Button>
              <AppBar
                position='relative'
                color='#ffff'
                className={classes.appBar}
              >
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
            </div>
            <div>
              <img
                className={classes.portfolioImage}
                src={portfolioImage}
                alt='Logo'
              />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Home;
