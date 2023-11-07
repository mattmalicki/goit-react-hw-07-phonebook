import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  status: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
