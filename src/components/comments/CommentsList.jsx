import React, { useState } from 'react';
import firebase from 'firebase/app';
import { firestore } from "../../services/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Comment from './Comment';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../styles/CommentsListStyles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CommentsList = ({ open, setOpen, movie, user }) => {
  const classes = useStyles();

  const commentsRef = firestore.collection('comments');
  const query = commentsRef.where("movie", "==", movie);
  const [comments] = useCollectionData(query, { idField: 'id' });

  const handleCloseModal = () => {
    setOpen(false);
  };

  const [formValue, setFormValue] = useState('');

  const sendComment = async (e) => {
    e.preventDefault();
    await commentsRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      movie
    })
    setFormValue('');    
  }

  return (
      <Dialog className="chat-wrapper" open={open} onClose={handleCloseModal} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
              <ArrowBackIcon />
            </IconButton>
            <p className={classes.title}>{movie.title} Comments</p>
          </Toolbar>
        </AppBar>
        <DialogContent dividers>
          <List>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment} movie={movie} user={user} />)}
          </List>
        </DialogContent>
        <form className={classes.form} onSubmit={sendComment}>
          <InputBase
              value={formValue}
              className={classes.input}
              placeholder="Write your comment here"
              aria-label="input-comment"
              onChange={(e) => setFormValue(e.target.value)}
          />
          <Fab color="primary" aria-label="add" size="large" className={classes.btnFav} onClick={sendComment}>
            <SendIcon />
          </Fab>
        </form>
      </Dialog>
  );
}

export default CommentsList;