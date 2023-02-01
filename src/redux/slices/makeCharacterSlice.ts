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
    updateLink: (state, action) => {
      state.link = action.payload;
    },
    updateTitle: (state, action) => {
      state.skillList[action.payload.index].title = action.payload.title;
    },
    updateDescription: (state, action) => {
      state.skillList[action.payload.index].description = action.payload.description;
    },
    updateProgress: (state, action) => {
      state.skillList[action.payload.index].progress = action.payload.progress;
    },
    updateSkillList: (state, action) => {
      state.skillList.push(action.payload);
    },
  },
});

export default makeCharacterSlice;
