import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaCard from './Cards';
import CardActions from '@material-ui/core/CardActions';
import calculator from '../images/calculator.jpg';
import foodRecipeApp from '../images/foodRecipeApp.jpg';
import tipCalculator from '../images/tipCalculator.jpg';
import todoList from '../images/todoList.jpg';
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Btn from './Btn';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  icon: {
    marginLeft: '4px',
  },
  divStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const ProjectsCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.divStyles}>
      <Container>
        <Grid
          container
          spacing={5}
        >
          <Grid item xm={12} md={6} lg={3}>
            <MediaCard
              title='Calculator'
              image={calculator}
              calcDesc='A calculator made for mathematical calculations. Users can add, subtract, divide and multiply numbers. Built with html, css (using neomorphism styling), and javascript.'
            />
            <CardActions>
              <Btn
                text='Code'
                endIcon={<CodeIcon className={classes.icon} />}
                href='https://github.com/amarealcoder/Calculator'
                target='blank'
              />
              <Btn
                text='preview'
                endIcon={<VisibilityIcon className={classes.icon} />}
                href='https://amarealcoder-calculator.netlify.app'
                target='blank'
              />
            </CardActions>
          </Grid>

          <Grid item xm={12} md={6} lg={3}>
            <MediaCard
              title='Food Recipe App'
              image={foodRecipeApp}
              calcDesc='A food recipe app where users can search for a recipe of their choice, view recipe contents, check out random recipe displayed and much more. Made with html, css, and javascript.'
            />
            <CardActions>
              <Btn
                text='Code'
                endIcon={<CodeIcon className={classes.icon} />}
                href='https://github.com/amarealcoder/Calculator'
                target='blank'
              />
              <Btn
                text='preview'
                endIcon={<VisibilityIcon className={classes.icon} />}
                href='https://foodies-recipes-app.netlify.app'
                target='blank'
              />
            </CardActions>
          </Grid>

          <Grid item xm={12} md={6} lg={3}>
            <MediaCard
              title='Tip Calculator'
              image={tipCalculator}
              calcDesc='A tip calculator created, to help calculate tips. Users can add a tip/bill amount, add the number of people to share the tip, select or customize the tip percentage. Built with html, css, and javascript'
            />
            <CardActions>
              <Btn
                text='Code'
                endIcon={<CodeIcon className={classes.icon} />}
                href='https://github.com/amarealcoder/tip-calculator'
                target='blank'
              />
              <Btn
                text='preview'
                endIcon={<VisibilityIcon className={classes.icon} />}
                href='https://happy-tip-calculator.netlify.appp'
                target='blank'
              />
            </CardActions>
          </Grid>

          <Grid item xm={12} md={6} lg={3}>
            <MediaCard
              title='Todo List App'
              image={todoList}
              calcDesc='A to-do list app, created to help organize activities or tasks. Users can add a todo, see updated todo count, a modal for delete confirmation and more. Built with CSS and React.'
            />
            <CardActions>
              <Btn
                text='Code'
                endIcon={<CodeIcon className={classes.icon} />}
                href='https://github.com/amarealcoder/todo-lister-with-react'
                target='blank'
              />
              <Btn
                text='preview'
                endIcon={<VisibilityIcon className={classes.icon} />}
                href='https://amarealcoder-todo.herokuapp.com/'
                target='blank'
              />
            </CardActions>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectsCard;
