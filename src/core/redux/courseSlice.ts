import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

type IinitialState = {
 courses: any[];
 isLoading: boolean;
};

const initialState: IinitialState = {
 courses: [],
 isLoading: false,
};

export const getAllCourses: any = createAsyncThunk(
 "course/getAllCourses",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.get("course/getall");
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const getCoursesByPaginate: any = createAsyncThunk(
 "course/getCoursesByPaginate",
 async ({ pagenumber, pagesize }: any, thunkApi) => {
  console.log(pagenumber);
  try {
   const resp: any = await customFetch.get(
    `course/list?pagenumber=${pagenumber}&pagesize=${pagesize}`
   );
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const createCourse: any = createAsyncThunk(
 "course/createCourse",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.post("course", obj);
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const deleteCourse: any = createAsyncThunk(
 "course/deleteCourse",
 async (id, thunkApi) => {
  try {
   const resp: any = await customFetch.delete(`course/${id}`);
   return thunkApi.fulfillWithValue({ ...resp, selectedId: id });
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

const courseSlice = createSlice({
 name: "course",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(getAllCourses.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(getAllCourses.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.courses = payload.data.result;
  });
  builder.addCase(getAllCourses.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(getCoursesByPaginate.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(getCoursesByPaginate.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.courses = payload.data.result;
  });
  builder.addCase(getCoursesByPaginate.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(createCourse.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(createCourse.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
   state.courses = [...state.courses , payload.data.result];
  });
  builder.addCase(createCourse.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(deleteCourse.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(deleteCourse.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
   const Index = state.courses.findIndex(
    (course: any) => course._id === payload.selectedId
   );
   if (Index >= 0) {
    state.courses.splice(
     state.courses.findIndex(
      (course: any) => course._id === payload.selectedId
     ),
     1
    );
   }
  });
  builder.addCase(deleteCourse.rejected, (state, { payload }) => {
   state.isLoading = false;
  });
 },
});

export default courseSlice.reducer;
