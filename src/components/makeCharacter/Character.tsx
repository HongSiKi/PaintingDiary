import React from 'react';
import { useNavigate } from 'react-router-dom';

import CharacterProfile from '../landing/CharacterProfile';
import Dog from '../landing/Shiba';
import Cat from './Cat';
import Rabbit from './Rabbit';

function Character({ index }: { index: number }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/decorateCharacter');
  };

  return (
    <div className="h-[100%] w-[30%]">
      <div className="h-[87%] bg-lightGray">
        {index === 0 ? (
          <CharacterProfile model={<Dog />} camera={{ position: [0.1, 0.1, 2] }} intensity={1.5} />
        ) : (
          ''
        )}
        {index === 1 ? (
          <CharacterProfile model={<Cat />} camera={{ position: [1, 150, 700] }} intensity={1.3} />
        ) : (
          ''
        )}
        {index === 2 ? (
          <CharacterProfile model={<Rabbit />} camera={{ position: [1, 0.1, 10] }} />
        ) : (
          ''
        )}
      </div>
      <button
        onClick={onClick}
        type="button"
        className="w-[100%] h-[8%] mt-[10%] bg-deepGray text-center cursor-pointer"
      >
        커스터마이징
      </button>
    </div>
  );
}

export default Character;
