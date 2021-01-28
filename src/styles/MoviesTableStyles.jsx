import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    cursor: 'pointer'
  },
  trendingFlat: {
    color: '#ffbf00',
    fontSize: '1em',
    verticalAlign: 'middle'
  },
  trendingUp: {
    color: '#57d500',
    fontSize: '1em',
    verticalAlign: 'middle'
  },
  trendingDown: {
    color: '#ff2e00',
    fontSize: '1em',
    verticalAlign: 'middle'
  }
}));