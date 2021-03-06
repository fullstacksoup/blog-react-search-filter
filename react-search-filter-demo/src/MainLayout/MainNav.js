import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import MainRouter from './MainRouter';
import SearchBarFilter from './SearchBarFilter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'left',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    cursor: 'pointer',
    top: '5px',
    right: '-15px',
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function MainNav(props) {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true);
  const [showFilter, setShowFilter] = React.useState(false);
  const [searchFilter, setSearchFilter] = React.useState('');
  const [searchInput, setSearchInput] = React.useState('');    

  const handleCloseSearchFilter = (event) => {    
    setSearchFilter('')
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" align="left" noWrap>
            Material-UI
          </Typography>

          <div className={classes.search}>
          
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={props.searchInput}
              onChange={props.handleSearchInput}
            />
            {props.showResults ? 
            <div className={classes.clearIcon} >
              <ClearIcon onClick={props.handleClearSearchField}/>
            </div>
            : ''
            }
          </div>
          
        </Toolbar>
      </AppBar>

      <SearchBarFilter show={Boolean(props.showResults)} 
                        searchUsersList={props.searchUsersList}
                        searchColorsList={props.searchColorsList}
                        searchInput={searchInput}                           
                        handleCloseSearchFilter={props.handleCloseSearchFilter} />

      <MainRouter />
    </div>
   
  );
}
