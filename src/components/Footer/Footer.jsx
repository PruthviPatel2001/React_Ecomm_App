import React from 'react'
import { Typography } from '@material-ui/core';

import {FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa';
import useStyle from './styles';

const Footer = () => {
    const classes = useStyle();
    return (
        <div className={classes.main}>
        <div className={classes.info}>
            <Typography className={classes.Typography} variant="h4">
                    Keep shopping.We got all best products.
            </Typography>
                <div className={classes.icons}>
                    <a className={classes.icon} href=""><FaFacebook /></a>
                    <a className={classes.icon} href=""><FaInstagram/></a>
                    <a className={classes.icon} href=""><FaTwitter/></a>   
                </div>
        </div>  
    </div>
    )
}

export default Footer
