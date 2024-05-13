import { useSelector, useDispatch } from "react-redux";

function ReduxAddToCart({ product }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => {
    return state.cart.items[product.id]?.quantity || 0;
  });
  function addQuantity() {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function substractQuantity() {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }
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

export default ReduxAddToCart;
