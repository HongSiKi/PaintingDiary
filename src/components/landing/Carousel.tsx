import React, { ReactNode, useRef } from 'react';

interface ICarousel {
  elements: ReactNode[];
}

function Carousel({ elements }: ICarousel) {
  const ref = useRef<HTMLDivElement>(null);

  const prevButton = () => {
    const div = ref.current;
    div?.scrollTo({
      left: div.scrollLeft - 200,
      behavior: 'smooth',
    });
  };
  const nextButton = () => {
    const div = ref.current;
    div?.scrollTo({
      left: div.scrollLeft + 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-row h-[30%] mx-[1%]">
      <button type="button" onClick={prevButton} className="text-[200%] w-[5%]">
        &lt;
      </button>
      <div ref={ref} className="flex flex-row overflow-scroll">
        {elements}
      </div>
      <button type="button" onClick={nextButton} className="text-[200%] w-[5%]">
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
