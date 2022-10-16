import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

type IinitialState = {
 lessons: any[];
 categories: [];
 isLoading: boolean;
};

const initialState: IinitialState = {
 lessons: [],
 categories: [],
 isLoading: false,
};

export const getAllCategories: any = createAsyncThunk(
 "lesson/getAllCategories",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.get("category/getall");
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const getAllLessons: any = createAsyncThunk(
 "lesson/getAllLessons",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.get("lesson");
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const createLesson: any = createAsyncThunk(
 "lesson/createLesson",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.post("lesson/add", obj);
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const deleteLesson: any = createAsyncThunk(
 "lesson/deleteLesson",
 async (id, thunkApi) => {
  try {
   const resp: any = await customFetch.delete(`lesson/${id}`);
   return thunkApi.fulfillWithValue({ ...resp, selectedId: id });
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

const lessonSlice = createSlice({
 name: "lesson",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(getAllCategories.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.categories = payload.data.result;
  });
  builder.addCase(getAllCategories.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(getAllLessons.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(getAllLessons.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.lessons = payload.data.result;
  });
  builder.addCase(getAllLessons.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(createLesson.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(createLesson.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
   state.lessons = [...state.lessons, payload.data.result];
  });
  builder.addCase(createLesson.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(deleteLesson.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(deleteLesson.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
   const Index = state.lessons.findIndex(
    (lesson: any) => lesson._id === payload.selectedId
   );
   if (Index >= 0) {
    state.lessons.splice(
     state.lessons.findIndex(
      (lesson: any) => lesson._id === payload.selectedId
     ),
     1
    );
   }
  });
  builder.addCase(deleteLesson.rejected, (state, { payload }) => {
   state.isLoading = false;
  });
 },
});

export default lessonSlice.reducer;
