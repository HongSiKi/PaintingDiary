import { createSlice } from '@reduxjs/toolkit';

interface IState {
  link: string;
  skillList: Array<{
    title: string;
    description: string;
    progress: number;
  }>;
}

const initialState: IState = {
  link: '',
  skillList: [],
};

const makeCharacterSlice = createSlice({
  name: 'makeCharacter',
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
    deleteSkill: (state, action) => {
      state.skillList = state.skillList.filter((_, index) => index !== action.payload);
    },
  },
});

export default makeCharacterSlice;
