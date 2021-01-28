import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
    <div>
      <Dialog fullScreen open={open} onClose={handleCloseModal} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="p" className={classes.title} id="dialog-title">{movie.title} Comments</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent dividers>

        </DialogContent>
        <DialogActions>
          <InputBase fullWidth placeholder="Write your comment here" aria-label="input-comment" />
          <Fab color="primary" aria-label="add" size="large" className={classes.btnFav} onClick={handleCloseModal}>
            <SendIcon />
          </Fab>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommentsList;