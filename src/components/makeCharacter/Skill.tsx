import React, { useState } from 'react';

function Skill({ countList }: any) {
  const [progress, setProgress] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(e.target.value);
  };

  return (
    <>
      {countList.map((key: number) => (
        <div key={key} className="max-h-[72%] pl-[1%] ">
          <div className="flex mb-[1%]">
            <input placeholder="기술" className="w-[40%] bg-deepGray text-center mr-[2%]" />

            <div className="w-[100%] bg-deepGray">
              <input
                onChange={onChange}
                placeholder="10단위 숫자만(ex.80)"
                className={`h-[100%] w-[${progress}%] text-center focus:outline-none bg-yellow`}
              />
            </div>
          </div>

          <input placeholder="자세한 설명" className="w-[100%] mb-[2%] pl-[1%] bg-deepGray" />
        </div>
      ))}
    </>
  );
}

export default Skill;
