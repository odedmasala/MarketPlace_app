import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "storeManagement/getProducts",
  async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "storeManagement/createProduct",
  async (product) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        product
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "storeManagement/updateProduct",
  async (product) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/products/${product.id}`,
        product
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "storeManagement/deleteProduct",
  async (id) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/products/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }
);

const storeManagementSlice = createSlice({
  name: "storeManagement",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      // console.log(action);
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(createProduct.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(updateProduct.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index] = action.payload;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default storeManagementSlice.reducer;
