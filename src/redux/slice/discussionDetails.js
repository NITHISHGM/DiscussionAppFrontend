import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOTURL } from "../..";
export const getSingleDiscussion = createAsyncThunk(
  "disussion/getSingleDiscussion",
  async (id) => {
    try {
      const response = await axios.get(`${ROOTURL}api/discussion/${id}`, {
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

const getSingleDiscussionSlice = createSlice({
  name: "disussion",
  initialState: {
    data: [],
    status: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleDiscussion.pending, (state) => {
        state.status = true;
      })
      .addCase(getSingleDiscussion.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(getSingleDiscussion.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message;
      });
  },
});
export default getSingleDiscussionSlice.reducer;
