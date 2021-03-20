import { makeStyles } from '@material-ui/core/styles';
import ImgBg from '../../assets/landing.jpg'

export default makeStyles((themes) => ({
    main: {
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily:[`'Overpass', sans-serif`],
        
        width: '100%',
        background:`linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${ImgBg});`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        color:'#fe346e',
        [themes.breakpoints.up('xs')]: {
        height: '80vh'
            
        },
        [themes.breakpoints.between('md', 'lg')]: {
            height: '90vh'
        },
        [themes.breakpoints.up('lg')]: {
            height: '100vh'
          },
        
        
    },
    info: {
        borde: '2px solid black',
        display: 'flex',
         flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    t1: {
        // fontSize: '4.9rem',
        fontFamily: [`'Overpass', sans-serif`],
        textShadow: `-1px 1px #fff`,
        
        
        [themes.breakpoints.up('xs')]: {
            fontSize: '2.9rem',
            
          },
          [themes.breakpoints.up('sm')]: {
              fontSize:'2rem'
  
        },
        [themes.breakpoints.up('lg')]: {
            fontSize:'4.5rem',
            marginTop: '5%'
      },
          
    },
  
    t2: {
        fontFamily: [`'Overpass', sans-serif`],
        textShadow: `-1px -1px  #fe346e`,
        color:'#fff',

        
        
        [themes.breakpoints.up('lg')]: {
            fontSize:'2.0rem'
      }, 
    },
    t3: {
        fontFamily:[`'Overpass', sans-serif`],
        
        color:'#fff',
        [themes.breakpoints.up('lg')]: {
            fontSize:'1.5rem'
      }, 
    },
  

}));