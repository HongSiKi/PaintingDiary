import React from 'react';

interface IButton {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, onClick }: IButton) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-[48%] bg-deepGray text-center cursor-pointer"
    >
      {text}
    </button>
  );
}

export default Button;
