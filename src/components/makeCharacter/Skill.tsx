import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

import makeCharacterSlice from '../../redux/slices/makeCharacterSlice';

function Skill() {
  const dispatch = useAppDispatch();
  const skillList = useAppSelector((state) => state.makeCharacter.skillList);
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const obj: Record<number, number> = {};
    for (let i = 0; i < skillList.length; i += 1) {
      obj[i] = 1;
    }
    setProgress({ ...obj, ...progress });
  }, [skillList]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(makeCharacterSlice.actions.updateTitle({ title: e.target.value, index }));
  };

  const progressCount = (index: number) => {
    setProgress({ ...progress, [index]: (progress[index] % 5) + 1 });

    if (progress[index] === 5) {
      dispatch(makeCharacterSlice.actions.updateProgress({ progress: 1, index }));
    } else {
      dispatch(
        makeCharacterSlice.actions.updateProgress({
          progress: progress[index] + 1,
          index,
        }),
      );
    }
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(
      makeCharacterSlice.actions.updateDescription({
        description: e.target.value,
        index,
      }),
    );
  };

  const deleteSkill = (index: number) => {
    dispatch(makeCharacterSlice.actions.deleteSkill(index));
  };

  type widthType = Record<number, string>;
  const width: widthType = {
    1: 'w-[20%]',
    2: 'w-[40%]',
    3: 'w-[60%]',
    4: 'w-[80%]',
    5: 'w-[100%]',
  };

  return (
    <>
      {skillList.map((skill, index: number) => (
        <div key={index} className="flex max-h-[72%] pl-[1%]">
          <div className="w-[96%]">
            <div className="flex mb-[1%]">
              <input
                value={skill.title}
                onChange={(e) => onChangeTitle(e, index)}
                placeholder="스킬"
                className="w-[40%] mr-[2%] text-center bg-deepGray"
              />

              <div
                role="none"
                onClick={() => progressCount(index)}
                className="flex w-[100%] items-center bg-deepGray"
              >
                <div
                  className={`h-[100%] ${width[skill.progress]}
                text-center text-[15px] bg-yellow ease-linear duration-100 cursor-pointer`}
                >
                  클릭
                </div>
              </div>
            </div>

            <input
              value={skill.description}
              onChange={(e) => onChangeDescription(e, index)}
              placeholder="자세한 설명"
              className="w-[100%] mb-[2%] pl-[1%] bg-deepGray"
            />
          </div>

          <button
            onClick={() => deleteSkill(index)}
            type="button"
            className="w-[3%] h-[43%] mx-[5px] text-center border-2 rounded-[50%] bg-deepBlack text-[white] cursor-pointer"
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

export default Skill;
