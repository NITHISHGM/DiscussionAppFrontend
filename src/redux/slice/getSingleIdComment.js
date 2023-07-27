import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOTURL } from "../..";
export const getCommentsForSpecificId = createAsyncThunk(
  "singleIdComment/getCommentsForSpecificId",
  async (id) => {
    try {
      const response = await axios.get(`${ROOTURL}api/commnet/${id}`, {
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

const getSingleIdCommentSlice = createSlice({
  name: "singleIdComment",
  initialState: {
    SingleIDCommentData: [],
    SingleIDCommentStatus: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsForSpecificId.pending, (state) => {
        state.SingleIDCommentStatus = true;
      })
      .addCase(getCommentsForSpecificId.fulfilled, (state, action) => {
        state.SingleIDCommentStatus = false;
        state.SingleIDCommentData = action.payload;
      })
      .addCase(getCommentsForSpecificId.rejected, (state, action) => {
        state.SingleIDCommentStatus = true;
        state.error = action.error.message;
      });
  },
});
export default getSingleIdCommentSlice.reducer;
