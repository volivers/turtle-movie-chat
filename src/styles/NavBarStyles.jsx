import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: '1em'
  }
}));