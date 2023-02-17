import React, { useState } from 'react';
import { useAppDispatch } from '../redux/hook';

import Character from '../components/makeCharacter/Character';
import Description from '../components/makeCharacter/Description';
import characterSlice from '../redux/slices/characterSlice';

function MakeCharacterPage() {
  const dispatch = useAppDispatch();
  const [clickIndex, setClickIndex] = useState(0);
  // 현재 서버가 없어서 하드코딩
  const characters = [
    { id: 0, src: 'http://강아지3d', name: '🐶' },
    { id: 1, src: 'http://고양이3d', name: '🐱' },
    { id: 2, src: 'http://토끼3d', name: '🐰' },
  ];

  const onClickCharacter = (index: number) => {
    setClickIndex(index);
    dispatch(characterSlice.actions.clickedCharacter(index));
  };

  return (
    <div className="flex flex-col mx-[10%] my-[3%] h-screen">
      <div className="flex justify-between w-[30%] h-[8%]">
        {characters.map((character, index) => {
          return (
            <div
              role="none"
              key={index}
              onClick={() => onClickCharacter(index)}
              className={`${
                clickIndex === index ? 'bg-yellow' : 'bg-deepGray'
              } flex w-[20%] items-center justify-center text-[35px] cursor-pointer `}
            >
              {character.name}
            </div>
          );
        })}
      </div>

      <div className="flex mt-[1%] h-[100%]">
        <Character />
        <Description />
      </div>
    </div>
  );
}

export default MakeCharacterPage;
