import { useSelector } from "react-redux";
import DeliveryItem from "../../components/DeliveryItem";

export default function Shop() {
  const shop = useSelector((state) => state.delivery.selectedShop);

  return (
    <section className="shop-secton">
      <div className="container shop-section__container">
        <h2 className="section-title">{!shop ? "Shop name" : shop.name}</h2>
        <div className="shop-section__content">
          {!shop ? (
            <p className="loading">Loading...</p>
          ) : (
            shop.products.map((item) => <DeliveryItem {...item} />)
          )}
        </div>
      </div>
    </section>
  );
}
