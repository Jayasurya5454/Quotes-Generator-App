import React from 'react'
import './App.css'

import Nav from '../nav/nav'
import Hero from '../main/hero'
import Footer from '../footer/footer'

let App = () => {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Footer />
    </div>
  )
}

export default App;