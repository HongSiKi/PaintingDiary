import React from 'react';

function Skills() {
  // 데이터가 없어서 우선 하드코딩했음.
  return (
    <div>
      <div className="flex mb-[15px]">
        <div className="w-[40%] h-[20%] text-center">JS</div>
        <div className="w-[100%] bg-deepGray ">
          <div className="h-[100%] w-[80%] bg-yellow" />
        </div>
      </div>

      <div className="flex mb-[15px]">
        <div className="w-[40%] h-[20%] text-center">이동속도</div>
        <div className="bg-deepGray w-[100%]">
          <div className="h-[100%] w-[30%] bg-yellow" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
