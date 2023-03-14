import React, { ReactNode, useRef } from 'react';

interface ICarousel {
  elements: ReactNode[];
}

function Carousel({ elements }: ICarousel) {
  const ref = useRef<HTMLDivElement>(null);

  const onClickHandler = (offset: number) => {
    const div = ref.current;
    div?.scrollTo({
      left: div.scrollLeft + offset,
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
