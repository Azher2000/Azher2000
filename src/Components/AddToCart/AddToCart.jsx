import CartContext from "../../Context/CartContext";
import { useContext } from "react";

function AddToCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  function addQuantity() {
    increaseQuantity(product);
  }

  function substractQuantity() {
    decreaseQuantity(product);
  }
  let quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity > 0) {
    return (
      <div>
        <button onClick={substractQuantity}>-</button>
        <span> {quantity} </span>
        <button onClick={addQuantity}>+</button>
      </div>
    );
  } else {
    return <button onClick={addQuantity}>AddToCart</button>;
  }
}

export default AddToCart;
