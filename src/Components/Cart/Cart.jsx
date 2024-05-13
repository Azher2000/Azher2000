import CartContext from "../../Context/CartContext";
import useWindowSize from "../../Hooks/useWindowSize";
import { useContext } from "react";

function Cart() {
  const { cart } = useContext(CartContext);
  const cartList = Object.values(cart);
  const windowSize = useWindowSize();
  //console.log(windowSize);
  let totalPrice = 0;
  function getTotal() {
    cartList.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
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

export default Cart;
