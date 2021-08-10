import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'userInfo',
  initialState: {
    name: 'lee',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTito0OMthiQM6nC9ReNfEANpXVsISrMmDyMQ&usqp=CAU',
  },
  reducers: {
    changeUserInfo: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export { actions, reducer };
