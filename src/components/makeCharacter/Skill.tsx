import React, { useState } from 'react';

function Skill({ countList }: any) {
  const [progress, setProgress] = useState(1);

  const progressCount = () => {
    if (progress === 5) setProgress(1);
    else setProgress(progress + 1);
  };

  return (
    <>
      {countList.map((key: number) => (
        <div key={key} className="max-h-[72%] pl-[1%] ">
          <div className="flex mb-[1%]">
            <input placeholder="기술" className="w-[40%] bg-deepGray text-center mr-[2%]" />

            <div
              role="none"
              onClick={progressCount}
              className="bg-deepGray w-[100%] flex items-center"
            >
              <div
                className={`bg-yellow ease-linear duration-100 text-center h-[100%] w-[${
                  (progress / 5) * 100
                }%]`}
              >
                클릭
              </div>
            </div>
          </div>

          <input placeholder="자세한 설명" className="w-[100%] mb-[2%] pl-[1%] bg-deepGray" />
        </div>
      ))}
    </>
  );
}

export default Skill;
