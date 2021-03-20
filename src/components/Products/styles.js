import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'rgb(39, 15, 43)',
    padding: theme.spacing(3),
  },
  title: {
    color: 'purple',
    borderBottom: '2px solid purple',
    
  },
  heading: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.2rem'
    },
  },
  root: {
    flexGrow: 1,
  },
}));