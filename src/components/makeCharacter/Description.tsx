import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';

import Button from './Button';
import Nickname from './Nickname';
import Skills from './Skills';

function Description() {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  };
  const message = useAppSelector((state) => state.nickname.message);
  const isDuplicate = useAppSelector((state) => state.nickname.isDuplicate);

  return (
    <div className="flex flex-col w-[70%] h-[70%] pl-[3%]">
      <Nickname />
      <input
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
