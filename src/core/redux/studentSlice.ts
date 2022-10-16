import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

type IinitialState = {
 students: [];
 isLoading: boolean;
};

const initialState: IinitialState = {
 students: [],
 isLoading: false,
};

export const getAllStudents: any = createAsyncThunk(
 "student/getAllStudents",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.get("student/getall");
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

// export const getStudentById: any = createAsyncThunk(
//  "student/getAllStudents",
//  async (id, thunkApi) => {
//   try {
//    const resp: any = await customFetch.get(`student/${id}`);
//    return thunkApi.fulfillWithValue(resp);
//   } catch (error) {
//    return thunkApi.rejectWithValue(error);
//   }
//  }
// );

export const deleteStudent: any = createAsyncThunk(
 "student/deleteStudent",
 async (id, thunkApi) => {
  try {
   const resp: any = await customFetch.delete(`student/${id}`);
   return thunkApi.fulfillWithValue({ ...resp, selectedId: id });
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const addStudentToCourse: any = createAsyncThunk(
 "student/addStudentToCourse",
 async ({ id, obj }: any, thunkApi) => {
  try {
   const resp: any = await customFetch.post(
    `course/addStudentToCourse/${id}`,
    obj
   );
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const removeStudentFromCourse: any = createAsyncThunk(
 "student/removeStudentFromCourse",
 async ({ id, obj }: any, thunkApi) => {
  try {
   const resp: any = await customFetch.post(
    `course/removeStudentFromCourse/${id}`,
    obj
   );
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

const studentSlice = createSlice({
 name: "student",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(getAllStudents.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(getAllStudents.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.students = payload.data.result;
  });
  builder.addCase(getAllStudents.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  //   builder.addCase(getStudentById.pending, (state) => {
  //    state.isLoading = true;
  //   });
  //   builder.addCase(getStudentById.fulfilled, (state, { payload }) => {
  //    state.isLoading = false;
  //    // state.students = payload.data.result;
  //   });
  //   builder.addCase(getStudentById.rejected, (state, { payload }) => {
  //    state.isLoading = false;
  //   });

  builder.addCase(deleteStudent.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(deleteStudent.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
   const Index = state.students.findIndex(
    (lesson: any) => lesson._id === payload.selectedId
   );
   if (Index >= 0) {
    state.students.splice(
     state.students.findIndex(
      (lesson: any) => lesson._id === payload.selectedId
     ),
     1
    );
   }
  });
  builder.addCase(deleteStudent.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(addStudentToCourse.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(addStudentToCourse.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
  });
  builder.addCase(addStudentToCourse.rejected, (state, { payload }) => {
   state.isLoading = false;
   toast.error(payload.response.data.message[0].message);
  });

  builder.addCase(removeStudentFromCourse.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(removeStudentFromCourse.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
  });
  builder.addCase(removeStudentFromCourse.rejected, (state, { payload }) => {
   state.isLoading = false;
   toast.error(payload.response.data.message[0].message);
  });
 },
});

export default studentSlice.reducer;
