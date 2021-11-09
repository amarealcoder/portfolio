import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core';
import cssdropdown from '../images/cssdropdown.jpg';
import getDate from '../images/getDate.jpg';
import reactIcons from '../images/reactIcons.jpg';

const useStyles = makeStyles({
  section: {
    marginTop: '90px',
  },

  typography: {
    color: '#263238',
    textAlign: 'center',
    paddingBottom: '20px',
  },
  images: {
    verticalAlign: 'middle',
    width: '100%',
    height: 'auto',
    maxWidth: '500px',
  },
  articles: {
    marginTop: '90px',
    fontSize: '18px',
    lineHeight: 2,
    color: '#263238',
  },
  icon: {
    marginLeft: '10px',
    marginBottom: '-7px',
  },

  articlesTitles: {
    marginBottom: 4,
  },

  anchor: {
    display: 'block',
  },
});

const Articles = () => {
  const classes = useStyles();
  return (
    <Container className={classes.section} id='articles'>
      <Typography variant='h4' className={classes.typography}>
        Articles
      </Typography>
      <Grid container spacing={5}>
        <Grid item sm={12} md={6}>
          <img className={classes.images} src={getDate} alt='article' />
        </Grid>

        <Grid item sm={12} md={6} className={classes.articles}>
          <Typography variant='h4' className={classes.articlesTitles}>
            What is getDate() in javaScript?
          </Typography>
          <Typography variant='p'>
            The getDate() method is one of the date methods available in
            javaScript. It is used to get the day of the month for the specified
            date.
          </Typography>
          <a
            className={classes.anchor}
            href='https://www.educative.io/edpresso/what-is-getdate-in-javascript'
            target='_blank'
            rel='noreferrer'
          >
            See more <ArrowForwardIcon className={classes.icon} />
          </a>
        </Grid>

        <Grid item sm={12} md={6} className={classes.articles}>
          <Typography variant='h4' className={classes.articlesTitles}>
            How to create a dropdown menu with html and css only.
          </Typography>
          <Typography variant='p'>
            A menu is a list of available choices. A dropdown menu is a menu
            that hides its contents by default and only shows its contents when
            it is clicked or hovered on the navbar.
          </Typography>

          <a
            className={classes.anchor}
            href='https://eagledev.hashnode.dev/how-to-create-a-dropdown-menu-with-html-and-css-only'
            target='_blank'
            rel='noreferrer'
          >
            See more <ArrowForwardIcon className={classes.icon} />
          </a>
        </Grid>

        <Grid item sm={12} md={6}>
          <img className={classes.images} src={cssdropdown} alt='article' />
        </Grid>

        <Grid item sm={12} md={6}>
          <img className={classes.images} src={reactIcons} alt='article' />
        </Grid>

        <Grid item sm={12} md={6} className={classes.articles}>
          <Typography variant='h4' className={classes.articlesTitles}>
            How to use react-icons to install fontawesome in a react app.
          </Typography>
          <Typography variant='p'>
            When you're building a React web application, chances are you are
            going to use icons. Icons are graphical representations of a
            concept, an idea, a file, a program, an app, a business, and so on.
          </Typography>

          <a
            className={classes.anchor}
            href='https://www.freecodecamp.org/news/how-to-use-react-icons/'
            target='_blank'
            rel='noreferrer'
          >
            See more <ArrowForwardIcon className={classes.icon} />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Articles;
