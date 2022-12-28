import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const { storeId, product } = action.payload;
      if (state.items[storeId]) {
        // store already exists in the cart
        const store = state.items[storeId];
        const existingProduct = store.products.find(
          (p) => p._id === product._id
        );
        if (existingProduct) {
          existingProduct.quantity += product.quantity;
        } else {
          store.products.push(product);
        }
      } else {
        state.items[storeId] = {
          id: storeId,
          name: action.payload.name,
          imageUrl: action.payload.imageUrl,
          products: [product],
        };
      }
      state.total += product.price * product.quantity;
    },
    removeItem: (state, action) => {
      const { storeId, product } = action.payload;
      if (state.items[storeId]) {
        const store = state.items[storeId];
        const existingProduct = store.products.find(
          (p) => p._id === product._id
        );
        if (existingProduct) {
          if (existingProduct.quantity === 1) {
            const index = store.products.indexOf(existingProduct);
            store.products.splice(index, 1);
            state.total -= existingProduct.price * existingProduct.quantity;
          } else {
            existingProduct.quantity -= 1;
            state.total -= existingProduct.price;
          }
          if (store.products.length === 0) {
            delete state.items[storeId];
          }
        }
      }
    },
    clearProduct: (state, action) => {
      const { storeId, product } = action.payload;
      if (state.items[storeId]) {
        const store = state.items[storeId];
        const existingProduct = store.products.find(
          (p) => p._id === product._id
        );
        if (existingProduct) {
          const index = store.products.indexOf(existingProduct);
          store.products.splice(index, 1);
          state.total -= existingProduct.price * existingProduct.quantity;
          if (store.products.length === 0) {
            delete state.items[storeId];
          }
        }
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.total = 0;
    },
  },
});
export const { addItem, removeItem, clearProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
export const selectAllCartItems = (state, storeId) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
export const selectCart = (state) => state.cart.items;
export const selectCartItems = (state) => Array.from(state.cart.items.values());
export const selectState = (state) => state;

export const getStoreTotalPrice = (state, storeId) => {
  if (state.cart.items) {
    const stores = Object.values(state.cart.items);
    const store = stores.find((store) => store.id === storeId);
    if (!store || !store.products) {
      return 0;
    }
    return store.products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  } else {
    return 0;
  }
};

export const getProductTotalPrice = (state, productId) => {
  // Total price for all items of a specific product
  let totalPrice = 0;
  if (state.cart.items) {
    Object.values(state.cart.items).forEach((store) => {
      store.products.forEach((product) => {
        if (product._id === productId) {
          totalPrice += product.price * product.quantity;
        }
      });
    });
  }
  return totalPrice;
};
export const getNumberOfProducts = (state) => {
  let count = 0;
  for (const storeId in state.cart.items) {
    const store = state.cart.items[storeId];
    for (const product of store.products) {
      count += product.quantity;
    }
  }
  return count;
};
