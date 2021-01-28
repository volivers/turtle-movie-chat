import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from '../../styles/CommentStyles';

const Comment = () => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText className={classes.comment} primary="Single-line item" />
    </ListItem>
  );
};

export default Comment;