import React, { ReactNode, useRef } from 'react';
import WidthTouchScroll from './WidthTouchScroll';

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
        className="w-8 h-8 hover:bg-deepGray rounded-full border-2 border-deepGray"
        type="button"
        onMouseDown={makeClickHandler(-250)}
      >
        &lt;
      </button>
      <WidthTouchScroll className="mx-[10px] align-middle inline-block w-[calc(100%-86px)] p-3">
        <div className="w-max inline-block">
          {elements.map((element, i) => (
            <div key={i} className="mr-3 inline-block">
              {element}
            </div>
          ))}
        </div>
      </WidthTouchScroll>
      <button
        className="w-8 h-8 hover:bg-deepGray rounded-full border-2 border-deepGray"
        type="button"
        onMouseDown={makeClickHandler(250)}
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
