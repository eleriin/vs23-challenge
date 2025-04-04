import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
    );
    
    let updatedItems;

    if(existingItemIndex !== -1){
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
            ...existingItem, 
            quantity: existingItem.quantity + 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
    } else {
        const newItem = {
            ...action.item, 
            quantity:1,
        };
        updatedItems = [...state.items, newItem];
    }
    
    return { items: updatedItems};
  }

  if (action.type === 'CLEAR'){
    return { items: []};
  }
  
  return state;
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCart({ type: "ADD", item });
  };

  const clearCart = ()=>{
    dispatchCart({type: 'CLEAR'});
  }

  return (
    <CartContext.Provider value={{ items: cartState.items, addItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
