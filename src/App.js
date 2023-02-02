import React, {useState, useEffect} from 'react';
import { Navbar, Products, Cart } from './components';
import { commerce } from './lib/commerce';
import {BrowserRouter, Routes, Route} from 'react-router-dom'





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
    <BrowserRouter>
      <Navbar totalItems={cart.total_items}/>
      <Routes>
        <Route
          exact
          path='/'
          element={<Products products={products} onAddToCart={handleAddToCart}/>}
        />
        <Route
          exact
          path='/cart'
          element={<Cart cart={cart}/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;