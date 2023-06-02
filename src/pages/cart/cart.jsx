import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import Button from "../../components/Button";
import { removeItemsFromCart } from "../../redux/features/deliverySlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addedItems = useSelector((state) => state.delivery.cartItems);
  const total = addedItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  function order() {
    console.table(addedItems);
    addedItems.forEach((item) => {
      dispatch(removeItemsFromCart(item.productId));
    });
    navigate("/");
  }
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
        <div className="order">
          <p className="cart-section__total">Total: {total}$</p>
          <Button text={"Buy"} onButtonClick={order} />
        </div>
      </div>
    </section>
  );
}
