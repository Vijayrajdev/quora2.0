import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/UserSlice";
import questionReducer from "../Feature/QuestionSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});
