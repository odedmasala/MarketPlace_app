import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getProductsApi,
  createProductApi,
  updateProductApi,
  deleteProductsApi,
} from "./serverSlice";

export const getProductsAsync = createAsyncThunk(
  "storeManagement/getProducts",
  async () => {
    try {
      const data = await getProductsApi();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  );
  export const getMangerAsync = createAsyncThunk(
    "storeManagement/getMangerAsync",
    async () => {
      try {
        const data = await getMangerAsync();
        console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createProductAsync = createAsyncThunk(
  "storeManagement/createProduct",
  async (product) => {
    try {
      const response = await createProductApi(product);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateProductAsync = createAsyncThunk(
  "storeManagement/updateProduct",
  async (product) => {
    try {
      const response = await updateProductApi(product);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "storeManagement/deleteProduct",
  async (id) => {
    try {
      await deleteProductsApi(id);
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  managerSystem: [],
  stores: [],
  sections: [],
  products: [],
  loading: false,
  error: null,
};
const storeManagementSlice = createSlice({
  name: "storeManagement",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductsAsync.fulfilled]: (state, action) => {

      state.products = action.payload;
    },
    [getMangerAsync.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.managerSystem = action.payload;
    },
    [createProductAsync.fulfilled]: (state, action) => {
      state.products.push(action.payload);
    },
    [updateProductAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[index] = action.payload;
    },
    [deleteProductAsync.fulfilled]: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export default storeManagementSlice.reducer;
