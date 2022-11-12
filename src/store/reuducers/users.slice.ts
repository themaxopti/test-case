import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MakeUserData, UsersApi } from "../../api/axios.api";

export interface User {
  id: number;
  name: string;
  country: string;
  email: string;
  surname: string;
  age: number;
}

interface UsersState {
  users: User[];
  currentPage: number;
  isPending: boolean;
  amountOfSkeletons: number;
  error: string | null;
}

interface FetchUserByIdData {
  page: number;
  totalItemsCount: number;
  delayAmount?: number;
}

const initialState: UsersState = {
  users: [],
  currentPage: 1,
  isPending: true,
  amountOfSkeletons: 5,
  error: null,
};

async function delay(time: number) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(null);
    }, time);
  });
}

export const fetchUser = createAsyncThunk(
  "users/fetchUsers",
  async (
    { page, totalItemsCount, delayAmount = 1000 }: FetchUserByIdData,
    thunkApi
  ) => {
    try {
      await delay(delayAmount);
      const res = await UsersApi.getUsers(page, totalItemsCount);
      if (!res.data) {
        return thunkApi.rejectWithValue("Some error ocured");
      }
      return thunkApi.fulfillWithValue(res.data);
    } catch (e) {
      return thunkApi.rejectWithValue("Some error ocured");
    }
  }
);

export const makeUser = createAsyncThunk(
  "users/makeUser",
  async (data: MakeUserData, thunkApi) => {
    try {
      await delay(1000);
      const res = await UsersApi.makeUser(data);
      console.log(res.data);
      if (!res.data) {
        return thunkApi.rejectWithValue("Some error ocured");
      }
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue("Some error ocured");
    }
  }
);

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchUser
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.isPending = false;
      state.users.push(...action.payload);
      state.currentPage = state.currentPage + 1;
    },
    [fetchUser.pending.type]: (state, action: PayloadAction<User[]>) => {
      state.amountOfSkeletons = 3;
      state.isPending = true;
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isPending = false;
      state.error = action.payload;
    },
    // fetchUser

    // makeUser
    [makeUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isPending = false;
      state.users.push(action.payload);
      console.log("fulfiled");
    },
    [makeUser.pending.type]: (state, action: PayloadAction<User[]>) => {
      state.amountOfSkeletons = 1;
      state.isPending = true;
    },
    [makeUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isPending = false;
      state.error = action.payload;
    },
    // makeUser
  },
});

export const userReducer = slice.reducer;
