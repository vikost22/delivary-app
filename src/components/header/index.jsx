import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const addedCount = useSelector(state=>state.delivery.cartItems.length);
  console.log(addedCount);
  return (
    <header className="main-header">
      <div className="container main-header__container">
        <Link to={'/'}>
          <p className="main-header__logo">Delivery App</p>
        </Link>
        <Link to={'/cart'}>
          <div className="cart">
            <img
              src="/images/icons/cart.png"
              alt=""
              width={"30"}
              height={"30"}
            />
            <span className={addedCount ? "selected-counter" : "d-none"}>
            {addedCount}
          </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
