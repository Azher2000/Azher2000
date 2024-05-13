
import { useSelector } from "react-redux";

import useWindowSize from "../../Hooks/useWindowSize";


function ReduxCart() {

  const cart = useSelector((state) => {
    console.log(state);
    return state.cart.items;
  });
  // const { cart } = useContext(CartContext);
  const cartList = Object.values(cart);
  const windowSize = useWindowSize();
  //console.log(windowSize);
  let totalPrice = 0;
  function getTotal() {
    cartList.forEach((cartItem) => {
      totalPrice += cartItem.price.value * cartItem.quantity;
    });
    return totalPrice;
  }

  if (cartList.length === 0) {
    return <div>Cart is empty man</div>;
  } else {
    return (
      <>
        <ol>
          {cartList.map((item) => (
            <li key={item.id}>
              <div>{item.title}</div>
              <div>quantity-{item.quantity}</div>
            </li>
          ))}
        </ol>
        <div>Total: {getTotal()}</div>
      </>
    );
  }
  //return <div>Cart</div>;
}

export default ReduxCart;
