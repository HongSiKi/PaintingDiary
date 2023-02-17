import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';

import Button from './Button';
import Nickname from './Nickname';
import Skills from './Skills';

function Description() {
  const navigate = useNavigate();
  const index = useAppSelector((state) => state.character.index);
  const message = useAppSelector((state) => state.nickname.message);
  const isDuplicate = useAppSelector((state) => state.nickname.isDuplicate);

  const moveToMain = () => {
    // 현재 서버가 없어서 하드코딩
    const promiseData = new Promise((resolve, reject) => {
      resolve(index);
    });
    //! result값을 어디에 같이 넘겨줘야할지 몰라 일단 클릭한 index 값이 넘겨지는 것만 확인
    promiseData.then((result) => console.log(result));
    navigate('/');
  };

  return (
    <div className="flex flex-col w-[70%] pl-[3%]">
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
