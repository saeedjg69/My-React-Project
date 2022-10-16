import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "./core/redux/userSlice";
import courseSlice from "./core/redux/courseSlice";
import lessonSlice from "./core/redux/lessonSlice";
import newsSlice from "./core/redux/newsSlice";
import studentSlice from "./core/redux/studentSlice";
import teacherSlice from "./core/redux/teacherSlice";
import commentSlice from "./core/redux/commentSlice";

const store = configureStore({
 reducer: {
  user: userSlice,
  course: courseSlice,
  lesson: lessonSlice,
  news: newsSlice,
  student: studentSlice,
  teacher: teacherSlice,
  comment: commentSlice,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
