import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

type IinitialState = {
 news: any[];
 isLoading: boolean;
};

const initialState: IinitialState = {
 news: [],
 isLoading: false,
};

export const getAllNews: any = createAsyncThunk(
 "news/getAllNews",
 async (obj, thunkApi) => {
  try {
   const resp: any = await customFetch.get("news");
   return thunkApi.fulfillWithValue(resp);
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

export const createNews: any = createAsyncThunk(
    "news/createNews",
    async (obj, thunkApi) => {
     try {
      const resp: any = await customFetch.post("news", obj);
      return thunkApi.fulfillWithValue(resp);
     } catch (error) {
      return thunkApi.rejectWithValue(error);
     }
    }
   );

export const deleteNews: any = createAsyncThunk(
 "news/deleteNews",
 async (id, thunkApi) => {
  try {
   const resp: any = await customFetch.delete(`news/${id}`);
   return thunkApi.fulfillWithValue({ ...resp, selectedId: id });
  } catch (error) {
   return thunkApi.rejectWithValue(error);
  }
 }
);

const newsSlice = createSlice({
 name: "news",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(getAllNews.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(getAllNews.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.news = payload.data.result;
  });
  builder.addCase(getAllNews.rejected, (state, { payload }) => {
   state.isLoading = false;
  });

  builder.addCase(createNews.pending, (state) => {
    state.isLoading = true;
   });
   builder.addCase(createNews.fulfilled, (state, { payload }) => {
    state.isLoading = false;
    toast.success(payload.data.message[0].message);
   });
   builder.addCase(createNews.rejected, (state, { payload }) => {
    state.isLoading = false;
   });

  builder.addCase(deleteNews.pending, (state) => {
   state.isLoading = true;
  });
  builder.addCase(deleteNews.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   toast.success(payload.data.message[0].message);
   const Index = state.news.findIndex(
    (news: any) => news._id === payload.selectedId
   );
   if (Index >= 0) {
    state.news.splice(
     state.news.findIndex((news: any) => news._id === payload.selectedId),
     1
    );
   }
  });
  builder.addCase(deleteNews.rejected, (state, { payload }) => {
   state.isLoading = false;
  });
 },
});

export default newsSlice.reducer;
