import React, { PropsWithChildren, useRef, useState } from 'react';

function WidthTouchScroll({ className, children }: PropsWithChildren<{ className: string }>) {
  const [isDragging, setIsDragging] = useState(false);
  const [previousX, setPreviousX] = useState(0);
  const myRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setIsDragging(true);
    setPreviousX(event.clientX);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!isDragging || !myRef.current || rafId.current) {
      return;
    }

    rafId.current = requestAnimationFrame(() => {
      const element = myRef.current;
      if (element) {
        const delta = event.clientX - previousX;
        element.scrollLeft += delta;
        setPreviousX(event.clientX);
      }

      rafId.current = null;
    });
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`${className} overflow-x-scroll cursor-pointer`}
      ref={myRef}
    >
      {children}
    </div>
  );
}

export default WidthTouchScroll;
