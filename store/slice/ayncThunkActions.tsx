import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "./services";
interface userDetails {
  accomodationStatus: string;
  requestAmount: string;
  earningAmount: string;
  monthlyPlan: string;
}

export const paymentDetails = createAsyncThunk(
  "payment",
  async (userDetails: userDetails, thunkAPI) => {
    try {

      return await services.payment(userDetails);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const message = error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const updatePayment = createAsyncThunk(
  "update",
  async (userDetails: userDetails, thunkAPI) => {
    try {
      return await services.updatePayment(userDetails);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const message = error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);
