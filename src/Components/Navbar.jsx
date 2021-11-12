import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
// // import logo from '../images/profile.png';
// import logo from '../images/portfolioLogo.png';

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: 'fixed',
    top: 0,
    zIndex: '100',
    display: 'flex',
    width: '100%',
    backgroundColor: '#132554',
  },
  dropdown: {
    marginTop: 50,
  },
  logoDiv: {
    flexGrow: 1,
  },
  logo: {
    marginTop: 12,
    width: 80,
    color: '#ffff',
    fontSize: '25px'
  },
  anchor: {
    textDecoration: 'none',
    color: '#25abe8',
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
        {/* <img className={classes.logo} src={logo} alt='Logo' /> */}
        <h1 className={classes.logo}>amarealcoder</h1>
      </div>
      <div>
        <Button
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MenuIcon
            style={{ fontSize: '45px', color: '#ffff' }}
          />
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.dropdown}
        >
          <MenuItem>
            <a href='#home' className={classes.anchor}>
              Home
            </a>
          </MenuItem>
          <MenuItem>
            <a href='#projects' className={classes.anchor}>
              Projects
            </a>
          </MenuItem>
          <MenuItem>
            <a href='#about' className={classes.anchor}>
              About
            </a>
          </MenuItem>
          <MenuItem>
            <a href='#articles' className={classes.anchor}>
              Articles
            </a>
          </MenuItem>
          <MenuItem>
            <a href='#contact' className={classes.anchor}>
              Contact
            </a>
          </MenuItem>
        </Menu>
      </div>
    </Container>
  );
}
