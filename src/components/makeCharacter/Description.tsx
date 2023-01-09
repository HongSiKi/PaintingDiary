import React from 'react';

import Button from './Button';

function Description() {
  return (
    <div className="flex flex-col w-[70%] h-[70%] pl-[3%]">
      <div className="flex h-[8%] mt-[2%] justify-between">
        <Button text="생성완료" />
        <Button text="취소" />
      </div>
    </div>
  );
}

export default Description;
