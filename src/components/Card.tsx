import React from 'react';

interface CardProps {
  imgSrc: string;
  text: string;
}

function Card({ imgSrc, text }: CardProps) {
  return (
    <div className="select-none h-64 w-48 break-words overflow-hidden overflow-y-auto bg-lightGray rounded-2xl shadow-lg shadow-gray">
      <img className="h-[60%] w-full" src={imgSrc} alt={imgSrc} />
      {text && <p>{text}</p>}
    </div>
  );
}

export default Card;
