import { useDispatch } from "react-redux";
import Button from "../Button";
import { setModalContent, toggleState } from "../../redux/features/modalSlice";
import { useLocation } from "react-router-dom";
import { removeItemFromCart } from "../../redux/features/deliverySlice";
export default function DeliverItem(props) {
  const dispatch = useDispatch();
  const { name, price, weight, productId } = props;
  const location = useLocation();
  return (
    <li className="delivery-item">
      <p className="delivery-item__name">{name}</p>
      <p className="delivery-item__price">Weight: {weight}g</p>
      <p className="delivery-item__weight">Price: {price}$</p>
      {location.pathname === '/cart' ? (
        <Button
          text={"Remove from cart"}
          onButtonClick={() => {
            dispatch(removeItemFromCart(productId));
          }}
        />
      ) : (
        <Button
          text={"Add to cart"}
          onButtonClick={() => {
            dispatch(setModalContent({ dispatch, item: props }));
            dispatch(toggleState());
          }}
        />
      )}
    </li>
  );
}
