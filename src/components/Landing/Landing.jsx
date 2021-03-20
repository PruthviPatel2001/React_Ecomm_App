import React from 'react';
import { Typography} from '@material-ui/core';
import  './landing.css'
import useStyle from './styles';
import { HashLink as Link } from "react-router-hash-link";



const Landing = () => {
    const classes = useStyle();
    const color1 = {
        background: "#000000",
        opacity: "1.5"
    }
    const color2 = {
        background: '#000000',
    opacity: '1.8'
    }

    return (
        <div className={classes.main} style={{background: `linear-gradient(to bottom,  ${{color1}} ,${{color2}} 100%`}} >
            <div className={classes.info}>
                <Typography className={classes.t1 }  variant={'h6'}  align="center" display={'block'}>
                    Welcome to the Super Market
                </Typography>
                    <Typography className={classes.t2} variant='subtitle1' align="center">
                        Best place to grab gamming stuffs
                    </Typography>
                        <Typography className={classes.t3} variant='subtitle2' align="center">
                    we had super deals on all products
                        </Typography>
                
                    
                <Link smooth to='#products' className='btn' >Shop Now</Link>
               
            </div>  
        </div>
    )
}

export default Landing;
