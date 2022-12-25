import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: new Map(),
  total: 0,
};

// the state need to get a product

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: new Map(),
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { storeId, product } = action.payload;
      if (state.items.has(storeId)) {
        // store already exists in the cart
        const store = state.items.get(storeId);
        if (store.products.has(product.id)) {
          // product already exists in the store, update its quantity
          store.products.get(product.id).quantity += product.quantity;
        } else {
          // product doesn't exist in the store, add it
          store.products.set(product.id, product);
        }
      } else {
        // store doesn't exist in the cart, create a new store with the product
        state.items.set(storeId, {
          id: storeId,
          name: action.payload.name,
          imageUrl: action.payload.imageUrl,
          products: new Map([[product.id, product]]),
        });
      }
      state.total += product.price * product.quantity;
    },
    removeItem: (state, action) => {
      const { storeId, productId } = action.payload;
      if (state.items.has(storeId)) {
        const store = state.items.get(storeId);
        if (store.products.has(productId)) {
          // remove the product from the store's products
          const product = store.products.get(productId);
          store.products.delete(productId);
          state.total -= product.price * product.quantity;
        }
      }
    },
  },
});

export const selectCartTotal = (state) => state.cart.total;
export const selectCartItems = (state) => Array.from(state.cart.items.values());

export const getStoreTotal = (store) => {
  return Array.from(store.products.values()).reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
