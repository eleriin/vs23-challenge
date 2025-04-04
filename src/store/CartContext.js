import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return { items: [...state.items, action.item] };
  }
  return state;
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCart({ type: "ADD", item });
  };

  return (
    <CartContext.Provider value={{ items: cartState.items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
