import { createContext } from "react";
//import cartReducer from "../Store/cart";

const CartContext = createContext({
  cart: {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  
});

export default CartContext;
