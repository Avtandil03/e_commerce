import React, {useState, useEffect} from 'react';
import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';





const App = () => {

  const [productsIsLoading, setProductsIsLoading] = useState(false)

  const fetchProducts = async() => {
    const response = await commerce.products.list()

    setProducts(response.data)
    setProductsIsLoading(true)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const [products, setProducts] = useState()

  return (
    <div>
        <Navbar/>
        {productsIsLoading && 
          <Products products={products}/>
        }
    </div>
  );
};

export default App;