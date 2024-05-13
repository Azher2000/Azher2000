import "./styles.css";
import ProductsPage from "./Pages/ProductsPage";
import { useState } from "react";
import CartContext from "./Context/CartContext";
import { Switch, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";

export default function App() {
  console.log("app");

  //cart
  // {

  // }

  // var newState = {...state, items: {
  //   ...items,
  //   state.items[product.id]: {
  //  ...state.items[product.id],
  //  quantity: state.items[product.id].quantity+1
  //}
  //}}
  // {
  // k:10,
  //items: {
  // 1:{
  //   title: "iphone",
  //   price: "2000",
  //  quantity: 0
  // }
  // 2: {
  //   title: "iphone2",
  //   price: "2000",
  //   quantity: 1
  // }
  //3:{
  //   title: "iphone3",
  //   price: "2000",
  //   quantity: 1
  // }
  // }}
  const [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0,
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id]; // delete deltes a key from an object
    }
    setCart(newCart);
  }
  // const cartKeysLength = Object.keys(cart).length;
  //if(url has cart)
  // return (CartPage/)
  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity}}>
      <Switch>
        <Route exact={true} path="/" component={ProductsPage} />
        <Route exact={true} path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </CartContext.Provider>
  );
}
