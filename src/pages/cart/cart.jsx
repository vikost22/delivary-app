import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";

export default function Cart() {
  const addedItems = useSelector((state) => state.delivery.cartItems);
  const total = addedItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  return (
    <section className="cart-secton">
      <div className="container cart-section__container">
        <h2 className="section-title">Cart</h2>
        <div className="cart-section__content">
          {!addedItems ? (
            <p className="loading">Loading</p>
          ) : (
            addedItems.map((item) => <CartItem {...item} />)
          )}
        </div>
        <p className="cart-section__total">Total: {total}$</p>
      </div>
    </section>
  );
}
