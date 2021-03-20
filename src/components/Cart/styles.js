
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main:{
    backgroundColor: 'rgb(39, 15, 43)',
    paddingBottom:'5%'
  },
  title: {
    display:'inline-block',
    marginTop: '5%',
    color: 'rgb(150, 54, 240)',
    textShadow: `-1px 1px black`,
    borderBottom:'2px solid purple'
   
  },
  empty: {
    height: '40vh',
    color: 'purple',
    [theme.breakpoints.up('xs')]: {
    height: '45vh',
     
    },
  },
  
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
    backgroundColor: 'rgb(214, 169, 255)',
    padding:'2px'
  },

 
 
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '5%',
    color:'rgb(218, 55, 247)'
   
  },
  
}));