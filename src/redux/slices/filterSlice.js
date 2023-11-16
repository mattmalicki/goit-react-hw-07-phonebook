import { createSlice } from '@reduxjs/toolkit';
import { statusFav } from 'redux/constants';

const filterInitialState = {
  status: '',
  show: statusFav.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    },
    changeShow(state, action) {
      console.log(action.payload);
      state.show = action.payload;
    },
  },
});

export const { changeFilter, changeShow } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
