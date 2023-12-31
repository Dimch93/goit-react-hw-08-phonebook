import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;
