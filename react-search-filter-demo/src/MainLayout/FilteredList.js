import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function FilteredList(props) {
  const classes = useStyles();
  const numbers = [1, 2, 3, 4, 5];

  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>
  );

  return (
    <React.Fragment>
    <List className={classes.root}>
    {props.searchColorsList.map((item) => (
    
        <ListItem button key={item.hex}>
         <ListItemAvatar>
            <Avatar style={{backgroundColor: item.hex}} variant="square">
                 {/* Blank */}
                <img src={''} /> 
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.rgb} />
         </ListItem>
     ))}
    </List>
    <Divider />
    <List className={classes.root}>
    {props.searchUsersList.map((item, i) => (
    
        <ListItem button key={i}>
         <ListItemAvatar>
            <Avatar>
            <img src={item.thumbnailUrl} width="50" height="50"/>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary="Jan 9, 2014" />
         </ListItem>
     ))}
     </List>
    </React.Fragment>
  );
}