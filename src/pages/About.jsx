import React from 'react';
import { CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Btn from '../Components/Btn';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  section: {
    marginTop: '90px',
  },
  typography: {
    color: '#263238',
    textAlign: 'center',
    paddingBottom: '20px',
  },
  icon: {
    marginLeft: '4px',
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.section} id='about'>
      <Typography variant='h4' className={classes.typography}>
        About me
      </Typography>

      <Grid container spacing={8} className={classes.decs}>
        <Grid item xm={12} md={6}>
          <CardContent>
            <Typography color='textSecondary'>
              I am a self-taught front-end developer and technical writer.
              Passionate about building scalable and optimized user-friendly web
              applications. I have demonstrated ability to use front-end
              frameworks through my projects. Futhermore, I use technical
              writing to demonstrate my ability to communicate comfortably. Look
              through some of my works. If you like what you see, and have
              project you need coded, or a technical writing project, don't
              hesitate to contact me.
            </Typography>
          </CardContent>

          <a
            href='https://docs.google.com/document/d/11qht127ajJI8p5uLIsQWbORJU2w3eXCVB0X_2WyYZwE/edit?usp=sharing'
            target='blank'
            style={{ textDecoration: 'none' }}
          >
            <Btn
              text='Get my resume'
              endIcon={<CloudDownloadIcon className={classes.icon} />}
            />
          </a>
        </Grid>

        <Grid item xm={12} md={6}>
          <CardContent>
            <Typography variant='h5'>Languages | Frameworks</Typography>
            <Typography color='textSecondary'>
              Javascript | React | Redux
            </Typography>
            <Typography color='textSecondary'>
              CSS | SCSS | Bootstrap | Material UI
            </Typography>
            <Typography color='textSecondary'>Html</Typography>

            <Typography variant='h5'>Skills</Typography>
            <Typography color='textSecondary'>Pair programming</Typography>
            <Typography color='textSecondary'>Markdown</Typography>
            <Typography color='textSecondary'>Git workflow</Typography>
            <Typography color='textSecondary'>Technical writing</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
