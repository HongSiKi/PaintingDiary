import React from 'react';

function CharacterDescription() {
  return (
    <div className="flex m-[10%] mt-[18%] h-screen">
      <div className="w-[25%] h-[50%]">
        <div className="h-[60%] bg-[yellow]">캐릭터</div>
        <div className="h-[40%] bg-[skyblue]">스킬</div>
      </div>
      <div className="bg-[pink] ml-[40px] w-[75%] h-[50%]">포트폴리오</div>
    </div>
  );
}

export default CharacterDescription;
