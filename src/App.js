import React, {useState, useEffect} from 'react';
import { Navbar, Products, Cart } from './components';
import { commerce } from './lib/commerce';
import {BrowserRouter, Routes, Route} from 'react-router-dom'





const App = () => {

  const [cart, setCart] = useState({})


  const fetchProducts = async() => {
    const response = await commerce.products.list()

    setProducts(response.data)
  }

  const fetchCart = async() => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

  const handleAddToCart = async(productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }

  const handleUpdateCartQty = async(productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity})
    setCart(cart)
  }

  const handleRemoveFromCart = async(productId) => {
    const {cart} = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const handleEmptyCart = async() => {
    const {cart} = await commerce.cart.empty()
    setCart(cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])
  
  const [products, setProducts] = useState()
  

  console.log(commerce.cart.add)
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
          element={
            <Cart 
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;