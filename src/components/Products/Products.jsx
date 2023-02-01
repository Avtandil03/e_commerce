import React from 'react';
import {Grid}  from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './productsStyles'

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.', price:'5$', image: 'https://m.media-amazon.com/images/I/713WdmM3kNL._AC_UL320_.jpg' },
  { id: 2, name: 'Macbook', description: 'Apple macbook.', price:'10$', image: 'https://m.media-amazon.com/images/I/61ldExf7mbL._AC_UY218_.jpg'}
]

const Products = () => {
  const classes = useStyles()
  console.log(classes.content)
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

