import { useGetAllShopsQuery } from "../../redux/services/deliveryApi";
import ShopItem from "../../components/ShopItem";

export default function Home() {
  const { data } = useGetAllShopsQuery("");

  return (
    <section className="home-section">
      <div className="container home-section__container">
        <h2 className="section-title">All shops</h2>
        {!data ? (
          <p className="loading">Loading</p>
        ) : (
          data.map((shop) => <ShopItem shop={shop} />)
        )}
      </div>
    </section>
  );
}
