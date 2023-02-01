import React from 'react';
import {Grid}  from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './productsStyles'

const Products = ({products}) => {


  const classes = useStyles()

  console.log(products)
  
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justifyContent='center' spacing={4}>
        {products.map(product => (
          <Grid key={product.id} xs={12} sm={6} md={4}  lg={3} item={true} > 
            <Product product={product}/>
          </Grid>
        ))

        }
      </Grid>
    </main>
  );
};

export default Products;

