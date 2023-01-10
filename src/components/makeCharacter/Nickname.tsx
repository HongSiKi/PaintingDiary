import React, { useState } from 'react';

function Nickname() {
  const [nickname, setNickname] = useState<string>('');
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 7) {
      setMessage('2글자 이상 7글자 미만인 닉네임을 입력해주세요.');
    } else setMessage('');
  };
  const checkDuplicate = () => {
    setIsClick(true);
    // 항상 닉네임이 중복되지 않는다고 가정
    setIsDuplicate(false);
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
        {isClick && !isDuplicate ? '사용가능한 닉네임입니다.' : ''}
      </div>
    </>
  );
}

export default Nickname;
