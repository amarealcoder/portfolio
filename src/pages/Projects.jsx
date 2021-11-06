import React from 'react';
import ProjectsCard from '../Components/ProjectsCard';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  typography: {
    color: '#263238',
    textAlign: 'center',
    paddingBottom: '20px',
  },
  section: {
    marginTop: '40px',
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Typography variant='h4' className={classes.typography}>
        Projects
      </Typography>
      <ProjectsCard />
    </section>
  );
};

export default Projects;
