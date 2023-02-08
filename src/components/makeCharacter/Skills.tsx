import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook';

import makeCharacterSlice from '../../redux/slices/makeCharacterSlice';

import Skill from './Skill';

function Skills() {
  const dispatch = useAppDispatch();
  const skillListLength = useAppSelector((state) => state.makeCharacter.skillList).length;
  const [isClick, setIsClick] = useState(false);

  const addSkill = () => {
    const skill = {
      title: '',
      description: '',
      progress: 1,
    };

    setIsClick(true);
    dispatch(makeCharacterSlice.actions.updateSkillList(skill));
  };

  return (
    <>
      {isClick ? (
        <>
          <div className="flex justify-between mt-[1%] mx-[1%]">
            <div>스킬(자신의 어필 포인트를 적어주세요)</div>
            <div>{skillListLength} / 5</div>
          </div>
          <Skill />
        </>
      ) : (
        ''
      )}

      <button
        onClick={addSkill}
        type="button"
        className="h-[8%] pl-[1%] mt-[1%] rounded-[23px] bg-yellow"
        disabled={skillListLength >= 5}
      >
        스킬 추가
      </button>
    </>
  );
}

export default Skills;
