import React from 'react';

interface CardProps {
  imgSrc: string;
  text?: string | undefined;
}

function Card({ imgSrc, text }: CardProps) {
  return (
    <div className="select-none h-64 w-48 break-words overflow-hidden overflow-y-auto bg-lightGray rounded-2xl shadow-lg shadow-gray">
      <img className={`w-full ${text ? 'h-[60%]' : 'h-[100%]'}`} src={imgSrc} alt={imgSrc} />
      {text && <p>{text}</p>}
    </div>
  );
}

Card.defaultProps = {
  text: undefined,
};

export default Card;
