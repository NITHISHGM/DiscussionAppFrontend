import { combineReducers } from "@reduxjs/toolkit";
import discussionSlice from "./slice/discussionSlice";
import discussionDetails from "./slice/discussionDetails";
import getSingleIdComment from "./slice/getSingleIdComment";
const rootReducer = combineReducers({
  getAllDiscussion: discussionSlice,
  getSingleDiscussion: discussionDetails,
  getCommentsForSpecificId: getSingleIdComment,
});

export default rootReducer;
