import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";
import {
 addUserToLocalStorage,
 getUserFromLocalStorage,
 clearStorage,
} from "../utils/localStorage";

const initialState = {
 user: getUserFromLocalStorage(),
 isLoading: false,
 token: "",
};
export const loginStudent: any = createAsyncThunk(
 "user/loginStudent",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.post("auth/login", obj);
   if (resp.data.success === true) return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const loginEmployee: any = createAsyncThunk(
 "user/loginEmployee",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.post("auth/employee/login", obj);
   if (resp.data.success === true) return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const RegisterStudent: any = createAsyncThunk(
 "user/RegisterStudent",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.post("auth/register", obj);
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const RegisterEmployee: any = createAsyncThunk(
 "user/RegisterEmployee",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.post("auth/employee/register", obj);
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const ForgetPassword: any = createAsyncThunk(
 "user/ForgetPassword",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.post("forgetpassword", obj);
   if (resp.data.success === true) return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const editProfile: any = createAsyncThunk(
 "user/editProfile",
 async ({ id, obj, role }: any, thunkApi) => {
  try {
   const resp: any = await customFetch.put(`${role}/${id}`, obj);
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

// export const upload: any = createAsyncThunk(
//   "user/upload",
//   async (obj, thunkApi) => {
//    try {
//     const resp: any = await customFetch.post("upload/image", obj);
//    return thunkApi.fulfillWithValue(resp);
//    } catch (error) {
//     return thunkApi.rejectWithValue(error);
//    }
//   }
//  );

const userSlice = createSlice({
 name: "user",
 initialState,

 reducers: {
  logoutUser: (state) => {
   state.user = null;
   clearStorage();
  },
 },
 extraReducers: (builder) => {
  builder.addCase(loginStudent.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(loginStudent.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.user = payload.data.result.studentModel;
   state.token = payload.data.result.jwtToken;
   addUserToLocalStorage(state.user);
   localStorage.setItem("token", state.token);
   toast.success(payload.data.message[0].message);
  });
  builder.addCase(loginStudent.rejected, (state, { payload }) => {
   state.isLoading = false;
   toast.error(payload.response.data.message.message[0].message);
  });

  builder.addCase(loginEmployee.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(loginEmployee.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.user = payload.data.result.employeeModel;
   state.token = payload.data.result.jwtToken;
   addUserToLocalStorage(state.user);
   localStorage.setItem("token", state.token);
   toast.success(payload.data.message[0].message);
  });
  builder.addCase(loginEmployee.rejected, (state, { payload }) => {
   state.isLoading = false;
   toast.error(payload.response.data.message.message[0].message);
  });

  builder.addCase(RegisterStudent.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(RegisterStudent.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
  });
  builder.addCase(RegisterStudent.rejected, (state, { payload }) => {
   state.isLoading = false;
   payload.response?.data?.message[0]?.message &&
    toast.error(payload.response.data.message[0].message);
  });

  builder.addCase(RegisterEmployee.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(RegisterEmployee.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
  });
  builder.addCase(RegisterEmployee.rejected, (state, { payload }) => {
   state.isLoading = false;
   toast.error(payload.response.data.message[0].message);
  });

  builder.addCase(ForgetPassword.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(ForgetPassword.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
  });
  builder.addCase(ForgetPassword.rejected, (state, { payload }) => {
   state.isLoading = false;
   toast.error(payload.response.data.message[0].message);
  });

  builder.addCase(editProfile.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(editProfile.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.user = payload.data.result;
   addUserToLocalStorage(state.user);
   toast.success(payload.data.message[0].message);
  });
  builder.addCase(editProfile.rejected, (state, payload) => {
   state.isLoading = false;
   toast.error(payload.data.message[0].message);
  });

  // builder.addCase(upload.pending, (state) => {
  //   state.isLoading = true;
  //  });
  //  builder.addCase(upload.fulfilled, (state, { payload }) => {
  //   state.isLoading = false;
  //   // toast.success(payload.data.message[0].message);
  //  });
  //  builder.addCase(upload.rejected, (state, { payload }) => {
  //   state.isLoading = false;
  //   // toast.error(payload.response.data.message.message[0].message);
  //  });
 },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
