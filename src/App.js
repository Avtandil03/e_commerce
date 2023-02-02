import React, {useState, useEffect} from 'react';
import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';





const App = () => {

  const [productsIsLoading, setProductsIsLoading] = useState(false)
  const [cart, setCart] = useState({})

  const fetchProducts = async() => {
    const response = await commerce.products.list()

    setProducts(response.data)
    setProductsIsLoading(true)
  }

  const fetchCart = async() => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)

  }

  const handleAddToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])
  
  const [products, setProducts] = useState()

  return (
    <div>
        <Navbar totalItems={cart.total_items}/>
        {productsIsLoading && 
          <Products products={products} onAddToCart={handleAddToCart}/>
        }
    </div>
  );
};

export default App;