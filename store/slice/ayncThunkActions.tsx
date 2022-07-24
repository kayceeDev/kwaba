import { createAsyncThunk } from '@reduxjs/toolkit';
import services from "./services"


xxport const signup = createAsyncThunk(
    'neverlandUser/signup',
    async (userData, thunkAPI) => {
      try {
        return await userService.signup(userData)
      } catch (error) {
        const message = (error.response
        && error.response.data
        && error.response.data.message)
      || error.message
      || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    },
  )