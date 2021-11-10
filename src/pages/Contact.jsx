import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Btn from '../Components/Btn';
import '../index.css';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    marginTop: '120px',
  },

  typography: {
    color: '#263238',
    textAlign: 'center',
    marginBottom: '60px',
  },

  typographyAction: {
    color: '#263238',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '60%',
    paddingLeft: '20%',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '50px',
  },
  field: {
    width: '50%',
    marginTop: 20,
    marginBottom: 20,
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.contactContainer} id='contact'>
      <Typography variant='h4' className={classes.typography}>
        Interested in collaborating? Contact me!
      </Typography>

      <Typography variant='p' className={classes.typographyAction}>
        If you have an application you are interested in developing, a feature
        that you need built or a project that need coding, I’d love to help you
        with it.
      </Typography>

      <form
        className={classes.form}
        noValidate
        autoComplete='off'
        action='https://mailthis.to/ugorjimiracle06@gmail.com'
        method='POST'
      >
        <TextField
          className={classes.field}
          id='outlined-basic'
          label='Your full name'
          variant='outlined'
          color='secondary'
          required
        />
        <TextField
          className={classes.field}
          id='outlined-basic'
          label='Your email'
          variant='outlined'
          color='secondary'
          required
        />
        <TextField
          className={classes.field}
          id='outlined-basic'
          label='Message'
          variant='outlined'
          color='secondary'
          multiline
          rows={8}
          required
        />
        <Btn text='Submit' />
      </form>
    </Container>
  );
};

export default Contact;
