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
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0'
  },
  input: {
    width: '500px',
    marginLeft: '15px'
  },
  btnFav: {
    margin: '0 15px'
  }
}));
