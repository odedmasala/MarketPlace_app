import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: {},
  total: 0,
};

// the state need to get a product

const cartSlice = createSlice({
  name: "cart",
  initialState:initialState ,
  reducers: {
    addItem: (state, action) => {
      const { storeId, product } = action.payload;
      if (state.items[storeId]) {
        // store already exists in the cart
        const store = state.items[storeId];
        const existingProduct = store.products.find(p => p._id === product._id);
        if (existingProduct) {
          // product already exists in the store, update its quantity
          existingProduct.quantity += product.quantity;
        } else {
          // product doesn't exist in the store, add it
          store.products.push(product);
        }
      } else {
        // store doesn't exist in the cart, create a new store with the product
        state.items[storeId] = {
          id: storeId,
          name: action.payload.name,
          imageUrl: action.payload.imageUrl,
          products: [product],
        };
      }
      state.total += product.price * product.quantity;
    },
    incrementQuantity:(state, action)=>{
      const { storeId, product } = action.payload;
      const store = state.items;
      // const existingProduct = store.products.find(p => p._id === product._id);
      // if (existingProduct) {
      //   // product already exists in the store, update its quantity
      //   existingProduct.quantity += product.quantity;
      // }
    },
    removeItem: (state, action) => {
      const { storeId, product } = action.payload;
      if (state.items.has(storeId)) {
        const store = state.items.get(storeId);
        if (store.products.has(product.id)) {
          // remove the product from the store's products
          store.products.get(product.id).quantity -= product.quantity;
          if (store.products.get(product.id).quantity <= 0) {
            const product = store.products.get(product.id);
            store.products.delete(product);
            state.total -= product.price * product.quantity;
          }
        }
      }
    },
  },
});

export const selectCartTotal = (state) => state.cart.total;
export const selectState = (state) => state;
export const selectCart = (state) => state.cart.items;
export const selectCartItems = (state) => Array.from(state.cart.items.values());

export const getStoreTotal = (store) => {
  return Array.from(store.products.values()).reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export const { addItem, removeItem, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
