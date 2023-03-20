import React, { ReactNode, useRef, useState } from 'react';

interface ICarousel {
  elements: ReactNode[];
}

function Carousel({ elements }: ICarousel) {
  const ref = useRef<HTMLDivElement>(null);
  const div = ref.current;
  const refId = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previousX, setPreviousX] = useState(0);

  const onClickHandler = (offset: number) => {
    div?.scrollTo({
      left: div.scrollLeft + offset,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setPreviousX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !div || refId.current) {
      return;
    }

    refId.current = requestAnimationFrame(() => {
      if (div) {
        const delta = e.clientX - previousX;
        div.scrollLeft += delta;
        setPreviousX(e.clientX);
      }
      refId.current = null;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-[5000px]">
      <button type="button" onClick={() => onClickHandler(-200)} className="w-[3vw]">
        &lt;
      </button>
      <div
        ref={ref}
        className="inline-block align-middle w-[94vw] whitespace-nowrap overflow-x-auto"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {elements}
      </div>
      <button type="button" onClick={() => onClickHandler(200)} className="w-[3vw]">
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
