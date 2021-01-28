import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    margin: 'auto',
    textTransform: 'uppercase',
    letterSpacing: '1em',
    fontWeight: 'lighter',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    width: '500px',
    marginLeft: '10px'
  },
  btnFav: {
    margin: '0 10px'
  }
}));
