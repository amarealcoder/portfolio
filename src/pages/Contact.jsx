import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { send } from 'emailjs-com';

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

const Contact = (props) => {
  const classes = useStyles();

  

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    reply_to: '',
    message: '',
  });
  
  const handleChange = (e) => {
    e.preventDefault();
    setToSend((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      'service_3pdj9hn',
      'template_6phzfvv',
      toSend,
      'user_3TV9Y3cVTLPM2m2rwExv4'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    console.log(toSend);
    
    setToSend({
      from_name: '',
      to_name: '',
      reply_to: '',
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
        that you need built or a project that need coding, I'd love to help you
        with it.
      </Typography>

      <form
        onSubmit={handleSubmit}
        className={classes.form}
        noValidate
        autoComplete='off'
      >
        <TextField
          className='field'
          style={{ marginBottom: '30px' }}
          id='outlined-basic'
          label='Your full name'
          variant='outlined'
          color='secondary'
          required
          name='from_name'
          value={toSend.from_name}
          onChange={handleChange}
        />

        <TextField
          className='field'
          style={{ marginBottom: '30px' }}
          id='outlined-basic'
          label='Reciever`s name'
          variant='outlined'
          color='secondary'
          required
          name='to_name'
          value={toSend.to_name}
          onChange={handleChange}
        />

        <TextField
          className='field'
          style={{ marginBottom: '30px' }}
          id='outlined-basic'
          label='Your email'
          variant='outlined'
          color='secondary'
          required
          name='reply_to'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <TextField
          className='field'
          style={{ marginBottom: '30px' }}
          id='outlined-basic'
          label='Your Message'
          variant='outlined'
          color='secondary'
          multiline
          rows={8}
          required
          name='message'
          value={toSend.message}
          onChange={handleChange}
        />
        

        <Button
          variant='contained'
          style={{
            backgroundColor: '#25abe8',
            color: '#ffff',
            borderRadius: '30px',
            fontSize: '16px',
          }}
          type='button'
          
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
