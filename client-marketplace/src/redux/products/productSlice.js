import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quantity:1
};

// the state need to get a product

const productSlice = createSlice({
  name: "product",
  initialState:initialState ,
  reducers: {
    increment: (state) => {
        state.quantity+=1
    },
    decrement: (state) => {
        state.quantity-=1
          }
        }
      }
);

export const selectState = (state) => state.quantity;


export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer;
