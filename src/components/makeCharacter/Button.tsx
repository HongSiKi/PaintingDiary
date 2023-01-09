import React from 'react';

function Button({ text }: { text: string }) {
  return (
    <button type="button" className="w-[48%] bg-deepGray text-center cursor-pointer">
      {text}
    </button>
  );
}

export default Button;
