import React, { useContext } from 'react';
import CartContext from '../store/CartContext';
import Button from './UI/Button';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formattedTotal = new Intl.NumberFormat('et-EE', {
    style: 'currency',
    currency: 'EUR',
  }).format(totalAmount);

  const handleCheckout = () => {
    alert('Thanks for your order!')
    cartCtx.clearCart();
    onClose();
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartCtx.items.length === 0 && <p>Your cart is empty.</p>}
      {cartCtx.items.length > 0 && (
        <>
          <ul>
            {cartCtx.items.map((item) => (
              <li key={item.id} className="cart-item">
                <p>
                  {item.name} x {item.quantity}
                </p>
                <p>{(item.price * item.quantity).toFixed(2)} €</p>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: {formattedTotal}</p>
          <div className="modal-actions">
            <Button textOnly onClick={onClose}>Close</Button>
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
