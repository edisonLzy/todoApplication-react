import { configureStore } from '@reduxjs/toolkit';
import { reducer as userInfo } from './userInfo';
const store = configureStore({
  reducer: {
    userInfo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
