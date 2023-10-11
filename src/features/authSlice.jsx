import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",

  initialState: { 
    email: "", 
    password: "" 
  },

  reducers:{
    createUser:(state,action) => {
      //console.log(action);
      state.email = action.payload.email
      state.password = action.payload.password
    },

    deleteUser:(state) => {
      state.email = ""
      state.password = ""
    }
  }
});
export const {createUser, deleteUser} = authSlice.actions;      //aksiyonlar export


export default authSlice.reducer;       // Tüm sayfa export