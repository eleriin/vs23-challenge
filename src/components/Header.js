import React, { useContext,useState } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import Modal from './UI/Modal'
import Cart from './Cart'

const Header = () => {
    const cartCtx = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openCartHandler = () =>{
        setIsModalOpen(true);
    }
    const closeCartHandler = ()=>{
        setIsModalOpen(false);
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button textOnly onClick={openCartHandler}>
                Cart ({cartCtx.items.length})
                </button>
            </nav>

            <Modal open={isModalOpen} onClose={closeCartHandler}>
               <Cart onClose ={closeCartHandler}/>
            </Modal>
        </header>
    )
}

export default Header