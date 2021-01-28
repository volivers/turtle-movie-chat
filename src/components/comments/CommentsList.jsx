import React from 'react';
import Comment from './Comment';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import DialogActions from '@material-ui/core/DialogActions';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../styles/CommentsListStyles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CommentsList = ({ open, setOpen, movie }) => {
  const classes = useStyles();

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
      <Dialog open={open} onClose={handleCloseModal} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="p" className={classes.title} id="dialog-title">{movie.title} Comments</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent dividers>
          <List>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </List>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <InputBase className={classes.input} placeholder="Write your comment here" aria-label="input-comment" />
          <Fab color="primary" aria-label="add" size="large" className={classes.btnFav} onClick={handleCloseModal}>
            <SendIcon />
          </Fab>
        </DialogActions>
      </Dialog>
  );
}

export default CommentsList;