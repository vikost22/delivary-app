import { useDispatch } from "react-redux";
import Button from "../Button";
import { setModalContent, toggleState } from "../../redux/features/modalSlice";

export default function DeliveryItem(props) {
  const dispatch = useDispatch();
  const { name, price, weight } = props;

  return (
    <li className="delivery-item">
      <p className="delivery-item__name">{name}</p>
      <p className="delivery-item__price">Weight: {weight}g</p>
      <p className="delivery-item__weight">Price: {price}$</p>
      <Button
        text={"Add to cart"}
        onButtonClick={() => {
          dispatch(setModalContent({ dispatch, item: props }));
          dispatch(toggleState());
        }}
      />
    </li>
  );
}
