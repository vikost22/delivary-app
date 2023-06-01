import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectShop } from "../../redux/features/deliverySlice.js";

export default function ShopItem(props) {
  const dispatch = useDispatch();
  const { name, image } = props.shop;
  function selectNewShop() {
    dispatch(selectShop(props.shop));
  }
  return (
    <li className="shop-item">
      <img src={image} alt="" width={250} className="shop-item__image" />
      <div className="shop-item__info">
        <p className="shop-item__name">{name}</p>
        <Link to={'/shop'} className="shop-item__more" onClick={selectNewShop}>
          Show menu
        </Link>
      </div>
    </li>
  );
}
