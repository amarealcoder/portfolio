import React from 'react';
import '../index.css';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../Components/Cards';
import CardActions from '@material-ui/core/CardActions';
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Btn from '../Components/Btn';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';
import calculator from '../images/calculator.jpg';
import buzzymart from '../images/buzzymart.png';
import tipCalculator from '../images/tipCalculator.jpg';
import todoList from '../images/todoList.jpg';

const useStyles = makeStyles((theme) => {
  return {
    grid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      marginLeft: '4px',
    },
    typography: {
      color: '#263238',
      textAlign: 'center',
      marginBottom: '60px',
    },
  };
});
const Projects = () => {
  const classes = useStyles();
  return (
    <Container className='section' id='projects'>
      <Typography variant='h4' className={classes.typography}>
        Projects
      </Typography>
      <Grid container spacing={5} className={classes.grid}>
        <Grid item xm={12} md={6} lg={3}>
          <MediaCard
            title='Calculator'
            image={calculator}
            desc='A calculator made for mathematical calculations. Users can add, subtract, divide and multiply numbers. Built with html, css (using neomorphism styling), and javascript.'
          />
          <CardActions>
            <a
              href='https://github.com/amarealcoder/Calculator'
              target='_blank'
              style={{ textDecoration: 'none' }}
              rel='noreferrer'
            >
              <Btn
                text='Code'
                endIcon={<CodeIcon className={classes.icon} />}
              />
            </a>

            <a
              href='https://amarealcoder-calculator.netlify.app'
              target='_blank'
              style={{ textDecoration: 'none' }}
              rel='noreferrer'
            >
              <Btn
                text='preview'
                endIcon={<VisibilityIcon className={classes.icon} />}
              />
            </a>
          </CardActions>
        </Grid>

        <Grid item xm={12} md={6} lg={3}>
          <MediaCard
            title='Buzzymart'
            image={buzzymart}
            desc='An e-commerce store. Users can log in and log out, view product detail, filter categories, add to cart and much more.  Made with CSS module, React, Firebase, localstorage.'
          />
          <CardActions>
            <a
              href='https://github.com/amarealcoder/E-commerce-store'
              target='blank'
              style={{ textDecoration: 'none' }}
            >
              <Btn
                text='Code'
                endIcon={<CodeIcon className={classes.icon} />}
              />
            </a>
            <a
              href='https://buzzymart.netlify.app/'
              target='blank'
              style={{ textDecoration: 'none' }}
            >
              <Btn
                text='preview'
                endIcon={<VisibilityIcon className={classes.icon} />}
              />
            </a>
          </CardActions>
        </Grid>

        <Grid item xm={12} md={6} lg={3}>
          <MediaCard
            title='Tip Calculator'
            image={tipCalculator}
            desc='A tip calculator created, to help calculate tips. Users can add a tip/bill amount, add the number of people to share the tip, select or customize the tip percentage. Built with html, css, and javascript'
          />
          <CardActions>
            <a
              href='https://github.com/amarealcoder/tip-calculator'
              target='blank'
              style={{ textDecoration: 'none' }}
            >
              <Btn
                text='Code'
                endIcon={<CodeIcon className={classes.icon} />}
              />
            </a>

            <a
              href='https://happy-tip-calculator.netlify.appp'
              target='blank'
              style={{ textDecoration: 'none' }}
            >
              <Btn
                text='preview'
                endIcon={<VisibilityIcon className={classes.icon} />}
              />
            </a>
          </CardActions>
        </Grid>

        <Grid item xm={12} md={6} lg={3}>
          <MediaCard
            title='Todo List App'
            image={todoList}
            desc='A to-do list app, created to help organize activities or tasks. Users can add a todo, see updated todo count, a modal for delete confirmation and more. Built with CSS and React.'
          />
          <CardActions>
            <a
              href='https://github.com/amarealcoder/todo-lister-with-react'
              target='blank'
              style={{ textDecoration: 'none' }}
            >
              <Btn
                text='Code'
                endIcon={<CodeIcon className={classes.icon} />}
              />
            </a>
            <a
              href='https://amarealcoder-todo.herokuapp.com/'
              target='blank'
              style={{ textDecoration: 'none' }}
            >
              <Btn
                text='preview'
                endIcon={<VisibilityIcon className={classes.icon} />}
              />
            </a>
          </CardActions>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
