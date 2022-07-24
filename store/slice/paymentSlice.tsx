import { createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "..";

const inititalstate = {
  userDetails: {},
  message: "",
  isLoaded: false,
  isSuccess: false,
  isError: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: inititalstate,
  reducers: {
    addDetails: (state, { payload }) => {
      state.userDetails = payload;
    },
    approveDetails: (state, { payload }) => {
      state.userDetails = { ...state.userDetails, payload };
    },
    reset: (state) => {
      state.isLoaded = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers:(builder)=>{
    builder.addCase()
  }
});
