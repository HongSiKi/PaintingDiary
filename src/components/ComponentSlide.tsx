import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';

interface ComponentSlideProps {
  elements: ReactNode[];
  min: number;
  mid: number;
  max: number;
}

type DynamicHolderProps = Pick<ComponentSlideProps, 'min' | 'mid' | 'max'>;

const DynamicHolder = styled.div<DynamicHolderProps>`
  flex-grow: 0;
  flex-shrink: 0;

  width: ${(props) => (1 / props.max) * 100}%;

  /* 768px 이하일 때 스타일 */
  @media (max-width: 768px) {
    width: ${(props) => (1 / props.mid) * 100}%;
  }

  /* 576px 이하일 때 스타일 */
  @media (max-width: 576px) {
    width: ${(props) => (1 / props.min) * 100}%;
  }
`;

function ComponentSlide({ elements, min, mid, max }: ComponentSlideProps) {
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
    <div className="flex mx-10 my-5 gap-2">
      <button type="button" onMouseDown={makeClickHandler(-250)}>
        &lt;
      </button>
      <div className="overflow-x-scroll" ref={scrollRef}>
        <div className="flex w-full gap-3 sm:bg-blend-color md:bg-blend-color-burn lg:bg-blend-color-dodge">
          {elements.map((element, i) => (
            <DynamicHolder min={min} mid={mid} max={max} key={i}>
              {element}
            </DynamicHolder>
          ))}
        </div>
      </div>
      <button type="button" onMouseDown={makeClickHandler(250)}>
        &gt;
      </button>
    </div>
  );
}

export default ComponentSlide;
