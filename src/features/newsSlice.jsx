import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getirData = createAsyncThunk(
  "newsSlice/getirData",

  async () => {
    const data = await axios(
      "https://newsdata.io/api/1/news?apikey=pub_31063e3964545bb8174667bdff0654e03a4cf&q=bbc%20world "
    );
    //console.log(data);
    return data.data.results;
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
      state.news = state.news.filter((item) => item.article_id !== action.payload)
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
