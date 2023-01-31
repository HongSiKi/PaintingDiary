import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hook';

import makeCharacterSlice from '../../redux/slices/makeCharacterSlice';

function Skill({ countList }: { countList: number[] }) {
  const dispatch = useAppDispatch();
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    setProgress({
      ...countList.reduce((obj: Record<string, number>, cur: number) => {
        obj[cur] = 1;
        return obj;
      }, {}),
      ...progress,
    });
  }, [countList]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(makeCharacterSlice.actions.title({ title: e.target.value, index: index - 1 }));
  };

  const progressCount = (index: number) => {
    setProgress({ ...progress, [index]: (progress[index] % 5) + 1 });

    if (progress[index] === 5) {
      dispatch(makeCharacterSlice.actions.progress({ progress: 1, index: index - 1 }));
    } else {
      dispatch(
        makeCharacterSlice.actions.progress({ progress: progress[index] + 1, index: index - 1 }),
      );
    }
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(
      makeCharacterSlice.actions.description({ description: e.target.value, index: index - 1 }),
    );
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
      {countList.map((key: number) => (
        <div key={key} className="max-h-[72%] pl-[1%]">
          <div className="flex mb-[1%]">
            <input
              onChange={(e) => onChangeTitle(e, key)}
              placeholder="스킬"
              className="w-[40%] mr-[2%] text-center bg-deepGray"
            />

            <div
              role="none"
              onClick={() => progressCount(key)}
              className="flex w-[100%] items-center bg-deepGray"
            >
              <div
                className={`h-[100%] ${width[progress[key]]}
                text-center text-[15px] bg-yellow ease-linear duration-100 cursor-pointer`}
              >
                클릭
              </div>
            </div>
          </div>

          <input
            onChange={(e) => onChangeDescription(e, key)}
            placeholder="자세한 설명"
            className="w-[100%] mb-[2%] pl-[1%] bg-deepGray"
          />
        </div>
      ))}
    </>
  );
}

export default Skill;
