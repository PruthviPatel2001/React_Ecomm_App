import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    borderBottom:'2px solid purple'

  },
  card: {
    backgroundColor: 'rgb(99, 13, 114)',
    boxShadow: '0px 10px 15px 18px rgba(183, 25, 211,0.1)',
    borderRadius: '20px',
    border: '4px solid purple',
    color:'rgb(218, 55, 247)'
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));