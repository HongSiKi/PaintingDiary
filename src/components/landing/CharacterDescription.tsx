import React from 'react';
import Skills from './Skills';

function CharacterDescription() {
  return (
    <div className="flex m-[10%] mt-[18%] h-screen">
      <div className="w-[25%] h-[50%] p-[1.5%] bg-deepGray">
        <div className="h-[55%] bg-[pink]">캐릭터</div>
        <div className="h-[45%] px-[6%] py-[10%] bg-[white] ">
          <Skills />
        </div>
      </div>
      <div className="bg-[pink] ml-[40px] w-[75%] h-[50%]">포트폴리오</div>
    </div>
  );
}

export default CharacterDescription;
