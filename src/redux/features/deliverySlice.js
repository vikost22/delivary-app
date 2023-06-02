import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedShop: JSON.parse(localStorage.getItem("selectedShop")) || null,
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    selectShop: (state, action) => {
      state.selectedShop = action.payload;
      localStorage.setItem("selectedShop", JSON.stringify(action.payload));
    },

    addItemToCart: (state, { payload }) => {
      const itemInd = state.cartItems.findIndex(
        (item) => item.productId === payload.productId
      );
      if (itemInd !== -1) {
        const prevState = [...state.cartItems];
        const prevCount = state.cartItems[itemInd].count;
        const updatedItems = [
          ...prevState.slice(0, itemInd),
          { ...payload, count: prevCount + 1 },
          ...prevState.slice(itemInd + 1),
        ];
        state.cartItems = updatedItems;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, count: 1 }];
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItemsFromCart: (state, action) => {
      state.cartItems = [...state.cartItems].filter(
        (item) => item.productId !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItemFromCart: (state, { payload }) => {
      const itemInd = state.cartItems.findIndex(
        (item) => item.productId === payload.productId
      );
      const prevState = [...state.cartItems];
      const prevCount = state.cartItems[itemInd].count;
      if (prevCount === 1) return;
      const updatedItems = [
        ...prevState.slice(0, itemInd),
        { ...payload, count: prevCount - 1 },
        ...prevState.slice(itemInd + 1),
      ];
      state.cartItems = updatedItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    resetCartItems: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  selectShop,
  addItemToCart,
  removeItemsFromCart,
  removeItemFromCart,
  resetCartItems,
} = deliverySlice.actions;

export default deliverySlice.reducer;
