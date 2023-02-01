import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hook';

import makeCharacterSlice from '../../redux/slices/makeCharacterSlice';

import Button from './Button';
import Nickname from './Nickname';
import Skills from './Skills';

function Description() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const message = useAppSelector((state) => state.nickname.message);
  const isDuplicate = useAppSelector((state) => state.nickname.isDuplicate);
  const nickname = useAppSelector((state) => state.nickname.nickname);
  const link = useAppSelector((state) => state.makeCharacter.link);
  const skillList = useAppSelector((state) => state.makeCharacter.skillList);

  const onChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(makeCharacterSlice.actions.updateLink(e.target.value));
  };

  const moveToMain = () => {
    const url = '/api/characters';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname,
        link,
        skill_list: skillList,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        return result;
      });

    navigate('/');
  };

  return (
    <div className="flex flex-col w-[70%] h-[70%] pl-[3%]">
      <Nickname />
      <input
        onChange={onChangeLink}
        placeholder="자기소개 링크(optional)"
        className="h-[8%] mt-[1%] pl-[1%] border-2 border-deepGray"
      />
      <Skills />
      <div className="flex h-[8%] mt-[5%] justify-between">
        <Button onClick={moveToMain} text="생성완료" disabled={!(!isDuplicate && message === '')} />
        <Button text="취소" />
      </div>
    </div>
  );
}

export default Description;
