import { useDispatch } from "react-redux";
import Button from "../Button";
import { setModalContent, toggleState } from "../../redux/features/modalSlice";
import { useLocation } from "react-router-dom";
import {
  removeItemsFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../redux/features/deliverySlice";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const { name, price, weight, productId, count } = props;
  return (
    <li className="cart-item">
      <div className="cart-item__info">
        <p className="cart-item__name">{name}</p>
        <p className="cart-item__weight">Price: {price}$</p>
      </div>
      <div className="cart-item__counter">
        <button
          onClick={() => dispatch(removeItemFromCart(props))}
          className="cart-item__dec"
        >
          -
        </button>
        <div className="cart-item__count">{count}</div>
        <button
          onClick={() => dispatch(addItemToCart(props))}
          className="cart-item__inc"
        >
          +
        </button>
      </div>
      <Button
        text={"Remove from cart"}
        onButtonClick={() => {
          dispatch(removeItemsFromCart(productId));
        }}
      />
    </li>
  );
}
