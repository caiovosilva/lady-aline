import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import Contact from './components/Contact'

function App () {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/contact' component={Contact} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  )
}

export default App
