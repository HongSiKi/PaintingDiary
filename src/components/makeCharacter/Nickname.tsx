import React, { useState } from 'react';

function Nickname() {
  const [nickname, setNickname] = useState<string>('');
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
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
      <div>
        {nickname.length < 2 || nickname.length > 7 ? (
          <div>2글자 이상 7글자 미만인 닉네임을 입력해주세요.</div>
        ) : (
          ''
        )}
        {isClick && isDuplicate ? '다른 닉네임을 입력해주세요.' : ''}
        {isClick && !isDuplicate ? '사용가능한 닉네임입니다.' : ''}
      </div>
    </>
  );
}

export default Nickname;
