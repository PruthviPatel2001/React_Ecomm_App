import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    backgroundColor: 'rgb(99, 13, 114)',
    boxShadow: '0px 10px 15px 18px rgba(183, 25, 211,0.1)',
    borderRadius: '20px',
    border: '4px solid purple',
    color:'rgb(218, 55, 247)'

        
      },
      media: {
        height: 0,
        paddingTop: '96.25%',
        // backgroundColor:'#fff'
        borderBottom:'2px solid purple'
        
      },
      cardActions: {
          display: 'flex',
         
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
       color: 'rgb(218, 55, 247)'
  },
      icon:{
        color: 'rgb(218, 55, 247)'

      }
}));