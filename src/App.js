import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Articles from './pages/Articles';

import {
  Container,
  Typography,
  Button,
  FormGroup,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { send } from 'emailjs-com';

import './index.css';

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
    textAlign: 'center',
    marginTop: '20px',
    width: '60%',
    marginLeft: '20%',
    marginBottom: '30px',
  },
}));

const Form_validation = Yup.object().shape({
  from_name: Yup.string().required('Your name is required'),
  to_name: Yup.string().required('Reciever`s name is required'),
  reply_to: Yup.string()
    .email('Invalid email')
    .required('Your email is required'),
  message: Yup.string().required('Please write a message'),
});

function App(props) {
  const classes = useStyles();

  const [toSend] = useState({
    from_name: '',
    to_name: '',
    reply_to: '',
    message: '',
  });

  const handleSubmit = (values, { resetForm }) => {
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      values,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    console.log({ values });
    resetForm({ values: '' });
  };
  return (
    <>
      <Navbar />
      <div className='pageContainer'>
        <Home />
        <Projects />
        <About />
        <Articles />

        <Container className='section' id='contact'>
          <Typography variant='h4' className={classes.typography}>
            Interested in collaborating? Contact me!
          </Typography>

          <Typography
            variant='subtitle1'
            color='textSecondary'
            className='typographyAction'
          >
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding, I'd love
            to help you with it.
          </Typography>
          <Formik
            initialValues={{ ...toSend }}
            validationSchema={Form_validation}
            onSubmit={handleSubmit}
          >
            {({ values, errors }) => (
              <Form className={classes.form} noValidate autoComplete='off'>
                <Box marginBottom={5}>
                  <FormGroup>
                    <Field
                      as={TextField}
                      label='Your full name'
                      name='from_name'
                      variant='outlined'
                    />
                    <ErrorMessage name='from_name' />
                  </FormGroup>
                </Box>

                <Box marginBottom={5}>
                  <FormGroup>
                    <Field
                      as={TextField}
                      label='Reciever`s name'
                      name='to_name'
                      variant='outlined'
                    />
                    <ErrorMessage name='to_name' />
                  </FormGroup>
                </Box>

                <Box marginBottom={5}>
                  <FormGroup>
                    <Field
                      as={TextField}
                      label='Your email'
                      name='reply_to'
                      variant='outlined'
                    />
                    <ErrorMessage name='reply_to' />
                  </FormGroup>
                </Box>

                <Box marginBottom={5}>
                  <FormGroup>
                    <Field
                      as={TextField}
                      label='Your message'
                      name='message'
                      variant='outlined'
                      multiline
                      minRows={8}
                    />
                    <ErrorMessage name='message' />
                  </FormGroup>
                </Box>

                <Button
                  variant='contained'
                  style={{
                    backgroundColor: '#25abe8',
                    color: '#ffff',
                    borderRadius: '30px',
                    fontSize: '16px',
                  }}
                  type='submit'
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
}

export default App;
