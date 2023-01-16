import React from 'react';
import { useNavigate } from 'react-router-dom';

import CharacterProfile from '../landing/CharacterProfile';
import Shiba from '../landing/Shiba';

function Character() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/decorateCharacter');
  };

  return (
    <div className="w-[30%] h-[70%]">
      <div className="h-[90%] bg-deepGray">
        <CharacterProfile model={<Shiba />} />
      </div>
      <button
        onClick={onClick}
        type="button"
        className="w-[100%] mt-[10%] bg-deepGray text-center cursor-pointer"
      >
        커스터마이징
      </button>
    </div>
  );
}

export default Character;
