import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Grid  from '@material-ui/core/Grid';
import calculator from '../images/calculator.jpg';
import foodRecipeApp from '../images/foodRecipeApp.jpg';
import tipCalculator from '../images/tipCalculator.jpg';
import todoList from '../images/todoList.jpg';
import Card from '@material-ui/core/Card';
import { CardMedia, Paper } from '@material-ui/core';

const cardItems = [
  { img: calculator, title: 'Calculator', id: 1 },
  { img: foodRecipeApp, title: 'Food Recipe App', id: 2 },
  { img: tipCalculator, title: 'Tip Calculator', id: 3 },
  { img: todoList, title: 'Todo List App', id: 4 },
];

const ProjectsCard = () => {
  // const [cards, setCards] = useState([]);

  return (
    <>
      <Grid container>
        {cardItems.map((card) => (
          <Grid item key={card.id} sm={12} md={6} lg={4}>
            <Paper>
              <p>{card.title}</p>
              <img src={card.img} />
              {/* <CardMedia>{card.img}</CardMedia> */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectsCard;
