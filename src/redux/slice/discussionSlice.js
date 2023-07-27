import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOTURL } from "../..";
export const getAllDiscussion = createAsyncThunk(
  "disussion/getAllDiscussion",
  async () => {
    try {
      const response = await axios.get(`${ROOTURL}api/discussion`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      // Handle any errors here
      throw error;
    }
  }
);

const getAllDiscussionSlice = createSlice({
  name: "alldisussions",
  initialState: {
    data: [],
    status: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDiscussion.pending, (state) => {
        state.status = true;
      })
      .addCase(getAllDiscussion.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(getAllDiscussion.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message;
      });
  },
});
export default getAllDiscussionSlice.reducer;
