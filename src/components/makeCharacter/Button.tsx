import React from 'react';

interface IButton {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function Button({ text, onClick, disabled }: IButton) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-[48%] bg-deepGray text-center cursor-pointer"
    >
      {text}
    </button>
  );
}

export default Button;
