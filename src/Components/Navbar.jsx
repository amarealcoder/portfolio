import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    backgroundColor: '#132554',
    zIndex: '100',
    width: '100%',
  },
  navbar: {
    display: 'flex',
    width: '100%',
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
    fontSize: '28px',
  },
  anchor: {
    textDecoration: 'none',
    color: '#25abe8',
    fontSize: '25px',
  },
  navContent: {
    display: 'flex',
  },
  dropdownContainer:{
    '@media (min-width: 912px)':{
      display: 'none'
    }
  },
  desktopMenu: {
    display: 'flex',
    '@media (max-width: 912px)': {
      display: 'none',
    },
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
    <Box className={classes.header} component='header'>
      <Container component='nav' className={classes.nav} maxWidth='xl'>
        <div className={classes.navContent}>
          <div className={classes.logoDiv}>
            <h1 className={classes.logo}>amarealcoder</h1>
          </div>
          <nav className={classes.desktopMenu}>
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
          </nav>

          <div className={classes.dropdownContainer}>
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
        </div>
      </Container>
    </Box>
  );
}
