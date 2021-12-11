import React from 'react';
import { Button } from '@material-ui/core';

const Btn = ({ text, endIcon, onClick}) => {
  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: '#25abe8',
        color: '#ffff',
        borderRadius: '30px',
        fontSize: '16px',
       
      }}
      onClick={onClick}
    >
      {text} {endIcon}
     
    </Button>
  );
};

export default Btn;
