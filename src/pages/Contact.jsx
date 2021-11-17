import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
// import Btn from '../Components/Btn';
import axios from 'axios';
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

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '50px',
  },
}));

const Contact = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    name: '',
    _replyto: '',
    message: '',
  });
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        'https://mailthis.to/ugorjimiracle06@gmail.com',
        {
          name: state.name,
          _replyto: state._replyto,
          message: state.message,
        }
      );
      console.log(res);
      console.log('posted');
    } catch (error) {
      console.log(error);
    }

    setState({
      name: '',
      _replyto: '',
      message: '',
    });
  };

  return (
    <Container className='section' id='contact'>
      <Typography variant='h4' className={classes.typography}>
        Interested in collaborating? Contact me!
      </Typography>

      <Typography
        variant='subtitle1'
        color='textSecondary'
        className='typographyAction'
      >
        If you have an application you are interested in developing, a feature
        that you need built or a project that need coding, I’d love to help you
        with it.
      </Typography>

      <form className={classes.form} noValidate autoComplete='off'>
        <TextField
          className='field'
          style={{ marginBottom: '30px' }}
          id='outlined-basic'
          label='Your full name'
          variant='outlined'
          color='secondary'
          required
          name='name'
          onChange={handleChange}
          value={state.name}
        />
        <TextField
          className='field'
          style={{ marginBottom: '30px' }}
          id='outlined-basic'
          label='Your email'
          variant='outlined'
          color='secondary'
          required
          name='_replyto'
          onChange={handleChange}
          value={state._replyto}
        />
        <TextField
          className='field'
          style={{ marginBottom: '30px' }}
          id='outlined-basic'
          label='Message'
          variant='outlined'
          color='secondary'
          multiline
          rows={8}
          required
          name='message'
          onChange={handleChange}
          value={state.message}
        />
        {/* <Button text='Submit' type='button' onClick={handleSubmit} /> */}
        {/* <Btn text='Submit' type='button' onClick={handleSubmit} /> */}

        <Button
          variant='contained'
          style={{
            backgroundColor: '#25abe8',
            color: '#ffff',
            borderRadius: '30px',
            fontSize: '16px',
          }}
          type='button'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>

      {/* <form
        action='https://mailthis.to/ugorjimiracle06@gmail.com'
        method='POST'
        // encType='multipart/form-data'
      >
        <input type='text' name='name' placeholder='Your name' />
        <input type='email' name='_replyto' placeholder='Your email' />
        <textarea
          name='message'
          placeholder='Enter your message here'
        ></textarea>

        <input type='submit' value='Send' />
      </form> */}
    </Container>
  );
};

export default Contact;
