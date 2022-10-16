import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

type IinitialState = {
 teachers: [];
 isLoading: boolean;
};

const initialState: IinitialState = {
 teachers: [],
 isLoading: false,
};

export const getAllTeachers: any = createAsyncThunk(
 "teacher/getAllTeachers",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.get("employee/getallteachers");
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const deleteTeacher: any = createAsyncThunk(
 "teacher/deleteTeacher",
 async (id, thunkApi) => {
  try {
   const resp: any = await customFetch.delete(`teacher/${id}`);
   return thunkApi.fulfillWithValue({ ...resp, selectedId: id });
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);



const teacherSlice = createSlice({
 name: "teacher",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(getAllTeachers.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(getAllTeachers.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.teachers = payload.data.result;
  });
  builder.addCase(getAllTeachers.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(deleteTeacher.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(deleteTeacher.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
   const Index = state.teachers.findIndex(
    (teacher: any) => teacher._id === payload.selectedId
   );
   if (Index >= 0) {
    state.teachers.splice(
     state.teachers.findIndex(
      (teacher: any) => teacher._id === payload.selectedId
     ),
     1
    );
   }
  });
  builder.addCase(deleteTeacher.rejected, (state, { payload }) => {
   state.isLoading = false;
  });


 },
});

export default teacherSlice.reducer;
