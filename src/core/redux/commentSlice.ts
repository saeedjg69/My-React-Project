import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

type IinitialState = {
 comments: [];
 isLoading: boolean;
};

const initialState: IinitialState = {
 comments: [],
 isLoading: false,
};

export const getAllComments: any = createAsyncThunk(
 "comment/getAllComments",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.get("comments/");
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const sendComment: any = createAsyncThunk(
 "comment/sendComment",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.post("comments/send", obj);
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const verifyComment: any = createAsyncThunk(
 "comment/verifyComment",
 async (id, thunkApi) => {
  try {
   const resp: any = await customFetch.post("comments/verify", id);
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const answerComment: any = createAsyncThunk(
    "comment/answerComment",
    async (obj, thunkApi) => {
       console.log(obj);
     try {
      const resp: any = await customFetch.post("comments/answer", obj);
      return thunkApi.fulfillWithValue(resp);
     } catch (error) {
      return thunkApi.rejectWithValue(error);
     }
    }
   );

const commentSlice = createSlice({
 name: "comment",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(getAllComments.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(getAllComments.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.comments = payload.data;
  });
  builder.addCase(getAllComments.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(sendComment.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(sendComment.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message);
   // state.comments = payload.data;
  });
  builder.addCase(sendComment.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(verifyComment.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(verifyComment.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message);
  });
  builder.addCase(verifyComment.rejected, (state, { payload }) => {
   state.isLoading = false;
   toast.error(payload.response.data.message);
  });

  builder.addCase(answerComment.pending, (state) => {
    state.isLoading = true;
   });
   builder.addCase(answerComment.fulfilled, (state, { payload }) => {
    state.isLoading = false;
    toast.success(payload.data.message);
   });
   builder.addCase(answerComment.rejected, (state, { payload }) => {
    state.isLoading = false;
    toast.error(payload.response.data.message);
   });
 },
});

export default commentSlice.reducer;
