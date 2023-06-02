import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectShop } from "../../redux/features/deliverySlice.js";
import Button from "../Button";

export default function ShopItem(props) {
  const dispatch = useDispatch();
  const { name, image } = props.shop;
  const navigate = useNavigate();

  function selectNewShop() {
    dispatch(selectShop(props.shop));
  }

  return (
    <li className="shop-item">
      <img src={image} alt="" width={250} className="shop-item__image" />
      <div className="shop-item__info">
        <p className="shop-item__name">{name}</p>
        <Button
          text="Show more"
          onButtonClick={() => {
            selectNewShop();
            navigate("/shop");
          }}
        />
      </div>
    </li>
  );
}
