import React from 'react';

function LoggedMenu() {
  return (
    <div className="flex justify-center">
      <button type="button" className="mr-5">
        새 캐릭터 생성하기
      </button>
      <button type="button">마이룸 꾸미기</button>
    </div>
  );
}

export default LoggedMenu;
