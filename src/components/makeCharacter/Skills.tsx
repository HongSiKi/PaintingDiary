import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook';

import makeCharacterSlice from '../../redux/slices/makeCharacterSlice';

import Skill from './Skill';

function Skills() {
  const dispatch = useAppDispatch();
  const [countList, setCountList] = useState<number[]>([]);
  const [isClick, setIsClick] = useState(false);
  const skill = useAppSelector((state) => state.makeCharacter.skill);

  const addSkill = () => {
    const countArr = [...countList];
    let counter = countArr.length;
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
    setIsClick(true);
    dispatch(makeCharacterSlice.actions.updateSkillList(skill));
  };

  return (
    <>
      {isClick ? (
        <>
          <div className="flex justify-between mt-[1%] mx-[1%]">
            <div>스킬(자신의 어필 포인트를 적어주세요)</div>
            <div>{countList.length} / 5</div>
          </div>
          <Skill countList={countList} />
        </>
      ) : (
        ''
      )}

      <button
        onClick={addSkill}
        type="button"
        className="h-[8%] pl-[1%] mt-[1%] rounded-[23px] bg-yellow"
        disabled={countList.length >= 5}
      >
        스킬 추가
      </button>
    </>
  );
}

export default Skills;
