import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

import nicknameSlice from '../../redux/slices/nicknameSlice';

function Nickname() {
  const dispatch = useAppDispatch();
  const nickname = useAppSelector((state) => state.nickname.nickname);
  const message = useAppSelector((state) => state.nickname.message);
  const checked = useAppSelector((state) => state.nickname.checked);
  const isDuplicate = useAppSelector((state) => state.nickname.isDuplicate);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(nicknameSlice.actions.updateNickname(e.target.value));

    if (e.target.value.length < 2 || e.target.value.length > 7) {
      dispatch(
        nicknameSlice.actions.updateMessage('2글자 이상 7글자 미만인 닉네임을 입력해주세요.'),
      );
    } else {
      dispatch(nicknameSlice.actions.updateMessage(''));
    }
  };

  const checkDuplicate = () => {
    const url = `/api/characters/nickname?nickname=${nickname}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return dispatch(nicknameSlice.actions.isDuplicate(res.result.duplicated));
      });
  };

  return (
    <>
      <div className="flex justify-between h-[8%] ">
        <input
          onChange={onChangeNickname}
          placeholder="캐릭터 닉네임"
          className="w-[80%] pl-[1%] border-2 border-deepGray"
        />
        <button
          onClick={checkDuplicate}
          type="button"
          disabled={!(nickname.length >= 2 && nickname.length < 7)}
          className="w-[20%] ml-[1%] bg-yellow"
        >
          중복체크
        </button>
      </div>
      {nickname.length > 0 ? <div>{message}</div> : ''}
      <div>
        {checked && message === '' && isDuplicate ? '다른 닉네임을 입력해주세요.' : ''}
        {checked && message === '' && !isDuplicate ? '사용가능한 닉네임입니다.' : ''}
      </div>
    </>
  );
}

export default Nickname;
