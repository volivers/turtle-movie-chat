import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from '../../styles/CommentStyles';

const Comment = ({ comment, movie, user }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar alt={user.displayName} src={user.photoURL} />
      </ListItemAvatar>
      <ListItemText className={classes.comment} primary={comment.text} />
    </ListItem>
  );
};

export default Comment;