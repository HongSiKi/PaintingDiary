import React from 'react';

import Character from '../components/makeCharacter/Character';
import Description from '../components/makeCharacter/Description';

function MakeCharacterPage() {
  return (
    <div className="flex mx-[10%] my-[8%] h-screen">
      <Character />
      <Description />
    </div>
  );
}

export default MakeCharacterPage;
