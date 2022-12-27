import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ dispatch }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users?id=1"
      );
      const user = response.data;
      dispatch(setUser(user));
    } catch (error) {
      dispatch(clearUser());
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
export const getUser = (state) => state.user;
