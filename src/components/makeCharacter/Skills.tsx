import React, { useState } from 'react';

import Skill from './Skill';

function Skills() {
  const [countList, setCountList] = useState([1]);

  const addSkill = () => {
    const countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
  };

  return (
    <>
      <div className="flex justify-between mt-[1%] mx-[1%]">
        <div>스킬(자신의 어필 포인트를 적어주세요)</div>
        <div>{countList.length} / 5</div>
      </div>
      <Skill countList={countList} />
      <button onClick={addSkill} type="button" className="h-[8%] pl-[1%] rounded-[23px] bg-yellow">
        스킬 추가
      </button>
    </>
  );
}

export default Skills;
