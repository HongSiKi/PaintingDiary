import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

import { nicknameSlice } from '../../redux/slices/nicknameSlice';

function Nickname() {
  const dispatch = useAppDispatch();
  const [nickname, setNickname] = useState<string>('');

  const message = useAppSelector((state) => state.nickname.message);
  const isDuplicate = useAppSelector((state) => state.nickname.isDuplicate);
  const isClick = useAppSelector((state) => state.nickname.isClick);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 7) {
      dispatch(nicknameSlice.actions.message('2글자 이상 7글자 미만인 닉네임을 입력해주세요.'));
    } else {
      dispatch(nicknameSlice.actions.message(''));
    }
  };
  const checkDuplicate = () => {
    dispatch(nicknameSlice.actions.isClick(true));
    // 항상 닉네임이 중복되지 않는다고 가정
    dispatch(nicknameSlice.actions.isDuplicate(false));
    return { result: { duplicate_nickname: false } };
  };

  return (
    <>
      <div className="flex justify-between h-[8%] ">
        <input
          onChange={onChangeNickname}
          placeholder="캐릭터 닉네임"
          className="w-[80%] pl-[1%] border-2 border-deepGray"
        />
        <button onClick={checkDuplicate} type="button" className="w-[20%] ml-[1%] bg-yellow">
          중복체크
        </button>
      </div>
      {nickname.length > 0 ? <div>{message}</div> : ''}
      <div>
        {isClick && isDuplicate ? '다른 닉네임을 입력해주세요.' : ''}
        {isClick && !isDuplicate && message === '' ? '사용가능한 닉네임입니다.' : ''}
      </div>
    </>
  );
}

export default Nickname;
