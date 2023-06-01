import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./deliverySlice";
import Button from "../../components/Button";

const initialState = {
  modalContent: {
    title: "",
    text: "",
    actions: [],
    closeButton: true,
  },
  modalIsOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
    setModalContent: (state, { payload }) => {
      state.modalContent = {
        title: " Add to cart?",
        text: "Click ok to continue",
        actions: [
          <Button
            key={1}
            text={"Ok"}
            onButtonClick={() => {
              payload.dispatch(addItemToCart(payload.item));
              payload.dispatch(toggleState());
            }}
          />,
        ],
        closeButton: true,
      };
    },
  },
});

export const { toggleState, setModalContent } = modalSlice.actions;

export default modalSlice.reducer;
