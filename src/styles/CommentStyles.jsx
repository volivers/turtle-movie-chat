import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    transition: 'transform .3s ease-in',
    "&:hover": {
      transform: 'scale(1.01)'
    }
  },
  avatar: {
    backgroundColor: '#3f51b5'
  },
  comment: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    padding: '16px',
    borderRadius: '5px'
  }
}));
