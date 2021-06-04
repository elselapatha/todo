import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import TodoItem from './types';

export interface TodoState {
  tasks: Array<TodoItem>;
  loading: boolean;
}

const initialState: TodoState = {
  tasks: [],
  loading: false,
};

export const loadTodoAsync = createAsyncThunk('todo/fetchTasks', async () => {
  const response = await axios.get('/todo', {
    baseURL: process.env.REACT_APP_BASE_URL,
  });
  return response.data;
});

export const postTodoAsync = createAsyncThunk(
  'todo/postTasks',
  async (todo: TodoItem, { dispatch }) => {
    dispatch(add(todo));
    await axios.post('/todo', todo, {
      baseURL: process.env.REACT_APP_BASE_URL,
    });
    return todo;
  }
);

export const doneTodoAsync = createAsyncThunk(
  'todo/doneTasks',
  async (id: String, { dispatch }) => {
    dispatch(done(id));
    await axios.patch(`/todo/${id}`, null, {
      baseURL: process.env.REACT_APP_BASE_URL,
    });
    return id;
  }
);

export const removeTodoAsync = createAsyncThunk(
  'todo/removeTasks',
  async (id: String, { dispatch }) => {
    dispatch(remove(id));
    await axios.delete(`/todo/${id}`, {
      baseURL: process.env.REACT_APP_BASE_URL,
    });
    return id;
  }
);

export const taskSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoItem>) => {
      state.tasks.splice(0, 0, action.payload);
    },
    remove: (state, action: PayloadAction<String>) => {
      state.tasks = state.tasks.filter(({ id }) => id !== action.payload);
    },
    done: (state, action: PayloadAction<String>) => {
      state.tasks = state.tasks.map((e) =>
        e.id === action.payload ? { ...e, done: true } : e
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodoAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTodoAsync.fulfilled, (state, action) => {
        state.tasks = [...action.payload];
        state.loading = false;
      });
  },
});

export const { add, remove, done } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.todo.tasks;
export const selectLoading = (state: RootState) => state.todo.loading;

export default taskSlice.reducer;
