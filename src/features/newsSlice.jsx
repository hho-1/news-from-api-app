import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getirData = createAsyncThunk(
  "newsSlice/getirData",

  async () => {
    const data = await axios(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8b80b2207e2e4ed78b21b1c7947602f7"
    );
    //  console.log(data);
    return data.data.articles;
  }
);

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    news: [],
    loading: true,
    error: "",
  },
  reducers: {
    clearAnItem: (state,action) => {
      state.news = state.news.filter((item) => item.publishedAt !== action.payload)
    },
    removeAllNews: (state) => {
      state.news = []
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getirData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getirData.fulfilled, (state, action) => {
        // console.log(action);
        state.news = action.payload;
        state.loading = false;
      })
      // veri gelmesinde hata olduğunda
      .addCase(getirData.rejected, (state, action) => {
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const { clearAnItem, removeAllNews } = newsSlice.actions;

export default newsSlice.reducer;
