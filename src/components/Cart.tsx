import { useState } from "react";
import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const { confirm, setConfirm } = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, cart, totalItems, totalPrice } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thanks you</h2>
  ) : (
    <>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>
      <div>
        <p>Total Item: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button disabled={!totalItems} onClick={onSubmitOrder}>
          Place Order
        </button>
      </div>
    </>
  );
  const content = <main>{pageContent}</main>;
  return content;
};

export default Cart;
