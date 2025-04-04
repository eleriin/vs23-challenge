import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'

const Header = () => {
    const cartCtx = useContext(CartContext);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button textOnly>Cart ({cartCtx.items.length})</button>
            </nav>
        </header>
    )
}

export default Header