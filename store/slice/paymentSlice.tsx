import { createSlice, current } from "@reduxjs/toolkit";
import { stat } from "fs/promises";
import { RootState } from "..";
import { paymentDetails, updatePayment } from "./ayncThunkActions";

type userDetails = {
  accomodationStatus?: string;
  isLoaded?: string;
  requestAmount?: string;
  monthlyPlan?: string;
  monthlyPayment?: number;
  earningAmount?: string;
};

interface IState {
  userDetails: userDetails;
  message: string;
  isLoaded: boolean;
  isSuccess: boolean;
  isError: boolean;
}
const inititalstate: IState = {
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
    changeRentAmount: (state, { payload }) => {
      state.userDetails.requestAmount = payload.requestAmount
      if (state.userDetails.requestAmount && state.userDetails.monthlyPlan){

        state.userDetails.monthlyPayment =
          parseInt(state.userDetails.requestAmount) / parseInt(state.userDetails.monthlyPlan.split(" ")[0]) +
          parseInt(state.userDetails.requestAmount) * 0.02;
      }
    },
    changeMonthlyPlan: (state, { payload }) => {
      if (state.userDetails.requestAmount && state.userDetails.monthlyPlan){

        state.userDetails.monthlyPlan = payload.monthlyPlan;
        state.monthlyPayment =
          parseInt(state.rentAmount) / parseInt(state.monthlyPlan.split(" ")[0]) +
          parseInt(state.rentAmount) * 0.02;
      }
    },
    reset: (state) => {
      state.isLoaded = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(paymentDetails.pending, (state, { payload }) => {
        state.isLoaded = true;
      })
      .addCase(paymentDetails.fulfilled, (state, actions) => {
        state.isLoaded = false;
        state.isSuccess = true;
        state.userDetails = actions.payload;
        state.message = actions.payload.message;
      })
      .addCase(paymentDetails.rejected, (state, action) => {
        state.isLoaded = false;
        state.isError = true;
        state.message = action.payload as unknown as string;
        state.userDetails = {};
      })
      .addCase(updatePayment.pending, (state, { payload }) => {
        state.isLoaded = true;
      })
      .addCase(updatePayment.fulfilled, (state, { payload }) => {
        state.isLoaded = false;
        state.isSuccess = true;
        state.userDetails = payload;
        state.message = payload.message;
      })
      .addCase(updatePayment.rejected, (state, action) => {
        state.isLoaded = false;
        state.isError = true;
        state.message = action.payload as unknown as string;
        state.userDetails = {};
      });
  },
});

export const { reset } = paymentSlice.actions;

export const payment = (state: RootState) => state.payment;

export default paymentSlice.reducer;
