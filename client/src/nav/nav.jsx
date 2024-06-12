import React from 'react'
import './nav.css'

let Nav = () => {
  return (
    <ul className="nav">
      <li>HOME</li>
      <li>QUOTE GENERATOR</li>
      <li>PLUS+</li>
      <li><a href="#footer">ABOUT</a></li>
      <li><a href="#footer">CONTACT</a></li>
    </ul>
  )
}

export default Nav;