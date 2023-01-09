import React from 'react';

import CharacterProfile from '../landing/CharacterProfile';
import Shiba from '../landing/Shiba';

function Character() {
  return (
    <div className="w-[30%] h-[70%]">
      <div className="h-[90%] bg-deepGray">
        <CharacterProfile model={<Shiba />} />
      </div>
      <div className="mt-[10%] bg-deepGray text-center">커스터마이징</div>
    </div>
  );
}

export default Character;
