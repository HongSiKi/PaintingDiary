import React, { ReactNode, useRef } from 'react';

interface ICarousel {
  elements: ReactNode[];
}

function Carousel({ elements }: ICarousel) {
  const ref = useRef<HTMLDivElement>(null);
  const div = ref.current;

  const onClickHandler = (offset: number) => {
    div?.scrollTo({
      left: div.scrollLeft + offset,
      behavior: 'smooth',
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // 스크롤 위치
    const prevX = div?.scrollLeft;
    // 클릭한 이미지 위치
    const newX = e.clientX;

    // 스크롤
    div?.scrollTo({
      left: newX,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-[5000px]">
      <button type="button" onClick={() => onClickHandler(-200)} className="w-[3vw] align-middle">
        &lt;
      </button>
      <div
        ref={ref}
        className="inline-block align-middle w-[94vw] whitespace-nowrap overflow-x-auto"
        onMouseDown={handleMouseMove}
      >
        {elements}
      </div>
      <button type="button" onClick={() => onClickHandler(200)} className="w-[3vw] align-middle">
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
