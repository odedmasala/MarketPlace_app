import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// create a slice for the user state
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // regular action to set the user
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    // handle the async thunk action
    [fetchUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state) => state.user;
