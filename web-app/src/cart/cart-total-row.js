import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { CartContext } from "./cart-context";

const CartTotalRow = () => {
  const { getTotalCost } = useContext(CartContext);
  const totalCost = getTotalCost();
  const tax = totalCost * 0.047;

  return (
    <div className="totalrow">
      {totalCost > 0 ? (
        <>
          <section>
            <p>Subtotal: ${totalCost.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Total:</h5> <p>${(totalCost + tax).toFixed(2)}</p>
            <Button>CHECKOUT</Button>
          </section>
        </>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default CartTotalRow;
