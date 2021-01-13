/************************** Import library/fungsi ****************************/
import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

//terkait routing
import { useHistory } from 'react-router-dom';

//terkait routing (buka comment Link jika perlu <Link />)
//import { Link } from 'react-router-dom'
import { logout } from '../../../utils/xhr'

/************************ Deklarasi objek/variabel ***************************/
const useStyles = makeStyles((theme) => ({
  grow: {
    width: "100%",
  },
  growSpace:{
    width: "75%",
  },
  menuButton: {
    marginRight: "0px",
  },
  titleSpace:{
    width: '700px',
  },
  sectionDesktop:{
    marginRight: "10px"
  },
}));

/************************ Deklarasi kelas/komponen ***************************/
export default function AppBarMaterial(props) {
  const classes = useStyles();
  const [anchorAccount, setAnchorAccount] = React.useState(null);
  const [anchorPageSelection, setAnchorPageSelection] = React.useState(null);

  var history = useHistory();

  const isAccountOpen = Boolean(anchorAccount);
  const isPageSelectionOpen = Boolean(anchorPageSelection);

  const handleProfileMenuOpen = (event) => {
    setAnchorAccount(event.currentTarget);
  };

  const handlePageSelectionOpen = (event) => {
    setAnchorPageSelection(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorAccount(null);
    setAnchorPageSelection(null);
  };

  const AccountMenuId = 'primary-search-account-menu';
  const renderAccount = (
    <Menu
      anchorEl={anchorAccount}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={AccountMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isAccountOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
      <MenuItem onClick={() => {
        handleMenuClose();
        logout().then(() => {
          history.push('/auth')
        });
      }}>
        Logout
      </MenuItem>
    </Menu>
  );

  const PageSelectionMenuId = 'primary-search-account-menu';
  const renderPageSelection = (
    <Menu
      anchorEl={anchorPageSelection}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={PageSelectionMenuId}
      keepMounted
      transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={isPageSelectionOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={()=>{
        history.push('/');
        handleMenuClose();
      }}>
        {/* <NavLink to="/" exact activeClassName="active">Home</NavLink> */}
        Home</MenuItem>
      <MenuItem onClick={()=>{
        history.push('/event');
        handleMenuClose();
      }}>
        Event</MenuItem>
      <MenuItem onClick={()=>{
        history.push('/status');
        handleMenuClose();
      }}>
        Status</MenuItem>
      <MenuItem onClick={()=>{
        history.push('/parameter');
        handleMenuClose();
      }}>
        Parameter</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        History
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls={PageSelectionMenuId}
            aria-haspopup="true"
            onClick={handlePageSelectionOpen}
          >
            <MenuIcon />
          </IconButton>
          <section className={classes.titleSpace}>
            <h1>Battery Monitoring System</h1>
          </section>
          
          <div className={classes.growSpace} />
          
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={AccountMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderPageSelection}
      {renderAccount}
      <br/>
      <br/>
      <br/>
    </div>
  );
}
