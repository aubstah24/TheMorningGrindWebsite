import { useContext } from "react";
import { CartContext } from "./cart-context";
import { CartProductList } from "./cart-product-list";
import CartTotalRow from "./cart-total-row";

export const CartPage = () => {
  const cartTotal = GetCartTotal();

  if (cartTotal > 0) {
    return (
      <div className="cart-wrapper">
        <section className="product-section">
          <CartProductList />
        </section>

        <section className="product-totals">
          <CartTotalRow />
        </section>
      </div>
    );
  }

  return (
    <div className="empty-cart">
      <h1>Your cart is empty!</h1>
    </div>
  );
};

const GetCartTotal = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return 0;
  } else {
    return cartItems.length;
  }
};
