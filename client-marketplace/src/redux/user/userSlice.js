import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
};
// First, create the thunk
const USERS_URL = ``;
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    extraReducers(builder) {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.user = {
          firstName: action.payload.firstName,
          lastName: action.payload.firstName,
          email: action.payload.email,
          image: action.payload.image.url ? action.payload.image.url : null,
        };
      });
    },
  },
});
export const selectUser = (state) => state.user;
export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
