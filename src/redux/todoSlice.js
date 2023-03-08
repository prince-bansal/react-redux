// https://jsonplaceholder.typicode.com/todos/1

import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { todos: null, loading: false, error: null };

const getTodos = createAsyncThunk("todos", async (thunkAPI) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers:{},
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice;
export { getTodos };
