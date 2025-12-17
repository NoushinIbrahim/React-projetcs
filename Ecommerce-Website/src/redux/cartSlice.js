import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeitem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addItem, removeitem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
