import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserApi } from "./AsyncCall";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const data = await fetchUserApi();
    return data;
  } catch (error) {
    console.log(error);
  }
});
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
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload?.user;
      state.loading = false;
    },
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.rejected]: (state, action) => {
      state.user = null
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
export const getUser = (state) => state.user?.user;
