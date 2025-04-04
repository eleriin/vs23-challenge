import React from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button textOnly>Cart (0)</button>
            </nav>
        </header>
    )
}

export default Header