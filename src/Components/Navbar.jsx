import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/portfolioLogo.png';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    marginTop: 20,
  },
  dropdown: {
    marginTop: 40,
  },
  logoDiv: {
    flexGrow: 1,
  },
  logo: {
    width: 100,
    borderRadius: 50,
  },
}));

export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className={classes.navbar}>
      <div className={classes.logoDiv}>
        
          <img className={classes.logo} src={logo} alt='Logo' />
       
      </div>
      <div>
        <Button
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MenuIcon style={{ fontSize: '45px', color: '#ffff' }} />
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.dropdown}
        >
          <MenuItem component='a' href='/'>
            Home
          </MenuItem>
          <MenuItem component='a' href='/about'>
            About
          </MenuItem>
          <MenuItem component='a' href='/tech stack'>
            Tech stack
          </MenuItem>
        </Menu>
      </div>
    </Container>
  );
}
