import { createSlice } from '@reduxjs/toolkit';

interface IState {
  link: string;
  skill: {
    title: string;
    description: string;
    progress: number;
  };
  skillList: Array<{
    title: string;
    description: string;
    progress: number;
  }>;
}

const initialState: IState = {
  link: '',
  skill: {
    title: '',
    description: '',
    progress: 1,
  },
  skillList: [],
};

const makeCharacterSlice = createSlice({
  name: 'myCharacter',
  initialState,
  reducers: {
    link: (state, action) => {
      state.link = action.payload;
    },
    title: (state, action) => {
      state.skillList[action.payload.index].title = action.payload.title;
    },
    description: (state, action) => {
      state.skillList[action.payload.index].description = action.payload.description;
    },
    progress: (state, action) => {
      state.skillList[action.payload.index].progress = action.payload.progress;
    },
    skillList: (state, action) => {
      state.skillList.push(action.payload);
    },
  },
});

export default makeCharacterSlice;
