import React from 'react';
import { Grid, Typography } from '@material-ui/core';
// import { products } from './Items';
import Product from "./Product/Product";
import useStyles from './styles'

/*--------------------------------------------------------------------/*
/*Main Script for products  nd gets the every item from product.jsx*/
/*--------------------------------------------------------------------*/

const Products = ({products,onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.title} id='products'>

                <Typography align='center' className={classes.heading} variant='h2' >
                Cool Gaming Tech
            </Typography>
            </div>
            <div className={ classes.toolbar}/>
            <Grid container justify="center" spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} onAddToCart={ onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
  
}

export default Products;