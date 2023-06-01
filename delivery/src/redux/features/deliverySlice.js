import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedShop: JSON.parse(localStorage.getItem("selectedShop")) || null,
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
};

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    selectShop: (state, action) => {
      state.selectedShop = action.payload;
      localStorage.setItem("selectedShop", JSON.stringify(action.payload));
    },
    addItemToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = [...state.cartItems].filter(item=>item.productId!==action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  },
});

export const { selectShop, addItemToCart, removeItemFromCart } = deliverySlice.actions;

export default deliverySlice.reducer;
