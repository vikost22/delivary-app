import { useSelector } from "react-redux";
import DeliverItem from "../../components/DeliveryItem";

export default function Cart() {
  const addedItems = useSelector((state) => state.delivery.cartItems);
  const total = addedItems.reduce((sum, item)=>sum+item.price, 0);
  return (
    <section className="cart-secton">
      <div className="container cart-section__container">
        <h2 className="section-title">Cart</h2>
        <div className="cart-section__content">
          {!addedItems ? (
            <p className="loading">Loading</p>
          ) : (
            addedItems.map((item) => <DeliverItem {...item} />)
          )}
        </div>
        <p className="cart-section__total">Total: {total}$</p>
      </div>
    </section>
  );
}
