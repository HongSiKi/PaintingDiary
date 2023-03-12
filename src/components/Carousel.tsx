import React, { ReactNode, useRef } from 'react';

interface CarouselProps {
  elements: ReactNode[];
}

function Carousel({ elements }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const makeClickHandler = (offset: number) => {
    return () => {
      const div = scrollRef.current;
      div?.scrollTo({
        left: div.scrollLeft + offset,
        behavior: 'smooth',
      });
    };
  };

  return (
    <div className="my-5 w-full px-[40px]">
      <button
        className="w-6 hover:bg-deepGray rounded-full"
        type="button"
        onMouseDown={makeClickHandler(-250)}
      >
        &lt;
      </button>
      <div
        className="mx-[10px] align-middle inline-block w-[calc(100%-68px)] overflow-x-scroll p-3"
        ref={scrollRef}
      >
        <div className="w-max inline-block">
          {elements.map((element, i) => (
            <div key={i} className="mr-3 inline-block">
              {element}
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-6 hover:bg-deepGray rounded-full"
        type="button"
        onMouseDown={makeClickHandler(250)}
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
