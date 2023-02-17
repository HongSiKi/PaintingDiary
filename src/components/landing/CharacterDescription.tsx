import React from 'react';

import CharacterProfile from './CharacterProfile';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Dog from './Shiba';

function CharacterDescription() {
  return (
    <div className="flex m-[10%] mt-[18%] h-screen">
      <div className="w-[25%] h-[50%] p-[1.5%] bg-deepGray">
        <div className="h-[55%] bg-lightGray">
          <CharacterProfile model={<Dog />} camera={{ position: [0.1, 0.1, 2] }} intensity={1.5} />
        </div>
        <div className="h-[45%] px-[6%] py-[10%] bg-[white] ">
          <Skills />
        </div>
      </div>
      <div className="ml-[40px] w-[75%] h-[50%]">
        <Portfolio portfolioSrc="https://lr.doesbook.kr/" />
      </div>
    </div>
  );
}

export default CharacterDescription;
