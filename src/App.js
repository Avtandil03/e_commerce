import React, {useState, useEffect} from 'react';
import { Navbar, Products, Cart } from './components';
import { commerce } from './lib/commerce';





const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [cart, setCart] = useState({})


  const fetchProducts = async() => {
    const response = await commerce.products.list()

    setProducts(response.data)
  }

  const fetchCart = async() => {
    setIsLoading(true)
    const cart = await commerce.cart.retrieve()
    setCart(cart)
    setIsLoading(false)

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
        {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
        
        <Cart cart={cart}/>
    </div>
  )
}

export default App;