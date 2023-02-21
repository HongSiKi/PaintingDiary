import { configureStore } from '@reduxjs/toolkit';

import nicknameSlice from './slices/nicknameSlice';
import userSlice from './slices/userSlice';
import makeCharacterSlice from './slices/makeCharacterSlice';

const store = configureStore({
  reducer: {
    nickname: nicknameSlice.reducer,
    user: userSlice.reducer,
    makeCharacter: makeCharacterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
