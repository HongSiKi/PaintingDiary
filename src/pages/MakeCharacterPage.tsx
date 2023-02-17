import React, { useState } from 'react';

import Character from '../components/makeCharacter/Character';
import Description from '../components/makeCharacter/Description';

function MakeCharacterPage() {
  const characters = ['🐶', '🐱', '🐰'];
  const [clickIndex, setClickIndex] = useState(0);
  const onClickCharacter = (index: number) => {
    setClickIndex(index);
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
              {character}
            </div>
          );
        })}
      </div>

      <div className="flex mt-[1%] h-[100%]">
        <Character index={clickIndex} />
        <Description />
      </div>
    </div>
  );
}

export default MakeCharacterPage;
