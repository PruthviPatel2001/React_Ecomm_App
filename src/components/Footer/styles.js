import { makeStyles } from '@material-ui/core';

export default makeStyles((themes) => ({

    main: {
        
        backgroundColor: '#800285',
        color: '#fff',
        padding:'10px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30vh',
        position:'relative',
        bottom:'0',
       
        [themes.breakpoints.up('xs')]: {
          
          },
        
    },
   
    Typography: {
        [themes.breakpoints.up('xs')]: {
          fontSize:'1.2rem'
        },
        [themes.breakpoints.up('sm')]: {
            fontSize:'2rem'

        },
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [themes.breakpoints.up('xs')]: {
            marginTop: '8px'
        },
        [themes.breakpoints.up('sm')]: {
            marginTop: '16px'
        }
    },
    icon: {
        margin: '10px 30px 0 5px',
        textDecoration: 'none',
        color: 'white',
        borderRadius: "50%",
        lineHeight: '1.5rem',

        fontSize:'2.5rem'
        
    }
    
}))